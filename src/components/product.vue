<template>
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
      <b-container class="bv-example-row">
        <b-row class="justify-content-between">
          <h6 class="price font-weight-bold">{{ product.special_price }} SAR</h6>
          <h6><b-badge class="badge-cart">-{{ product.special_price }} %</b-badge></h6>
        </b-row>

        <b-row class="justify-content-between">
          <p class="small"><s>444 SAR</s></p>
          <h6>Save 285.0 SAR</h6>
        </b-row>
      </b-container>
    </b-card-body>

    <div class="px-3 pb-2"><b-button href="#" block variant="primary">Add</b-button></div>
  </b-card>
</template>

<script>
export default {
  name: 'Product',
  props: {
    product: Object
  }
}
</script>

<style lang="scss">
  .price {
    color: red
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
    }

    h4.card-title {
      font-size: 1.3rem;
    }
  }

</style>
