<template>
\t<div class="l-layout">
\t\t<Header />
\t\t<v-main>
\t\t\t<router-view />
\t\t</v-main>
\t</div>
</template>


<script>
import Header from './Header.vue';

export default {
\tname: 'MainLayout',

\tcomponents: {
\t\tHeader,
\t},


\tmounted() {
\t\tconsole.log('VUE_APP_API_URL:', process.env.VUE_APP_API_URL);
\t},

};
</script>


<!-- <style lang="scss" src="./layout.scss"></style> -->
