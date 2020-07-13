<template>
  <v-app-bar app absolute color="primary" dark>
    <HeaderLogo />

    <v-spacer></v-spacer>

    <template v-for="item in items">
      <HeaderItem v-bind="item" :key="item.name" />
    </template>

   <LoginDialog v-if="isLoginDialogOpen" />

  </v-app-bar>
</template>


<script>
import { mapState, mapGetters } from 'vuex';

import HeaderLogo from '@/layout/HeaderLogo.vue'
import HeaderItem from '@/layout/HeaderItem.vue'
import LoginDialog from '@/layout/LoginDialog.vue';
import headerItemsList from './headerItemsList'

export default {
  name: 'Header',

  components: {
    HeaderItem,
    HeaderLogo,
    LoginDialog,
  },


  data() {
    return {
      items: [],
    };
  },
  

  computed: {
    ...mapState('auth', {
      isLoginDialogOpen: state => state.isLoginDialogOpen,
    }),

    ...mapGetters('auth', [
      'isLoggedIn'
    ]),
  },


  /* As long as plugins are not needed, the refreshToken update required at startup is called from the App or Header Component */
  mounted() {
    this.$store.dispatch('auth/doRefreshToken', { isNotCatchable: true })
      .finally(() => {
        this.toggleHeaderItems();
        this.$watch('isLoggedIn', this.toggleHeaderItems);
      });
  },


  methods: {
    toggleHeaderItems() {
      if (this.isLoggedIn) {
        this.items = headerItemsList.filter(item => item.isActiveWhenLogged)
      } else {
        this.items = headerItemsList.filter(item => item.isActiveWhenUnlogged)
      }
    }
  }

  
};
</script>


<!-- <style lang="scss" src="./layout.scss"></style> -->
