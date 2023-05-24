<template>
  <LoadingView :active="isLoading"></LoadingView>
  <section class="mt-7">
    <div class="container">
      <div class="row justify-content-center align-items-center position-relative mt-5">
        <div class="col-10">
          <div class="progress mx-3" style="height: 5px">
            <div
              class="progress-bar bg-green"
              role="progressbar"
              style="width: 50%"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        <div class="col-10 d-flex justify-content-between position-absolute top-0 translate-middle-y mt-3">
          <div class="text-center">
            <span
              class="badge bg-green rounded-circle p-2"
              style="width: 2rem; height: 2rem">
              <i class="bi bi-bag-check-fill"></i>
            </span>
            <p class="mb-0">購物車</p>
          </div>
          <div class="text-center">
            <span
              class="badge bg-green rounded-circle p-2"
              style="width: 2rem; height: 2rem">
              <i class="bi bi-clipboard-check-fill"></i>
            </span>
            <p class="mb-0">填寫資料</p>
          </div>
          <div class="text-center">
            <span
              class="badge bg-secondary rounded-circle p-2"
              style="width: 2rem; height: 2rem">
              <i class="bi bi-credit-card-fill"></i>
            </span>
            <p class="mb-0">付款確認</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="mt-5">
    <div class="container">
      <div class="row g-3 my-5 flex-lg-row-reverse">
        <div class="col-12 col-lg-6">
          <div class="border border-2 p-5">
            <div class="row row-cols-1 g-5">
              <div class="col">
                <div class="px-2">
                  <h2><i class="bi bi-flower3"></i>購物清單</h2>
                </div>
                <div class="row flex-column g-3 mt-3">
                  <div class="col-10" v-for="item in cart.carts" :key="item.id">
                    <div class="card border-0">
                      <div class="row">
                        <div class="col-md-5">
                          <img
                            :src="item.product.imageUrl"
                            class="img-fluid"
                            :alt="item.product.title"
                          />
                        </div>
                        <div class="col-md-7">
                          <div class="card-body p-0">
                            <h5 class="card-title">{{ item.product.title }}</h5>
                            <p class="card-text">數量：{{ item.qty }}</p>
                            <p class="card-text">NT$ {{ item.product.price }}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col d-flex flex-column justify-content-between">
                <div>
                  <div class="px-2">
                    <h2><i class="bi bi-flower3"></i>購物總計</h2>
                  </div>
                  <table class="mt-3 w-100">
                    <tbody>
                      <tr>
                        <td style="width: 40%">共 {{ cartQty }} 筆商品</td>
                        <td class="text-end p-2" style="width: 25%">商品金額</td>
                        <td class="text-end" style="width: 35%">
                          NT$ {{ $filters.currency(cart.total) }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-end p-2" colspan="2">運費總計</td>
                        <td class="text-end" style="width: 35%">
                          NT$ {{ $filters.currency(deliveryFee) }}
                        </td>
                      </tr>
                      <tr class="text-success">
                        <td class="text-end p-2" colspan="2">優惠折扣</td>
                        <td class="text-end" style="width: 35%">
                          - NT$
                          {{ $filters.currency(cart.total - cart.final_total) }}
                        </td>
                      </tr>
                      <tr class="border-top border-bottom border-dark">
                        <td class="text-end p-2" colspan="2">總計金額</td>
                        <td class="text-end" style="width: 35%">
                          NT$ {{ $filters.currency(cart.final_total) }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div class="border border-2 p-5 h-100">
            <div class="row g-5">
              <div class="col-12">
                <div class="px-2">
                  <h2><i class="bi bi-flower3"></i>收件人資料</h2>
                </div>
                <VForm
                  class="row flex-column g-3 mt-3"
                  v-slot="{ errors }"
                  @submit="createOrder">
                  <div class="col">
                    <label for="userName" class="form-label">收件人姓名</label>
                    <VField
                      type="text"
                      name="姓名"
                      class="form-control"
                      id="userName"
                      placeholder="請輸入姓名"
                      :class="{ 'is-invalid': errors['姓名'] }"
                      rules="required"
                      v-model="from.user.name"
                    ></VField>
                    <ErrorMessage
                      name="姓名"
                      class="invalid-feedback"
                    ></ErrorMessage>
                  </div>
                  <div class="col">
                    <label for="userEmail" class="form-label">Email</label>
                    <VField
                      type="email"
                      name="Email"
                      class="form-control"
                      id="userEmail"
                      placeholder="請輸入Email"
                      :class="{ 'is-invalid': errors['Email'] }"
                      rules="email|required"
                      v-model="from.user.email"
                    ></VField>
                    <ErrorMessage
                      name="Email"
                      class="invalid-feedback"
                    ></ErrorMessage>
                  </div>
                  <div class="col">
                    <label for="userTel" class="form-label">收件人電話</label>
                    <VField
                      type="tel"
                      name="電話"
                      class="form-control"
                      id="userTel"
                      placeholder="請輸入電話"
                      :class="{ 'is-invalid': errors['電話'] }"
                      rules="required"
                      v-model="from.user.tel"
                    ></VField>
                    <ErrorMessage
                      name="電話"
                      class="invalid-feedback"
                    ></ErrorMessage>
                  </div>
                  <div class="col">
                    <label for="userAddress" class="form-label">收件人地址</label>
                    <VField
                      type="text"
                      name="地址"
                      class="form-control"
                      id="userAddress"
                      placeholder="請輸入地址"
                      :class="{ 'is-invalid': errors['地址'] }"
                      rules="required"
                      v-model="from.user.address"
                    ></VField>
                    <ErrorMessage
                      name="地址"
                      class="invalid-feedback"
                    ></ErrorMessage>
                  </div>
                  <div class="col">
                    <label for="userPay" class="form-label">付款方式</label>
                    <VField
                      id="userPay"
                      name="付款方式"
                      class="form-control"
                      :class="{ 'is-invalid': errors['付款方式'] }"
                      rules="required"
                      v-model="from.payment_method"
                      as="select">
                      <option disabled value="">請選擇付款方式</option>
                      <option v-for="item in paymentMethod" :key="item.value" :value="item.value">{{ item.value }}</option>
                    </VField>
                    <ErrorMessage
                      name="付款方式"
                      class="invalid-feedback"
                    ></ErrorMessage>
                  </div>
                  <div class="col">
                    <label for="userMessage" class="form-label">留言</label>
                    <textarea style="resize: none;"
                      class="form-control"
                      id="userMessage"
                      rows="3"
                      v-model="from.message"
                    ></textarea>
                  </div>
                  <div class="col">
                    <button
                      type="submit"
                      class="btn btn-black w-100 mt-4">
                      前往結帳
                    </button>
                  </div>
                </VForm>
              </div>
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
      from: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: '',
        payment_method: ''
      },
      paymentMethod: [
        { value: '貨到付款' }
      ],
      isLoading: false
    }
  },
  methods: {
    getCart () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.isLoading = true
      this.axios.get(url).then((res) => {
        if (res.data.success) {
          this.cart = res.data.data
          this.isLoading = false
          this.cartQty = res.data.data.carts.length
          console.log(res)
        }
      })
    },
    createOrder () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`
      const order = this.from
      this.axios.post(url, { data: order }).then((res) => {
        console.log(res)
        this.from = {}
        this.$router.push(`/checkout/${res.data.orderId}`)
      })
    }
  },
  created () {
    this.getCart()
  }
}
</script>
