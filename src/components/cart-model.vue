<template>
  <div>
    <b-media class="mb-5">
      <template #aside>
        <b-img :src="product.thumbnail_url" width="64" alt="placeholder"></b-img>
      </template>

      <h6 class="m-0">{{ product.brand_value }}</h6>
      <p class="m-0 font-weight-light">{{ product.name }}</p>
      <div v-if="selectedSize.showDiscount" class="d-flex">
        <h6 class="text-danger">{{ selectedSize.special_price }} {{ product.currency }}</h6>
        <small class="px-2"><s>{{ selectedSize.saved}} {{ product.currency}}</s></small>
        <h6>
          <b-badge class="badge-cart" >{{ selectedSize.savedPercent }} %</b-badge>
        </h6>
      </div>
      <h6 v-else>{{ selectedSize.special_price }}</h6>
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
    this.selectedSize = this.product.associated_products[0]
    this.calculateDiscount()
  },
  data () {
    return {
      sizes: [],
      selectedSize: null
    }
  },
  methods: {
    addToCart () {
      this.$emit('close')
    },
    changeSize (size) {
      this.sizes.forEach(size => { size.pressedState = false })
      size.pressedState = true
      this.selectedSize = size
    },
    calculateDiscount () {
      this.sizes = this.sizes.map(size => {
        if (size.regular_price > size.special_price) {
          const showDiscount = true
          const saved = size.regular_price - size.special_price
          const savedPercent = parseInt(saved / size.regular_price * 100)
          return {
            ...size,
            showDiscount,
            saved,
            savedPercent
          }
        }
        return size
      })
    }
  }
}
</script>

<style lang="scss">
</style>
