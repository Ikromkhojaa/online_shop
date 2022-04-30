<template>
  <v-card width="60%">
    <v-card-title>
      Update Brand
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
  name: "Update",
  props: {
    id: {
      type: String | Number,
      required:  true
    }
  },

  data() {
    return {
      brand: {},
      brands: []
    }
  },

  async created () {
    const id = parseInt(this.id);
    if (!Number.isInteger(id)) {
      return this.$router.push({
        name: 'Brand',
        params: {id}
      })
    }
    this.brand = (await this.$axios.get(`brand/${id}`)).data
  },

  methods: {
    async save(brand) {
      this.brands = (await this.$axios.put(`brand/${brand.id}`, brand)).data
      // console.log(response);
      return  this.$router.push({
        name: "Brand",
        // params: {id}
      })
    }
  }
};
</script>

<style scoped>

</style>