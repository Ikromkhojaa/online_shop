<template>
  <v-card width="50%">
    <v-card-title>
      Create Category
    </v-card-title>
    <v-card-text>
      <v-form ref="form">
        <v-text-field label="Name" v-model="category.name" outlined/>
        <v-select label="Categories" item-text="name" item-value="id" :items="categories" v-model="category.parentId"
                  outlined/>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer/>
      <v-btn @click="save(category)" color="primary">
        Save
      </v-btn>
      <v-btn to="category" text>
        Back
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "Create",
  data() {
    return {
      category: {},
      categories: []
    }
  },
  async created() {
    this.categories = (await this.$axios.get('category')).data || []
  },
  methods: {
    async save(category) {

      if (!this.$refs.form.validate()) {
        console.log(this.$refs.form.validate())
        return
      }
      const data = (await this.$axios.post('category', category)).data
      if (!data?.id) {
        return
      }
      await this.$router.push({
        name: 'Category',
      })
    },
    requiredForm1(val) {
      return !!val || 'this field required'
    }
  }
}
</script>

<style scoped>

</style>