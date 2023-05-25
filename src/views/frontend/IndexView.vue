<template>
  <section class="mt-6">
    <div class="container">
    <swiper
      :modules="modules"
      :space-between="30"
      :pagination="{ clickable: true }"
      :loop="true"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false
      }"
      @swiper="onSwiper"
      @slideChange="onSlideChange">
      <swiper-slide>
        <img class="img-fluid" src="@/assets/imgs/banner06.jpg" alt="banner">
      </swiper-slide>
      <swiper-slide>
        <img class="img-fluid" src="@/assets/imgs/banner01.jpg" alt="banner">
      </swiper-slide>
      <swiper-slide>
        <img class="img-fluid" src="@/assets/imgs/banner07.jpg" alt="banner">
      </swiper-slide>
    </swiper>
  </div>
  </section>
  <section class="mt-5">
    <div class="container">
      <div class="row justify-content-center">
        <div data-aos="fade-right" data-aos-duration="1000"
        class="col-lg-6 p-5 d-flex flex-column justify-content-center align-items-center">
          <h2 class="text-center title">關於和菓子</h2>
          <p class="mt-2">和菓子最早來自西元前人們將樹木的果實加工成粉狀，去除雜質後揉成圓球食用
            （也就是後來的糰子），或是做成傳說中日本最古老的加工食品「麻糬」。</p>
          <p>隨著時代變遷，歷經和唐朝的交流、茶湯文化的興盛，以及西式點心傳入日本等影響，
            和菓子日漸進化。到了明治時代，日本與外國的交流頻繁，引進先進的烤箱等設備，
            燒菓子的種類也因此增加，各種新種類的和菓子也隨之誕生。</p>
        </div>
        <div class="col-lg-4 d-flex flex-column justify-content-center align-items-center">
          <img data-aos="zoom-in"
          class="img-fluid" src="@/assets/imgs/wagasi01.jpg" alt="wagasi">
        </div>
      </div>
    </div>
  </section>
  <!-- 本月精選 -->
  <section class="mt-5">
    <div class="container">
      <div class="row">
        <div class="col-12 d-flex justify-content-between">
          <h2 class="title">精選商品</h2>
          <div>
            <router-link to="/productList" class="btn btn-outline-green">查看更多</router-link>
          </div>
        </div>
        <div class="col mt-3">
          <swiper
            :slidesPerView="1"
            :spaceBetween="20"
            :freeMode="false"
            :loop="true"
            :autoplay="{
              delay: 3000,
              disableOnInteraction: false
            }"
            :breakpoints="{
              '576': {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              '768': {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              '992': {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }"
            :modules="modules" class="swiper-product">
            <swiper-slide v-for="item in randomDate" :key="item.id" class="swiper-slide-product">
              <router-link :to="`/productList/${item.id}`" class="text-decoration-none">
                <div class="card h-100 border-0">
                  <img :src="item.imageUrl" class="card-img-top w-100" :alt="item.title">
                  <div class="card-body">
                    <h2 class="card-title fs-5">{{ item.title }}</h2>
                    <div>
                      <p v-if="item.origin_price !== item.price"
                        class="card-text fs-6 mb-0 text-decoration-line-through">NT$ {{ item.origin_price }}</p>
                      <p v-else class="fs-6 mb-0 invisible">hidden</p>
                      <p class="card-text fs-5">NT$ {{ item.price }}</p>
                      <span class="border border-3 border-red text-red bg-white px-2 position-absolute top-3 end-3"
                      v-if="item.origin_price !== item.price">SALE</span>
                    </div>
                  </div>
                </div>
              </router-link>
            </swiper-slide>
          </swiper>
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
      this.axios.get(api).then((res) => {
        if (res.data.success) {
          console.log(res.data)
          this.products = res.data.products
          this.randomNum = res.data.products.length
          this.randomProduct()
        }
      })
    },
    randomProduct () {
      this.randomDate = this.products.sort(() => Math.random() - 0.5)
      this.randomDate.splice(0, parseInt(this.randomNum) - 8)
    }
  },
  created () {
    this.getProduct()
  }
}
</script>
