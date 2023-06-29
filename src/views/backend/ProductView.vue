<template>
  <LoadingView :active="isLoading"></LoadingView>
  <div class="d-flex justify-content-end">
    <button class="btn btn-brown" type="button"
    @click="openModal(true)">新增產品項目</button>
  </div>
  <div class="table-responsive">
    <table class="table mt-4">
      <thead class="table-beige text-brown">
        <tr class="text-nowrap">
          <th width="100">分類</th>
          <th width="120">產品名稱</th>
          <th width = "120">產品圖片</th>
          <th>產品敘述</th>
          <th width ="120">原價</th>
          <th width ="120">售價</th>
          <th width ="100">是否啟用</th>
          <th width="200">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td class="text-nowrap">{{ item.category }}</td>
          <td class="text-nowrap">{{ item.title }}</td>
          <td>
            <img :src="item.imageUrl" :alt="item.title" style="width: 160px; height: 110px;">
          </td>
          <td width = "300">{{ item.description }}</td>
          <td class="text-right">
            {{ $filters.currency(item.origin_price)  }}
          </td>
          <td class="text-right">
            {{ $filters.currency(item.price) }}
          </td>
          <td>
            <span class="text-success" v-if="item.is_enabled">啟用</span>
            <span class="text-muted" v-else>未啟用</span>
          </td>
          <td class="text-nowrap">
            <div class="btn-group">
              <button type="button" class="btn btn-outline-primary btn-sm"
              @click="openModal(false, item)">編輯</button>
              <button type="button" class="btn btn-outline-danger btn-sm"
              @click="deleteModal(item)">刪除</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <Pagination :pages="pagination"
  @emit-page="getProducts"></Pagination>
  <ProductModal ref="productModal"
  :product="tempProduct"
  @update-product="updateProduct"></ProductModal>
  <DeleteModal ref="deleteModal"
  :item="tempProduct"
  @delete-product="deleteProduct"></DeleteModal>
</template>

<script>
import ProductModal from '@/components/ProductModal.vue'
import DeleteModal from '@/components/DeleteModal.vue'
import Pagination from '@/components/PaginationView.vue'

export default {
  data () {
    return {
      products: [],
      pagination: {},
      tempProduct: {},
      isNew: false,
      isLoading: false
    }
  },
  components: {
    ProductModal,
    DeleteModal,
    Pagination
  },
  inject: {
    emitter: ['emitter']
  },
  methods: {
    getProducts (page = 1) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`
      this.axios.get(api)
        .then((res) => {
          this.isLoading = false
          if (res.data.success) {
            this.products = res.data.products
            this.pagination = res.data.pagination
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
    openModal (isNew, item) {
      if (isNew) {
        this.tempProduct = {}
      } else {
        this.tempProduct = { ...item }
      }
      this.isNew = isNew
      const productComponet = this.$refs.productModal
      productComponet.showModal()
    },
    deleteModal (item) {
      this.tempProduct = { ...item }
      const deleteCompomet = this.$refs.deleteModal
      deleteCompomet.showModal()
    },
    updateProduct (item) {
      this.isLoading = true
      this.tempProduct = item
      // add
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`
      let httpMethod = 'post'

      // update
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`
        httpMethod = 'put'
      }
      const productComponet = this.$refs.productModal
      this.axios[httpMethod](api, { data: this.tempProduct })
        .then((res) => {
          this.getProducts()
          this.isLoading = false
          productComponet.hideModal()
          this.$httpMessageStatus(res, '更新產品')
        })
        .catch((error) => {
          this.isLoading = false
          this.emitter.emit('push-message', {
            style: 'danger',
            title: error.response.data.message
          })
        })
    },
    deleteProduct () {
      this.isLoading = true
      const apiDelete = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`
      const deleteCompomet = this.$refs.deleteModal
      this.axios.delete(apiDelete, { data: this.tempProduct })
        .then((res) => {
          this.isLoading = false
          deleteCompomet.hideModal()
          this.getProducts()
        })
        .catch((error) => {
          this.isLoading = false
          this.emitter.emit('push-message', {
            style: 'danger',
            title: error.response.data.message
          })
        })
    }
  },
  created () {
    this.getProducts()
  }
}
</script>
