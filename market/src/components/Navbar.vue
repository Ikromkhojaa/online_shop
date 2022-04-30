<template>
  <v-app-bar
      app
      color="primary"
      dark
      clipped-left
  >

    <v-app-bar-nav-icon @click="setDrawer()" />

<!--    <v-btn icon @click="setDrawer()">-->
<!--      <v-icon >-->
<!--        mdi-close-->
<!--      </v-icon>-->
<!--    </v-btn>-->

    <v-app-bar-title>
      {{ title }}
    </v-app-bar-title>
  </v-app-bar>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    title: String,
  }
};
</script>

<style scoped>

</style>