<template>
  <v-card width="60%">
    <v-card-title>
      Create Brand
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field label="Name" outlined v-model="brand.name" />
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn @click="save(brand)" color="primary">
        Save
      </v-btn>
      <v-btn to="/brand" text>
        Back
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "Create",
  data () {
    return {
      brand: {}
    }
  },

  methods: {
    async save(brand) {
      const data = (await this.$axios.post('brand', brand)).data
      if(!data?.id) {
        return
      }

      await this.$router.push({
        name: "Brand",
        params: {id: data.id}
      })
    }
  }
};
</script>

<style scoped>

</style>