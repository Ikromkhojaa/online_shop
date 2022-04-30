<template>
  <v-navigation-drawer
      app
      clipped
      color="grey"
      :value="getDrawer"
  >
    <v-list>
      <v-subheader>
        Reports
      </v-subheader>

      <v-list-item-group>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.path"
          color="primary"
        >

          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>

        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      drawer: false,
      items: [
        {text: "Brand", icon: "mdi-clock", path: "Brand"},
        {text: "Category", icon: "mdi-account", path: "Category"},
        {text: "Product", icon: "mdi-flag", path: "Product"},
      ]
    }
  },
};
</script>

<style scoped>

</style>