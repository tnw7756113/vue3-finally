<template>
  <LoadingView :active="isLoading"></LoadingView>
  <section class="mt-6">
    <div class="banner d-flex flex-column justify-content-center align-items-center">
      <div class="text-center">
        <h1 class="banner-title mb-3">商品一覽</h1>
        <span class="banner-text">好吃的和菓子都在這裡！</span>
      </div>
    </div>
  </section>
  <section>
    <div class="container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb my-3">
          <li class="breadcrumb-item"><router-link class="breadcrumb-text" to="/">首頁</router-link></li>
          <li class="breadcrumb-item active" aria-current="page">產品列表</li>
        </ol>
      </nav>
    </div>
  </section>
  <section>
    <div class="container">
      <div class="row g-3">
        <div class="col-12 col-md-2">
          <div class="text-center d-flex flex-md-column justify-content-center">
            <button v-for="item in categoryList" :key="item.value"
            class="btn btn-outline-brown me-1 me-md-0 mb-md-1 py-md-2 text-nowrap" type="button"
            @click="filterProducts(item.value)"
            :class="{ active: item.value === this.currentCategory }">
              {{ item.value }}
            </button>
          </div>
        </div>
        <div class="col-12 col-md-10">
          <div class="row row-cols-2 row-cols-lg-3 g-2 g-md-3">
            <div class="col" v-for="item in tempProduct" :key="item.id">
              <router-link :to="`/productList/${item.id}`"  class="text-decoration-none">
                <div class="card border-0 shadow-sm product-card">
                  <div class="overflow-hidden effect">
                    <img :src="item.imageUrl" class="card-img-top" :alt="item.title">
                    <p class="fs-6 text-white w-100 text-center">View more</p>
                  </div>
                  <div class="card-body d-flex flex-column justify-content-between">
                    <div class="col-12">
                      <h2 class="card-title fs-5 fw-bold text-brown">{{ item.title }}</h2>
                      <span class="badge rounded-pill bg-beige text-brown px-3">{{ item.category }}</span>
                    </div>
                    <div class="col-12 d-flex flex-column align-items-end mt-3 text-brown">
                      <p v-if="item.origin_price !== item.price"
                      class="card-text fs-6 text-decoration-line-through mb-0">NT$ {{ item.origin_price }}</p>
                      <p v-else class="fs-6 invisible mb-0">hidden</p>
                      <p class="card-text fs-5 fw-bold mb-0">NT$ {{ item.price }}</p>
                      <span class="border border-3 border-red text-red bg-white px-2 position-absolute top-3 end-3"
                        v-if="item.origin_price !== item.price">SALE</span>
                    </div>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
          <div class="my-5">
            <Pagination :pages="pagination"
            @emit-page="(page) => filterProducts(currentCategory, page)"></Pagination>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Pagination from '@/components/PaginationView.vue'

export default {
  data () {
    return {
      products: [],
      tempProduct: {},
      currentCategory: '全部',
      pagination: {},
      isLoading: false,
      categoryList: [
        { value: '全部' },
        { value: '生菓子' },
        { value: '半生菓子' },
        { value: '乾菓子' }
      ]
    }
  },
  components: {
    Pagination
  },
  inject: ['emitter'],
  methods: {
    getProduct (page = 1) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.axios.get(api)
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false
            this.products = res.data.products
            this.tempProduct = this.products
            this.pagination = res.data.pagination
            this.setPagination(page)
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
    filterProducts (value, page = 1) {
      this.isLoading = true
      setTimeout(() => {
        this.currentCategory = value
        if (value === '全部') {
          this.tempProduct = this.products
          this.setPagination(page)
          this.isLoading = false
        } else {
          this.tempProduct = this.products.filter((item) => {
            return item.category === value
          })
          this.setPagination(page)
          this.isLoading = false
        }
      }, 1000)
    },
    getProductId (id) {
      this.$router.push(`/user/product/${id}`)
    },
    setPagination (page) {
      const pageSize = 6
      this.pagination = {
        total_pages: Math.ceil(this.tempProduct.length / pageSize),
        current_page: page,
        has_pre: false,
        has_next: false,
        category: null
      }
      this.pagination.has_pre = this.pagination.current_page > 1
      this.pagination.has_next = this.pagination.current_page < this.pagination.total_pages

      const minPage = (this.pagination.current_page * pageSize) - pageSize
      const maxPage = (this.pagination.current_page * pageSize)
      this.tempProduct = this.tempProduct.slice(minPage, maxPage)
    }
  },
  created () {
    this.getProduct()
  }
}
</script>
