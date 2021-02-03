<template>
  <div>
    <b-card
      title="Card Title"
      :img-src="product.image_url"
      img-alt="Image"
      img-top
      tag="article"
      no-body
      style="max-width: 20rem;"
    >
      <b-card-body class="px-3 py-1">
        <b-card-title class="mb-1">{{ product.brand_value }}</b-card-title>
        <b-card-text class="text-black-50 font-weight-light">
          {{ product.name }}
        </b-card-text>
        <b-container class="price-wrapper">
          <b-row class="justify-content-between">
            <h6 class="price font-weight-bold">{{ product.special_price }} {{ product.currency }}</h6>
            <h6><b-badge class="badge-cart" v-if="showDiscount">-{{ savedPercent }} %</b-badge></h6>
          </b-row>

          <b-row class="justify-content-between" v-if="showDiscount">
            <p class="small"><s>{{ originalPrice }} {{ product.currency }}</s></p>
            <h6>Save {{ saved }} {{ product.currency }}</h6>
          </b-row>
        </b-container>
      </b-card-body>

      <div class="px-3 pb-2">
        <b-button href="#" block variant="primary" @click="showModal">{{ this.avilable }}</b-button>
      </div>
    </b-card>

    <b-modal v-model="cartModel" title="Add item to cart" hide-footer>
      <cart-model :product="product" @close="hideModal" />
    </b-modal>
  </div>
</template>

<script>
import CartModel from './cart-model.vue'
import { findDiscount } from './helpers.js'

export default {
  name: 'Product',
  props: {
    product: Object
  },
  created () {
    this.calculateDiscount()
  },
  computed: {
    avilable () {
      return this.product.in_stock ? 'Add' : 'Notify Me'
    }
  },
  data () {
    return {
      cartModel: false,
      showDiscount: false,
      originalPrice: 0,
      saved: 0,
      savedPercent: 0
    }
  },
  components: {
    CartModel
  },
  methods: {
    calculateDiscount () {
      const { default: currPrice, default_original: originalPrice } = this.product.price[this.product.currency]
      if (originalPrice > currPrice) {
        this.showDiscount = true
        this.originalPrice = originalPrice
        const { saved, savedPercent } = findDiscount(originalPrice, currPrice)
        this.saved = saved
        this.savedPercent = savedPercent
      }
    },
    showModal () {
      this.cartModel = true
    },
    hideModal () {
      this.cartModel = false
    }
  }
}
</script>

<style lang="scss" scoped>
  .price {
    color: red
  }
  .price-wrapper {
    min-height: 63px;
  }

  .card {
    img {
      mix-blend-mode: darken;
      transition: transform 500ms ease-in-out;

      &:hover{
        transform: scale(1.15);
      }
    }

    .card-text {
      min-height: 48px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      overflow: hidden;
      -webkit-box-orient: vertical;
    }

    h4.card-title {
      font-size: 1.3rem;
    }
  }

</style>
