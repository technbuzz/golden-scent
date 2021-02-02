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
      <b-card-body class="p-2">
        <b-card-title>{{ product.name }}</b-card-title>
        <b-card-text class="text-black-50">
          Some quick example text to build on the card title and make up the bulk of the card's
          content.
        </b-card-text>
        <b-container class="bv-example-row">
          <b-row class="justify-content-between">
            <h6 class="price font-weight-bold">{{ product.special_price }} SAR</h6>
            <h6><b-badge>-{{ product.special_price }} %</b-badge></h6>
          </b-row>

          <b-row class="justify-content-between">
            <p class="small"><s>444 SAR</s></p>
            <h6>Save 285.0 SAR</h6>
          </b-row>
        </b-container>
      </b-card-body>

      <b-button href="#" block variant="primary">Add</b-button>
      <!-- <pre>{{product}}</pre> -->
    </b-card>
  </div>
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
</style>
