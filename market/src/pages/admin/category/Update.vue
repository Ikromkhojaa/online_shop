<template>

  <v-container fluid>
    <v-card width="50%">
      <v-card-title>
        Update Category
      </v-card-title>
      <v-card-text>
        <v-form ref="form">

          <v-text-field :rules="[requiredForm]" label="Name" v-model="category.name" outlined/>

          <v-select label="Categories" item-text="name" item-value="id"
                    :items="categories" v-model="category.parentId"
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
    <v-card class="mt-10">
      <v-card-title>
        Products
        <v-spacer/>
        <v-btn :to="{name:'CreateProduct',query:{'category-id':id}}" color="primary">
          Create Product
        </v-btn>
      </v-card-title>

      <v-card-text>
        <v-data-table
            :headers="headers"
            :items="products"

        >
          <template v-slot:item.updateId="{item}">
            <v-btn icon color="success" :to="{name:'UpdateProduct',params:{id:item.id}}">
              <v-icon>
                mdi-eye
              </v-icon>
            </v-btn>
          </template>
          <template v-slot:item.deleteId="{item}">
            <v-btn icon color="red" @click="deleteBrand(item)">
              <v-icon>
                mdi-delete
              </v-icon>
            </v-btn>
          </template>
        </v-data-table>
      </v-card-text>

    </v-card>
  </v-container>


</template>

<script>
export default {
  name: "Update",
  props: {
    id: {
      // eslint-disable-next-line vue/require-prop-type-constructor
      type: Number | String,
      required: true,
    }
  },
  data() {
    return {
      category: {},
      categories: [],
      headers: [{text: '#', value: 'id'}, {text: 'Name', value: 'name'}, {
        text: 'Edit',
        value: 'updateId'
      }, {text: 'Delete', value: 'deleteId'}],
      products: []
    }
  },

  async created() {
    const id = parseInt(this.id)

    if (!Number.isInteger(id)) {
      return this.$router.push({
        name: 'Brand'
      })
    }

    this.category = (await this.$axios.get(`category/${id}`)).data
    this.categories = ((await this.$axios.get('category')).data || []).filter(cat => cat.id !== this.category.id)
    this.products = (await this.$axios.get(`product/by-category-id/${id}`)).data
  },
  methods: {
    async save(category) {
      if (!this.$refs.form.validate()) {
        return
      }
      const res = await this.$axios.put(`category/${category.id}`, category)
      console.log(res)
    },
    requiredForm(val) {
      return !!val || 'this field required'
    }
  }
}
</script>

<style scoped>

</style>