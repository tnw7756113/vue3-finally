<template>
  <LoadingView :active="isLoading"></LoadingView>
  <section class="mt-6">
    <div class="container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb my-3">
          <li class="breadcrumb-item"><router-link class="breadcrumb-text" to="/">首頁</router-link></li>
          <li class="breadcrumb-item"><router-link class="breadcrumb-text" to="/productList">產品列表</router-link></li>
          <li class="breadcrumb-item active" aria-current="page">{{ product.title }}</li>
        </ol>
      </nav>
    </div>
  </section>
  <section>
    <div class="container">
      <div class="row g-3">
        <div class="col-12 col-md-4 text-center">
          <img class="img-fluid" :src="product.imageUrl" :alt="product.title">
        </div>
        <div class="col-12 col-md-8">
          <div class="row">
              <div class="col-12 col-md-7">
                  <h2 class="fs-5">{{ product.title }}</h2>
              </div>
              <div class="col text-end">
                  <p v-if="product.origin_price !== product.price"
                    class="text-decoration-line-through mb-0 fs-6"
                  >NT$ {{ product.origin_price }}</p>
                  <p class="mb-2 fs-5">
                    <span v-if="product.origin_price !== product.price"
                    class="border border-3 border-red text-red px-1 me-3">SALE</span>
                    NT$ {{ product.price }}</p>
              </div>
              <hr class="text-red">
              <div class="col-12">{{ product.description }}</div>
              <div class="col-12 mt-5 d-flex justify-content-end">
                <div class="input-group" style="width: 180px;">
                  <select class="form-select border-black form-control-sm" v-model="qty">
                      <option :value="qty" v-for="qty in 10" :key="qty">{{ qty }}</option>
                  </select>
                  <button @click="addCart(product.id, qty)" class="btn btn-black">加入購物車</button>
                </div>
              </div>
          </div>
        </div>
        <div class="col-12 mt-5">
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button class="nav-link active text-green" id="content-tab" data-bs-toggle="tab" data-bs-target="#content" type="button" role="tab" aria-controls="content" aria-selected="true">描述</button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="content" role="tabpanel" aria-labelledby="content-tab">
              <ul v-if="product.content" class="p-3" style="list-style: none;">
                <li v-for="(text, id) in product.content.split('\n')" :key="id">{{ text }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="mt-3 bg-beige py-3">
    <div class="container">
      <div class="row row-cols-1 ">
        <div class="col">
          <hr class="text-red">
        </div>
        <div class="col">
          <h2 class="fs-6 text-green fw-bold"><i class="bi bi-flower3"></i>購物流程與須知</h2>
        </div>
        <div class="col">
          <p class="mb-2">【宅配服務】</p>
          <ul>
            <li>宅配配送區域僅限於台灣本島。</li>
            <li>商品到貨時間因地區不同有所差異，平均1~3個工作天送達，配達日仍以宅配貨運實際配送情況為主。</li>
            <li>宅配貨運遇節慶、節日或物流繁盛期送達時程會受影響，請以宅配公告、店家提醒說明為準，菓然保有出貨調整之權利。</li>
          </ul>
        </div>
        <div class="col">
          <p class="mb-2">【付款方式】</p>
          <ul>
            <li>付款方式目前只有貨到付款(現金)。</li>
            <li>菓然目前為是試營運狀態，訂購商品不限金額都免運費。</li>
          </ul>
        </div>
        <div class="col">
          <p class="mb-2">【商品相關】</p>
          <ul>
            <li>菓然安心品管維護良好品質。</li>
            <li>若您發現任何異常，如商品瑕疵不良、漏寄等等，請務必於第一時間聯絡客服，並留下訂購人資訊，我們將儘快為您處理後續退換貨事宜。</li>
            <li>依據「通訊交易解除權合理例外情事適用準則」第2條第一項：「易於腐敗、保存期限較短或解約時即將逾期」之商品，屬於消費者保護法第19條第一項但書所稱合理例外情事。自105年1月1日起，生鮮食品不適用於消費者保護法第19條，並不享有7天猶豫期。</li>
            <li>訂單或商品不良相關客服 07-7766123 ( 週一～五 10:30-17:00) 或客服信箱 example@gmail.com</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      product: {},
      id: '',
      qty: 1,
      isLoading: false
    }
  },
  inject: {
    emitter: ['emitter']
  },
  methods: {
    getProduct () {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`
      this.axios.get(api).then((res) => {
        if (res.data.success) {
          this.product = res.data.product
          this.isLoading = false
        }
      })
    },
    addCart (id, qty) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      const cart = {
        product_id: id,
        qty
      }
      this.axios.post(api, { data: cart })
        .then((res) => {
          if (res.data.success) {
            console.log(res.data)
            this.emitter.emit('update-cart', id)
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
