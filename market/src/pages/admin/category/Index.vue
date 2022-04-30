<template>
  <v-card>
    <v-card-title>
      Categories
      <v-spacer/>
      <v-btn :to="{name: 'CreateCategory'}" color="primary">
        Create Category
      </v-btn>
    </v-card-title>

    <v-card-text>
      <v-data-table
          :headers="headers"
          :items="categories"

      >
        <template v-slot:item.parentId="{item}">
          <v-chip>
            {{ item.parentId ? 'children' : 'parent' }}
          </v-chip>
        </template>
        <template v-slot:item.updateId="{item}">
          <v-btn icon color="success" :to="{name:'UpdateCategory',params:{id:item.id}}">
            <v-icon>
              mdi-eye
            </v-icon>
          </v-btn>
        </template>
        <template v-slot:item.deleteId="{item}">
          <v-btn icon color="red" @click="deleteCategory(item)">
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
export default {
  name: "Index",
  data() {
    return {
      headers: [
        {text: '#', value: 'id'},
        {text: 'Name', value: 'name'},
        {text: 'Type', value: 'parentId'},
        {text: 'Edit', value: 'updateId'},
        {text: 'Delete', value: 'deleteId'}
      ],
      categories: []
    }
  },
  async created() {
    this.categories = (await this.$axios.get('category')).data
  },
  computed: {
    mapBrand() {
      return this.categories.map(brand => {
        return {
          ...brand,
          deleteId: brand.id,
          updateId: brand.id
        }
      })
    }
  },
  methods: {
    updateBrand({id}) {
      this.$router.push({
        name: 'CategoryBrand',
        params: {id}
      })
    },
    async deleteCategory(item) {
      if (!(await this.$axios.delete(`category/${item.id}`))) {
        return
      }
      const index = this.categories.indexOf(item)

      if (index === -1) {
        return
      }

      this.categories.splice(index, 1)
    }
  }
}
</script>

<style scoped>

</style>