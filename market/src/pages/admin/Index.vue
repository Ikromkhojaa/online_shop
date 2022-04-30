<template>
  <v-app>
    <Navbar title="Admin Panel"/>
    <Sidebar/>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar'
export default {
  "name": "Index",
  components: {
    Navbar,
    Sidebar,
  }
};
</script>