<template>
  <div>
    <b-container class="bv-example-row">
      <h1>Product List</h1>
      <b-row>
        <b-col cols="12" sm="6" md="4" class="m-auto" v-for="(product, index) in products" v-bind:key="index">
          <product :product="product" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Product from './product.vue'
export default {
  name: 'ProductList',
  data () {
    return {
      products: []
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
      const res = await fetch('https://gs-euw1-public-data-prod.s3-eu-west-1.amazonaws.com/new-web/test/test.json')
      const { hits } = await res.json()
      this.products = hits
      console.log('products: ', hits);
    }
  }
}
</script>
