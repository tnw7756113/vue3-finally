<template>
  <LoadingView :active="isLoading"></LoadingView>
  <div class="container">
    <div class="row">
      <div class="col-3">
        <div class="text-center d-flex flex-column align-items-start">
          <button v-for="item in categoryList" :key="item.value">
            {{ item.value }}
          </button>
        </div>
      </div>
      <div class="col-9">
        <div class="row row-cols-2 row-cols-lg-3 g-3">
          <router-link :to="`/productList/${item.id}`" v-for="item in products" :key="item.id" class="text-decoration-none">
            <div class="col">
              <div class="card shadow">
                <img :src="item.imageUrl" class="card-img-top w-100" :alt="item.title">
                <div class="card-body">
                  <h2 class="card-title fs-5">{{ item.title }}</h2>
                  <p v-bind:class="{ 'text-decoration-line-through': item.origin_price > item.price }"
                    class="card-text fs-6">NT$ {{ item.origin_price }}</p>
                  <p v-bind:class="{ 'd-none': item.origin_price === item.price }"
                    class="card-text fs-6">NT$ {{ item.price }}
                    <span class="border border-3 border-red text-red px-2">SALE</span></p>
                  <div class="d-flex justify-content-end">
                    <button class="btn btn-outline-red rounded-circle border border-3 border-red p-0"
                    style="width: 40px; height: 40px;">
                      <i class="bi bi-cart4 fs-4"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </router-link>
        </div>
        <div>
          <Pagination :pages="pagination"
          @emit-page="getProduct"></Pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Pagination from '@/components/PaginationView.vue'

export default {
  data () {
    return {
      products: [],
      tempProduct: {},
      pagination: {},
      // dataTotal: this.pagination.length,
      // pageSize: 6,
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
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          this.isLoading = false
          console.log(res.data)
          this.products = res.data.products
          this.pagination = res.data.pagination
          this.setPagination(page)
        }
      })
    },
    getProductId (id) {
      this.$router.push(`/user/product/${id}`)
    },
    setPagination (page) {
      const pageSize = 6
      this.pagination = {
        total_pages: Math.ceil(this.products.length / pageSize),
        current_page: page,
        has_pre: false,
        has_next: false,
        category: null
      }
      this.pagination.has_pre = this.pagination.current_page > 1
      this.pagination.has_next = this.pagination.current_page < this.pagination.total_pages

      const minPage = (this.pagination.current_page * pageSize) - pageSize
      const maxPage = (this.pagination.current_page * pageSize)
      this.products = this.products.slice(minPage, maxPage)
    }
  },
  created () {
    this.getProduct()
  }
}
</script>
