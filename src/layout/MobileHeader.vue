<template>
  <div>
    <v-app-bar app absolute color="primary" dark>
      <HeaderLogo />

      <v-spacer></v-spacer>

      <div>
        <v-btn outlined class="mx-3" @click.stop="onShowNavDrawer">
          <v-icon>mdi-menu-open</v-icon>
        </v-btn>
      </div>


      <LoginDialog v-if="isLoginDialogOpen" />

    </v-app-bar>
    <v-navigation-drawer
      v-model="isShowNavDrawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

import HeaderLogo from '@/layout/HeaderLogo.vue'
import LoginDialog from '@/layout/LoginDialog.vue';
import headerItemsList from './headerItemsList'

export default {
  name: 'Header',

  components: {
    HeaderLogo,
    LoginDialog,
  },


  data() {
    return {
      items: [],
      isShowNavDrawer: false,
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
    },

    onShowNavDrawer() {
      this.isShowNavDrawer = true;
    }
  }

  
};
</script>


<!-- <style lang="scss" src="./layout.scss"></style> -->
