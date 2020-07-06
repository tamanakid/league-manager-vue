<template>
  <div class="l-layout">
    <Header />
    <v-main>
      <router-view />
    </v-main>
  </div>
</template>


<script>
import Header from './Header.vue';

export default {
  name: 'MainLayout',

  components: {
    Header,
  },


  mounted() {
    console.log('VUE_APP_API_URL:', process.env.VUE_APP_API_URL);
  },

};
</script>


<!-- <style lang="scss" src="./layout.scss"></style> -->
