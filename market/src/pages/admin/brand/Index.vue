<template>
  <v-card>
    <v-card-title dense>
      Brands
      <v-spacer></v-spacer>
      <v-btn
        color="primary"
        @click="CreateBrand()"
      >
        Create Brand
      </v-btn>
    </v-card-title>

    <v-card-text>
      <v-data-table
        :headers="headers"
        :items="brands"
      >

        <template v-slot:item.updateId="{item}">
          <v-btn icon @click="updateId(item)" color="green">
            <v-icon>
              mdi-eye
            </v-icon>
          </v-btn>
        </template>

        <template v-slot:item.deleteId="{item}">
          <v-btn icon @click="deleteBrand(item)" color="red">
            <v-icon>
              mdi-delete
            </v-icon>
          </v-btn>
        </template>

      </v-data-table>
    </v-card-text>
  </v-card>
</template>

<script>
import brand from "@/router/module/brand";

export default {
  name: "Index",
  data () {
    return {
      headers: [
        {text: "#", value: "id"},
        {text: "Name", value: "name"},
        {text: "Update", value: "updateId"},
        {text: "Delete", value: "deleteId"}
      ],
      brands: []
    }
},
  computed: {
    mapBrand() {
      return this.brands.map(brand => {
        return {
          ...brand,
          deleteId: brand.id
        }
      })
    }
  },

  async created () {
    this.brands  = (await this.$axios.get('brand')).data
  },

  methods: {
    updateBrand({ id }) {
      this.$router.push({
        name: "UpdateBrand",
        params: {id}
      })
    },
    CreateBrand() {
      this.$router.push({
        name: "CreateBrand",
        params: true
      })
    },
    async deleteBrand (item) {
      if (!(await this.$axios.delete(`brand/${item.id}`))) {
        return
      }
      const index = this.brands.indexOf(item)
      if (index === -1) {
        return
      }
      this.brands.splice(index, 1)
    },

    updateId({id}) {
      this.$router.push({
        name: "UpdateBrand",
        params: {id:id}
      })
    }
  },


};
</script>

<style scoped>

</style>