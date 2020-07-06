<template>
\t<v-app-bar app color="primary" dark>
\t\t<div class="d-flex align-center">
\t\t\t<v-img
\t\t\t\talt="Vuetify Logo"
\t\t\t\tclass="shrink mr-2"
\t\t\t\tcontain
\t\t\t\tsrc="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
\t\t\t\ttransition="scale-transition"
\t\t\t\twidth="40"
\t\t\t/>

\t\t\t<v-img
\t\t\t\talt="Vuetify Name"
\t\t\t\tclass="shrink mt-1 hidden-sm-and-down"
\t\t\t\tcontain
\t\t\t\tmin-width="100"
\t\t\t\tsrc="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
\t\t\t\twidth="100"
\t\t\t/>
\t\t</div>

\t\t<v-spacer></v-spacer>

\t\t<v-btn
\t\t\thref="https://github.com/vuetifyjs/vuetify/releases/latest"
\t\t\ttarget="_blank"
\t\t\ttext
\t\t>
\t\t\t<span class="mr-2">Latest Release</span>
\t\t\t<v-icon>mdi-open-in-new</v-icon>
\t\t</v-btn>
\t</v-app-bar>
</template>


<script>

export default {
\tname: 'Header',
};
</script>


<!-- <style lang="scss" src="./layout.scss"></style> -->
