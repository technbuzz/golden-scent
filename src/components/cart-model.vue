<template>
  <div>
    <b-media class="mb-5">
      <template #aside>
        <b-img :src="product.thumbnail_url" width="64" alt="placeholder"></b-img>
      </template>

      <h6 class="m-0">{{ product.brand_value }}</h6>
      <p class="m-0 font-weight-light">{{ product.name }}</p>
      <h5>{{ product.special_price }}</h5>
      <a href="#" class="text-info">View Porduct Details</a>
    </b-media>
    <hr>
    <h4>Size</h4>
    <b-button href="#" block variant="primary btn-lg" @click="addToCart">Add To Cart</b-button>

  </div>
</template>

<script>
export default {
  name: 'CartModal',
  props: {
    product: Object
  },
  methods: {
    addToCart () {
      debugger
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss">
</style>
