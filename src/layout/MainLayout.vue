<template>
  <div>
    <div class="header">
      <!-- header -->
      <span>Header</span>
    </div>
    <div class="content">
      <!-- main -->
      <span>Content</span>
      <!-- sidebar -->
      <div class="sidebar">Sidebar</div>
    </div>
  </div>
</template>


<script>

export default {
  name: 'MainLayout',


  mounted() {
    console.log('VUE_APP_API_URL:', process.env.VUE_APP_API_URL);
  },

};
</script>


<!-- <style lang="scss" src="./layout.scss"></style> -->
