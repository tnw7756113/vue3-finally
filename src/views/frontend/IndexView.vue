<template>
  <header class="mt-6">
    <div class="header text-beige">
      <div class="bg-dark-gradient-200 container d-flex flex-column justify-content-center align-items-center">
        <h1 class="header-text d-none d-md-block">果然還是菓然美味</h1>
        <h1 class="header-text fs-3 d-md-none">果然還是菓然美味</h1>
        <router-link to="/productList" class="btn btn-outline-beige mt-3">快來選購</router-link>
      </div>
    </div>
  </header>
  <section class="my-6">
    <div class="container d-flex">
      <div class="row g-1 w-100">
        <div data-aos="zoom-in" class="col-12 col-md-6 d-flex flex-column justify-content-center align-items-start">
          <h2 class="p-2 text-brown fw-bold title-typeset-index bg-beige border-start border-5 border-brown mb-0">關於和菓子</h2>
          <div class="p-3 p-lg-5 w-100 text-typeset-index bg-green-light text-beige fs-5 shadow">
            <p>和菓子是一種日本傳統的甜點，通常由糯米粉、豆蓉、紅豆、葡萄糖和水製成， 在日本文化中扮演著重要的角色，被用於慶祝節日、茶道儀式和其他特殊場合。</p>
            <p class="mb-0">和菓子吃起來的口感柔軟、糯潤，且味道輕甜而不過分，有些還帶有花茶或茶葉的香氣，配合著喝茶的習慣，增添了一種雅致的氛圍，和菓子不僅僅代表了日本傳統的美學和對細節的追求，也是一種呈現藝術和味覺的完美結合。</p>
          </div>
        </div>
        <div data-aos="zoom-in" data-aos-delay="500" class="col-12 col-md-6"  style="z-index: -1; position: relative;">
          <img class="img-fluid shadow" src="@/assets/imgs/wagasi01.webp" alt="wagasi">
        </div>
      </div>
    </div>
  </section>
  <section class="mt-6">
    <div class="container py-5">
      <div class="d-flex justify-content-center">
        <h2 class="p-2 text-brown fw-bold bg-beige border-start border-5 border-brown mb-0">為什麼選擇菓然的和菓子？</h2>
      </div>
      <div class="row row-cols-1 row-cols-md-2 mt-5 text-brown">
        <div data-aos="fade-down" data-aos-delay="200" class="col p-3 d-flex">
          <div class="me-2">
            <i class="bi bi-1-square-fill fs-3"></i>
          </div>
          <div class="d-flex flex-column">
            <h3 class="mt-1 fw-bold">傳統的工藝</h3>
            <p>我們的和菓子採用古老的製作方法，尊重傳統工藝的精髓，每一個和菓子都是匠人們用心製作的藝術品，讓您品味到真正的日本味道。</p>
          </div>
        </div>
        <div data-aos="fade-down" data-aos-delay="300" class="col p-3 d-flex">
          <div class="d-flex me-2">
            <i class="bi bi-2-square-fill fs-3"></i>
          </div>
          <div class="d-flex flex-column">
            <h3 class="mt-1 fw-bold">天然的材料</h3>
            <p>我們只使用最優質的天然材料，如糯米粉、豆蓉和紅豆，確保您享受到健康、純淨的口感，我們也注重食材的選擇和品質，為您提供最佳的味覺體驗。</p>
          </div>
        </div>
        <div data-aos="fade-down" data-aos-delay="400" class="col p-3 d-flex">
          <div class="d-flex me-2">
            <i class="bi bi-3-square-fill fs-3"></i>
          </div>
          <div class="d-flex flex-column">
            <h3 class="mt-1 fw-bold">堅持的品質</h3>
            <p>我們的堅持不僅僅體現在選材上，更體現在製作過程的精細與嚴謹，我們只選用最優質的食材，追求天然、純正的味道，不使用人工添加劑、防腐劑或色素，以確保每一位顧客吃得安心。</p>
          </div>
        </div>
        <div data-aos="fade-down" data-aos-delay="500" class="col p-3 d-flex">
          <div class="d-flex me-2">
            <i class="bi bi-4-square-fill fs-3"></i>
          </div>
          <div class="d-flex flex-column">
            <h3 class="mt-1 fw-bold">完美的禮物</h3>
            <p>和菓子是一份獨特而優雅的禮物，適合任何場合，無論是節慶或活動送禮，我們的和菓子都能為您帶來難忘的滋味和祝福。</p>
          </div>
        </div>
        <div data-aos="fade-down" data-aos-delay="600" class="col p-3 d-flex">
          <div class="d-flex me-2">
            <i class="bi bi-5-square-fill fs-3"></i>
          </div>
          <div class="d-flex flex-column">
            <h3 class="mt-1 fw-bold">網上的訂購</h3>
            <p>輕鬆瀏覽我們的網站，從舒適的家中為自己選購您喜愛的和菓子。我們提供方便的線上訂購和運送服務服務，確保您快速收到新鮮美味的和菓子。</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="bg-coupon-code bg-fixed d-flex justify-content-center align-items-center">
    <div class="container">
      <div class="bg-dark-gradient-600 py-5">
        <div class="row row-cols-1 justify-content-center">
          <div class="col text-center text-white">
            <h2 class="fs-1">歡慶開店</h2>
            <p class="fs-5">現在輸入歡慶折扣碼即可享受8折優惠喔！</p>
          </div>
          <div class="col-10 col-md-6">
            <div class="input-group">
              <input ref="couponCode" type="text" class="form-control text-brown fw-bold" value="VIP888" disabled aria-describedby="button-addon2">
              <button class="btn btn-brown" type="button" @click="copyCouponCode"><i class="bi bi-files me-1"></i>複製</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- 本月精選 -->
  <section class="py-5">
    <div class="container">
      <div class="row">
        <div class="col-12 d-flex justify-content-between">
          <h2 class="p-2 text-brown fw-bold bg-beige border-start border-5 border-brown mb-0">精選商品</h2>
          <div>
            <router-link to="/productList" class="btn btn-outline-brown">查看更多</router-link>
          </div>
        </div>
        <div class="col mt-3">
          <Swiper
            :slidesPerView="1"
            :spaceBetween="10"
            :freeMode="false"
            :loop="true"
            :autoplay="{
              delay: 3000,
              disableOnInteraction: false
            }"
            :breakpoints="{
              '576': {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              '768': {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              '992': {
                slidesPerView: 4,
                spaceBetween: 10,
              },
            }"
            :modules="modules" class="swiper-product">
            <Swiper-slide v-for="item in randomDate" :key="item.id" class="swiper-slide-product p-1">
              <router-link :to="`/productList/${item.id}`" class="text-decoration-none">
                <div class="card border-0 shadow-sm product-card">
                  <div class="overflow-hidden effect">
                    <img :src="item.imageUrl" class="w-100" :alt="item.title">
                    <p class="fs-6 text-white">View more</p>
                  </div>
                  <div class="card-body text-brown">
                    <h2 class="card-title fs-5 fw-bold">{{ item.title }}</h2>
                    <div class="row">
                      <div class="col-12">
                        <span class="badge rounded-pill bg-beige text-brown px-3">{{ item.category }}</span>
                      </div>
                      <div class="col d-flex flex-column align-items-end mt-3">
                        <p v-if="item.origin_price !== item.price"
                          class="card-text fs-6 mt-2 mb-0 text-decoration-line-through">NT$ {{ item.origin_price }}</p>
                        <p v-else class="fs-6 mt-2 mb-0 invisible">hidden</p>
                        <p class="card-text fs-5 mb-0">NT$ {{ item.price }}</p>
                        <span class="border border-3 border-red text-red bg-white px-2 position-absolute top-3 end-3"
                        v-if="item.origin_price !== item.price">SALE</span>
                      </div>
                    </div>
                  </div>
                </div>
              </router-link>
            </Swiper-slide>
          </Swiper>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import Swiper core and required modules
import { Navigation, Autoplay, Pagination, FreeMode } from 'swiper'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

export default {
  data () {
    return {
      products: [],
      randomDate: {},
      randomNum: 0,
      modules: [Autoplay, Pagination, FreeMode, Navigation]
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  methods: {
    getProduct () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.axios.get(api)
        .then((res) => {
          if (res.data.success) {
            this.products = res.data.products
            this.randomNum = res.data.products.length
            this.randomProduct()
          }
        })
        .catch((error) => {
          this.emitter.emit('push-message', {
            style: 'danger',
            title: error.response.data.message
          })
        })
    },
    randomProduct () {
      this.randomDate = this.products.sort(() => Math.random() - 0.5)
      this.randomDate.splice(0, parseInt(this.randomNum) - 8)
    },
    copyCouponCode () {
      const copyCode = this.$refs.couponCode
      navigator.clipboard.writeText(copyCode.value)
        .then(() => Swal.fire({
          icon: 'success',
          title: '優惠碼複製成功！'
        }))
    }
  },
  created () {
    this.getProduct()
  }
}
</script>
