<template>
  <div>
    <h1>Product List</h1>
    <product :product="product" v-for="(product, index) in products" v-bind:key="index"/>
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
