<template>
 <CustomDialog @close="onCloseDialog">

    <template v-slot:header>
      <span>Log In</span>
    </template>

    <template v-slot:content>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-text-field outlined hide-details v-model="usernameOrEmail" label="Username or Email" required></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              outlined hide-details v-model="password" label="Password" required
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showPassword ? 'text' : 'password'"
              @keydown.enter="onClickLogin"
              @click:append="toggleShowPassword"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </template>

    <template v-slot:footer>
      <v-btn class="primary" @click="onClickLogin">Log in</v-btn>
      <v-btn @click="onCloseDialog">Close</v-btn>
      <v-btn @click="onRefreshToken">RefreshCookie</v-btn>
    </template>

  </CustomDialog>
</template>


<script>
import { mapMutations } from 'vuex';

import { AUTH_CLOSE_LOGIN_DIALOG } from '@/store/modules/auth/mutations'
import CustomDialog from '@/components/CustomDialog.vue';

export default {
  name: 'LoginLayout',

  components: {
    CustomDialog,
  },

  data() {
    return {
      usernameOrEmail: '',
      password: '',
      showPassword: false,
    };
  },

  methods: {
    toggleShowPassword() {
      this.showPassword = !this.showPassword;
    },

    ...mapMutations('auth', {
      onCloseDialog: AUTH_CLOSE_LOGIN_DIALOG
    }),

    onClickLogin() {
      const payload = {
        usernameOrEmail: this.usernameOrEmail, 
        password: this.password
      };
      this.$store.dispatch('auth/doLogin', payload);
    },

    onRefreshToken() {
      this.$store.dispatch('auth/doRefreshToken');
    },
  },

};
</script>


<!-- <style lang="scss" src="./layout.scss"></style> -->
