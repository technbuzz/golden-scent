<template>
  <div>
    <b-container class="bv-example-row">

      <h1>Product List</h1>

      <div class="d-flex justify-content-center" v-if="loading">
        <b-spinner class="m-5" type="grow" label="Loading..."></b-spinner>
      </div>

      <b-row>
        <b-col cols="12" sm="6" md="4" class="m-auto" v-for="(product, index) in products" v-bind:key="index">
          <product :product="product" />
        </b-col>
      </b-row>

      <b-alert v-if="error" variant="danger" show>
        Unable to fetch the data. Please try again
      </b-alert>
    </b-container>
  </div>
</template>

<script>
import Product from './product.vue'
const axios = require('axios')
export default {
  name: 'ProductList',
  data () {
    return {
      loading: true,
      products: [],
      error: false
    }
  },
  async created () {
    await this.fetchProducts()
  },
  components: {
    Product
  },
  methods: {
    async fetchProducts () {
      try {
        const { data } = await axios.get('https://gs-euw1-public-data-prod.s3-eu-west-1.amazonaws.com/new-web/test/test.json')
        this.products = data.hits
      } catch (error) {
        this.error = true
      } finally {
        this.loading = false
      }
    }
  }
}
</script>
