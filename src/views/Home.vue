<template>
  <div class="home">
    <span>Home</span>
    <v-btn @click="getTeamInfo">Get team info</v-btn>
    <v-btn @click="getTeamPlayers">Get team players</v-btn>
  </div>
</template>

<script>
export default {
  name: 'Home',

  methods: {
    getTeamInfo() {
      this.$apiProxy.team.getInfo({
        params: { teamId: '5ed77419425a2462d4413759' }
      })
    },

    getTeamPlayers() {
      this.$apiProxy.team.getPlayers({
        params: { teamId: '5ed77419425a2462d4413759' }
      })
    },
  },
};
</script>
