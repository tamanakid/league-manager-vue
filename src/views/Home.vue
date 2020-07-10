<template>
  <div class="home">
    <span>Home</span>
    <v-btn @click="getTeamInfo">Get team info</v-btn>
  </div>
</template>

<script>
export default {
  name: 'Home',

  methods: {
    getTeamInfo() {
      console.log('Route parameters not properly implemented!');
    },
  },
};
</script>
