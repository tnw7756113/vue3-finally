<template>
  <LoadingView :active="isLoading"/>
  <section class="mt-7">
    <div class="container">
      <div class="row justify-content-center align-items-center position-relative mt-5">
        <div class="col-10">
          <div class="progress mx-3" style="height: 5px;">
            <div class="progress-bar bg-beige" role="progressbar" style="width: 0%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
        <div class="col-10 d-flex justify-content-between position-absolute top-0 translate-middle-y mt-3">
          <div class="text-center">
            <span class="badge bg-brown text-beige rounded-circle p-2" style="width: 2rem; height: 2rem;">
              <i class="bi bi-bag-check-fill"></i>
            </span>
            <p class="mb-0">購物車</p>
          </div>
          <div class="text-center">
            <span class="badge bg-secondary rounded-circle p-2" style="width: 2rem; height: 2rem;">
              <i class="bi bi-clipboard-check-fill"></i>
            </span>
            <p class="mb-0">填寫資料</p>
          </div>
          <div class="text-center">
            <span class="badge bg-secondary rounded-circle p-2" style="width: 2rem; height: 2rem;">
              <i class="bi bi-credit-card-fill"></i>
            </span>
            <p class="mb-0">付款確認</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section v-if="!cartQty" class="my-6">
    <div class="container">
      <div class="border border-2 px-2 py-5 p-lg-5">
        <h2 class="text-center text-brown">購物清單目前尚無選購商品哦！</h2>
        <div class="col-5 col-md-2 mx-auto mt-5">
          <router-link to="/productList" class="btn btn-outline-brown btn-sm w-100">來去逛逛吧！</router-link>
        </div>
      </div>
    </div>
  </section>
  <section v-else class="my-6">
    <div class="container">
      <div class="border border-2 p-3">
        <div class="row row-cols-1 g-5 mx-0 justify-content-center">
          <div class="col-12 col-lg-8 py-3 px-0 table-responsive">
            <div class="px-2 text-brown">
              <h2 class="fs-3"><i class="bi bi-flower3"></i>購物清單</h2>
            </div>
            <table class="table align-middle mt-3">
              <thead class="table-beige text-brown text-nowrap">
                <tr>
                  <th style="width: 50px;"></th>
                  <th class="ps-3" style="width: 75px;">商品</th>
                  <th style="width: 200px;"></th>
                  <th class="text-end" style="width: 100px;">單價</th>
                  <th class="text-end" style="width: 100px;">數量</th>
                  <th class="text-end" style="width: 100px;">小計</th>
                </tr>
              </thead>
              <tbody class="text-nowrap text-brown" v-for="item in cart.carts" :key="item.id">
                <tr>
                  <td>
                    <button type="button" class="btn btn-outline-red btn-sm"
                    @click="delCart(item.product.title, item.id)">
                        <i class="bi bi-trash3-fill"></i>
                    </button>
                  </td>
                  <td>
                    <img :src="item.product.imageUrl" alt="item.product.title"
                    style="width: 75px; height: 50px; background-size: cover; background-position: center">
                  </td>
                  <td>{{ item.product.title }}</td>
                  <td class="text-end">NT$ {{ item.product.price }}</td>
                  <td>
                    <input type="number"
                        class="form-control form-control-sm ms-auto"
                        v-model.number="item.qty"
                        min="1" max="10"
                        @change="updateCart(item, item.qty)"
                        style="width: 50px;">
                  </td>
                  <td class="text-end">
                    NT$ {{ item.total }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="col-12 col-lg-8 p-0 d-flex flex-column">
            <div class="px-2 text-brown">
              <h2 class="fs-3"><i class="bi bi-flower3"></i>購物車總計</h2>
            </div>
            <div class="col-12 col-md-6 ms-auto">
              <div class="input-group mb-3">
                <input type="text" class="form-control bg-beige text-brown border-1 border-brown" placeholder="請輸入優惠碼" aria-describedby="coupon-code"
                v-model="couponCode">
                <button class="btn btn-outline-brown" type="button" id="coupon-code"
                @click="addCouponCode()">套用優惠卷</button>
              </div>
            </div>
            <table class="mt-1">
              <tbody class="text-brown">
                <tr>
                  <td class="text-end py-2" colspan="3">共 {{ cartQty }} 筆商品</td>
                </tr>
                <tr>
                  <td class="text-end py-2" colspan="2">商品金額</td>
                  <td class="text-end w-50">NT$ {{ $filters.currency(cart.total) }}</td>
                </tr>
                <tr>
                  <td class="text-end py-2" colspan="2">運費</td>
                  <td class="text-end w-50">NT$ {{ $filters.currency(deliveryFee) }}</td>
                </tr>
                <tr class="text-success">
                  <td class="text-end py-2" colspan="2">優惠折扣</td>
                  <td class="text-end w-50">- NT$ {{ $filters.currency(cart.total - cart.final_total) }}</td>
                </tr>
                <tr class="border-top border-brown">
                  <td class="text-end py-2" colspan="2">總計金額</td>
                  <td class="text-end w-50">NT$ {{ $filters.currency(cart.final_total) }}</td>
                </tr>
              </tbody>
            </table>
            <div class="mt-5 col-12 col-md-2 mx-auto">
              <button type="button" @click="toCheckInfo" class="btn btn-brown w-100">填寫資料</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      cart: {},
      deliveryFee: 0,
      cartQty: 0,
      couponCode: '',
      isLoading: false
    }
  },
  inject: {
    emitter: ['emitter']
  },
  methods: {
    getCard () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.isLoading = true
      this.axios.get(url)
        .then((res) => {
          if (res.data.success) {
            this.cart = res.data.data
            this.isLoading = false
            this.cartQty = res.data.data.carts.length
          }
        })
        .catch((error) => {
          this.isLoading = false
          this.emitter.emit('push-message', {
            style: 'danger',
            title: error.response.data.message
          })
        })
    },
    updateCart (item, qty) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`
      this.isLoading = true
      const cart = {
        product_id: item.product_id,
        qty
      }
      this.axios.put(url, { data: cart })
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false
            this.getCard()
          }
        })
        .catch((error) => {
          this.isLoading = false
          this.emitter.emit('push-message', {
            style: 'danger',
            title: error.response.data.message
          })
        })
    },
    delCart (item, id) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`
      this.isLoading = true
      this.axios.delete(url)
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false
            this.emitter.emit('update-cart', id)
            this.$httpMessageStatus(res, `已將${item}移除購物車`)
            this.getCard()
          }
        })
        .catch((error) => {
          this.isLoading = false
          this.emitter.emit('push-message', {
            style: 'danger',
            title: error.response.data.message
          })
        })
    },
    addCouponCode () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`
      const coupon = {
        code: this.couponCode
      }
      this.isLoading = true
      this.axios.post(url, { data: coupon })
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false
            this.$httpMessageStatus(res, '套用優惠卷')
            this.getCard()
          } else {
            this.isLoading = false
            this.$httpMessageStatus(res, '套用優惠卷')
          }
        })
        .catch((error) => {
          this.isLoading = false
          this.emitter.emit('push-message', {
            style: 'danger',
            title: error.response.data.message
          })
        })
    },
    toCheckInfo () {
      this.$router.push('/userCheckInfo')
    }
  },
  created () {
    this.getCard()
  }
}
</script>
