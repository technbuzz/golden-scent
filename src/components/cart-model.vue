<template>
  <div>
    <b-media class="mb-5">
      <template #aside>
        <b-img :src="product.thumbnail_url" width="64" alt="placeholder"></b-img>
      </template>

      <h6 class="m-0">{{ product.brand_value }}</h6>
      <p class="m-0 font-weight-light">{{ product.name }}</p>
      <h5>{{ selectedSize.special_price }}</h5>
      <a href="#" class="text-info">View Porduct Details</a>
    </b-media>
    <hr>
    <div class="my-3">
      <h4>Size</h4>
      <b-button
        v-for="(btn, idx) in sizes"
        :key="idx"
        :pressed.sync="btn.pressedState"
        variant="outline-primary"
        class="mr-2"
        @click="changeSize(btn)"
      >
        {{ btn.option.size }}
      </b-button>
    </div>
    <b-button href="#" block variant="primary btn-lg" @click="addToCart">Add To Cart</b-button>

  </div>
</template>

<script>
export default {
  name: 'CartModal',
  props: {
    product: Object
  },
  created () {
    this.sizes = this.product.associated_products.map((item, index) => {
      const pressedState = index === 0 ? true : false
      return {
        ...item,
        pressedState
      }
    })
    console.log('this.sizes: ', this.sizes);
    this.selectedSize = this.product.associated_products[0]
  },
  data () {
    return {
      sizes: [],
      selectedSize: null
    }
  },
  methods: {
    addToCart () {
      debugger
      this.$emit('close')
    },
    changeSize (size) {
      this.sizes.forEach(size => { size.pressedState = false })
      size.pressedState = true
      this.selectedSize = size
    }
  }
}
</script>

<style lang="scss">
</style>
