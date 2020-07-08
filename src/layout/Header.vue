<template>
  <v-app-bar app absolute color="primary" dark>
    <HeaderLogo />

    <v-spacer></v-spacer>

    <template v-for="action in getActions">
      <HeaderAction v-bind="action" :key="action.name" />
    </template>

   <LoginDialog v-if="isLoginDialogOpen && !isLoggedIn" />

  </v-app-bar>
</template>


<script>
import { mapState, mapGetters } from 'vuex';

import HeaderLogo from '@/layout/HeaderLogo.vue'
import HeaderAction from '@/layout/HeaderAction.vue'
import LoginDialog from '@/layout/LoginDialog.vue';

export default {
  name: 'Header',

  components: {
    HeaderAction,
    HeaderLogo,
    LoginDialog,
  },
  
  computed: {
    ...mapState('auth', {
      isLoginDialogOpen: state => state.isLoginDialogOpen,
    }),

    ...mapGetters('custom', [
      'getActions'
    ]),

    ...mapGetters('auth', [
      'isLoggedIn'
    ])
  },

  
};
</script>


<!-- <style lang="scss" src="./layout.scss"></style> -->
