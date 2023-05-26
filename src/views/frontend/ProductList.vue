<template>
  <LoadingView :active="isLoading"></LoadingView>
  <section class="mt-6">
    <div class="container d-flex justify-content-center">
    <img class="img-fluid" src="@/assets/imgs/banner03.webp" alt="banner">
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
        <div class="col-12 col-md-3">
          <div class="text-center d-flex flex-md-column justify-content-center">
            <button v-for="item in categoryList" :key="item.value"
            class="btn btn-outline-brown me-1 me-md-0 mb-md-1 py-md-2 text-nowrap" type="button"
            @click="filterProducts(item.value)"
            :class="{ active: item.value === this.currentCategory }">
              {{ item.value }}
            </button>
          </div>
        </div>
        <div class="col-12 col-md-9">
          <div class="row row-cols-2 row-cols-lg-3 g-3">
            <router-link :to="`/productList/${item.id}`" v-for="item in tempProduct" :key="item.id" class="text-decoration-none">
              <div class="col">
                <div class="card border-0">
                  <img :src="item.imageUrl" class="card-img-top" :alt="item.title">
                  <div class="card-body d-flex flex-column">
                    <h2 class="card-title fs-5">{{ item.title }}</h2>
                    <div class="row">
                      <div class="col d-flex flex-column justify-content-end">
                        <p v-if="item.origin_price !== item.price"
                        class="card-text fs-6 mb-2 text-decoration-line-through">NT$ {{ item.origin_price }}</p>
                        <p v-else class="fs-6 mb-2 invisible">hidden</p>
                        <p class="card-text fs-5 mb-2">NT$ {{ item.price }}</p>
                        <span class="border border-3 border-red text-red bg-white px-2 position-absolute top-3 end-3"
                          v-if="item.origin_price !== item.price">SALE</span>
                      </div>
                      <div class="col-3 p-0 d-flex justify-content-end align-items-end">
                        <button @click.prevent="addFave(item)"
                        :class="{ 'btn-heart-active': faveList.some((i) => {
                          return i === item.id
                        })}"
                        class="btn-heart rounded-circle p-0">
                          <i class="bi bi-suit-heart-fill"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
          <div class="mt-3">
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
import saveFave from '@/methods/saveFave'

export default {
  data () {
    return {
      faveList: saveFave.getFavorite() || [],
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
      this.axios.get(api).then((res) => {
        if (res.data.success) {
          this.isLoading = false
          console.log(res.data)
          this.products = res.data.products
          this.tempProduct = this.products
          this.pagination = res.data.pagination
          this.setPagination(page)
          console.log(this.tempProduct)
        }
      })
    },
    filterProducts (value, page = 1) {
      this.currentCategory = value
      if (value === '全部') {
        this.tempProduct = this.products
        this.setPagination(page)
      } else {
        this.tempProduct = this.products.filter((item) => {
          return item.category === value
        })
        this.setPagination(page)
      }
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
    },
    addFave (item) {
      this.isLoading = true
      if (!this.faveList.includes(item.id)) {
        this.faveList.push(item.id)
        this.$httpMessageStatus(
          {
            data: {
              success: true
            }
          }, `已將 ${item.title} 加入收藏`)
        this.isLoading = false
      } else {
        this.faveList.splice(this.faveList.indexOf(item.id), 1)
        this.$httpMessageStatus(
          {
            data: {
              success: true
            }
          }, `已將 ${item.title} 移除收藏`)
        this.isLoading = false
      }
      saveFave.saveFavorite(this.faveList)
      this.emitter.emit('update-fave', this.faveList)
      console.log(this.faveList)
    }
  },
  created () {
    this.getProduct()
  }
}
</script>
