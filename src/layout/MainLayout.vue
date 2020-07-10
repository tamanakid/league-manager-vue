<template>
  <div>
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

};
</script>


<!-- <style lang="scss" src="./layout.scss"></style> -->
