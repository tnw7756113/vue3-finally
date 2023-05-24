<template>
<Loading :active="isLoading"></Loading>
<section class="mt-7">
  <div class="container">
    <div class="row justify-content-center align-items-center position-relative mt-5">
      <div class="col-10">
        <div class="progress mx-3" style="height: 5px;">
          <div class="progress-bar bg-green" role="progressbar" style="width: 100%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>
      <div class="col-10 d-flex justify-content-between position-absolute top-0 translate-middle-y mt-3">
        <div class="text-center">
          <span class="badge bg-green rounded-circle p-2" style="width: 2rem; height: 2rem;">
            <i class="bi bi-bag-check-fill"></i>
          </span>
          <p class="mb-0">購物車</p>
        </div>
        <div class="text-center">
          <span class="badge bg-green rounded-circle p-2" style="width: 2rem; height: 2rem;">
            <i class="bi bi-clipboard-check-fill"></i>
          </span>
          <p class="mb-0">填寫資料</p>
        </div>
        <div class="text-center">
          <span class="badge bg-green rounded-circle p-2" style="width: 2rem; height: 2rem;">
            <i class="bi bi-credit-card-fill"></i>
          </span>
          <p class="mb-0">付款確認</p>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="my-6">
  <div class="container">
    <div class="border p-3 p-md-5">
      <div class="row justify-content-center">
        <form class="col-12">
          <div class="px-2">
            <h2><i class="bi bi-flower3"></i>購物清單</h2>
          </div>
          <table class="table align-middle mt-3">
            <thead class="table-success">
              <tr>
                  <th style="width: 25%;">品名</th>
                  <th class="text-end" style="width: 25%;">單價</th>
                  <th class="text-end" style="width: 25%;">數量</th>
                  <th class="text-end" style="width: 25%;">小計</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in order.products" :key="item.id">
                  <td>{{ item.product.title }}</td>
                  <td class="text-end">{{ $filters.currency(item.product.price) }}</td>
                  <td class="text-end">{{ item.qty }} / {{ item.product.unit }}</td>
                  <td class="text-end">{{ $filters.currency(item.total) }}</td>
              </tr>
            </tbody>
          </table>
          <table class="w-100">
              <tbody>
                <tr>
                  <td class="text-end p-2" colspan="3" style="width: 75%;">運費</td>
                  <td class="text-end p-2"  style="width: 25%;">NT$ {{ $filters.currency(deliveryFee) }}</td>
                </tr>
                <tr class="text-success">
                  <td class="text-end p-2" colspan="3">優惠折扣</td>
                  <td class="text-end p-2" >- NT$ {{ $filters.currency(cart.total - cart.final_total) }}</td>
                </tr>
                <tr class="border-top border-bottom border-dark">
                  <td class="text-end p-2" colspan="3">總計金額</td>
                  <td class="text-end p-2">NT$ {{ $filters.currency(order.total) }}</td>
                </tr>
              </tbody>
            </table>
        </form>
        <form class="col-12 mt-3">
          <div class="px-2">
            <h2><i class="bi bi-flower3"></i>收件人資料</h2>
          </div>
          <table class="table border mt-3">
            <tbody>
            <tr>
              <th width="100" class="table-dark">Email</th>
              <td>{{ order.user.email }}</td>
            </tr>
            <tr>
              <th class="table-dark">姓名</th>
              <td>{{ order.user.name }}</td>
            </tr>
            <tr>
              <th class="table-dark">收件人電話</th>
              <td>{{ order.user.tel }}</td>
            </tr>
            <tr>
              <th class="table-dark">收件人地址</th>
              <td>{{ order.user.address }}</td>
            </tr>
            <tr>
              <th class="table-dark">付款狀態</th>
              <td>
                <span v-if="!order.is_paid">尚未付款</span>
                <span v-else class="text-success">付款完成</span>
              </td>
            </tr>
            </tbody>
          </table>
          <div class="text-end" v-if="order.is_paid === false">
            <button @click="payOrder" class="btn btn-dark">確認付款</button>
          </div>
        </form>
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
      order: {
        user: {}
      },
      deliveryFee: 0,
      orderId: '',
      isLoading: false
    }
  },
  inject: {
    emitter: ['emitter']
  },
  methods: {
    getOrder () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.orderId}`
      this.axios.get(url)
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false
            this.order = res.data.order
            console.log(res.data.order)
          }
        })
    },
    getCart () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.axios.get(url).then((res) => {
        if (res.data.success) {
          this.cart = res.data.data
        }
      })
    },
    payOrder () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`
      this.axios.post(url).then((res) => {
        if (res.data.success) {
          this.emitter.emit('update-cart', this.cart.carts.id)
          this.$httpMessageStatus(res, '付款', '，將於5秒後跳回首頁！')
          this.getOrder()
          this.isLoading = false
          setTimeout(() => {
            this.$router.push('/')
          }, 5000)
        } else {
          this.$httpMessageStatus(res, '付款')
          this.getOrder()
          this.isLoading = false
        }
      })
    }
  },
  created () {
    this.orderId = this.$route.params.orderId
    this.getCart()
    this.getOrder()
  }
}
</script>
