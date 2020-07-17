<template>
  <div>
    <Header class="d-none d-lg-block"/>
    <MobileHeader class="d-lg-none" />
    <v-main>
      <router-view />
    </v-main>
  </div>
</template>


<script>
import Header from './Header.vue';
import MobileHeader from './MobileHeader.vue';


export default {
  name: 'MainLayout',

  components: {
    Header,
    MobileHeader
  },

};
</script>


<!-- <style lang="scss" src="./layout.scss"></style> -->
