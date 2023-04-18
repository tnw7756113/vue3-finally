<template>
  <LoadingView :active="isLoading"></LoadingView>
  <div class="container">
    <div class="row">
      <div class="col">
        <img :src="product.imageUrl" :alt="product.title">
      </div>
      <div class="col">
        <div class="row">
            <div class="col">
                <h2>{{ product.title }}</h2>
            </div>
            <div class="col text-end">
                <p v-bind:class="{ 'text-decoration-line-through': product.origin_price > product.price }"
                >NT$ {{ product.origin_price }}</p>
                <p v-bind:class="{ 'd-none': product.origin_price === product.price }"
                ><span class="border border-3 border-red text-red px-2 me-3">SALE</span>NT$ {{ product.price }}</p>
            </div>
            <hr>
            <div class="col-12">{{ product.description }}</div>
            <div class="col">
              <div class="input-group" style="width: 200px;">
                <select class="form-select border-black" v-model="qty">
                    <option selected disabled>選擇數量</option>
                    <option :value="qty" v-for="qty in 10" :key="qty">{{ qty }}</option>
                </select>
                <button @click="addCart(product.id)" class="btn btn-black">加入購物車</button>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      product: {},
      id: '',
      isLoading: false
    }
  },
  methods: {
    getProduct () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          this.product = res.data.product
        }
      })
    },
    addCart (id) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      const cart = {
        product_id: id,
        qty: 1
      }
      this.$http.post(api, { data: cart })
        .then((res) => {
          if (res.data.success) {
            console.log(res.data)
            this.isLoading = false
            this.$httpMessageStatus(res, '加入購物車')
          }
        })
    }
  },
  created () {
    this.id = this.$route.params.productId
    this.getProduct()
  }
}
</script>
