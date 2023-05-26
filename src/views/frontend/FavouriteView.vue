<template>
  <LoadingView :active="isLoading"></LoadingView>
  <section class="mt-6">
    <div class="container d-flex justify-content-center">
      <img class="img-fluid" src="@/assets/imgs/banner05.webp" alt="banner">
    </div>
  </section>
  <section>
    <div class="container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb my-3">
            <li class="breadcrumb-item"><router-link class="breadcrumb-text" to="/">首頁</router-link></li>
            <li class="breadcrumb-item active" aria-current="page">我的收藏</li>
          </ol>
        </nav>
      </div>
  </section>
  <section class="my-5" v-if="!faveList.length">
    <div class="container">
      <div class="border border-2 px-2 py-5 p-lg-5">
        <h2 class="text-center">收藏清單目前是空的！</h2>
        <div class="col-5 col-md-2 mx-auto mt-5">
          <router-link to="/productList" class="btn btn-outline-green btn-sm w-100">來去逛逛吧！</router-link>
        </div>
      </div>
    </div>
  </section>
  <section class="my-5" v-else>
    <div class="container">
      <div class="border border-2 px-1 py-5 p-lg-5">
        <div class="table-responsive-md">
          <table class="table text-nowrap">
            <thead class="table-dark">
              <tr>
                <th colspan="2"  style="width: 50%;">商品</th>
                <th class="text-end" style="width: 25%;">單價</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in faveProduct" :key="item.id">
                <td>
                  <img style="width: 160px; height: 107px;"
                      :src="item.imageUrl"
                      :alt="item.title"/>
                </td>
                <td class="align-middle">
                  <p class="fs-6 mb-0">{{ item.title }}</p>
                </td>
                <td class="align-middle text-end">
                  <p v-if="item.origin_price !== item.price"
                          class="fs-6 mb-0 text-decoration-line-through">NT$ {{ item.origin_price }}</p>
                  <p class="fs-5 mb-0">NT$ {{ item.price }}</p>
                </td>
                <td class="align-middle text-end">
                  <div class="p-0">
                    <button @click.prevent="addCart(item.id, 1)"
                    class="btn-cart rounded-circle p-0 me-2">
                    <i class="bi bi-cart4"></i>
                    </button>
                    <button @click.prevent="delFave(item)"
                    class="btn-trash rounded-circle p-0 me-1">
                    <i class="bi bi-trash"></i>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import saveFave from '@/methods/saveFave'

export default {
  data () {
    return {
      faveList: saveFave.getFavorite() || [],
      faveProduct: [],
      isLoading: false
    }
  },
  inject: ['emitter'],
  methods: {
    getFave () {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.axios.get(api).then((res) => {
        if (res.data.success) {
          this.isLoading = false
          this.faveProduct = res.data.products.filter((item) => this.faveList.includes(item.id))
          console.log(this.faveProduct)
        }
      })
    },
    updateFave () {
      this.faveList = saveFave.getFavorite()
    },
    delFave (item) {
      this.isLoading = true
      this.faveList.splice(this.faveList.indexOf(item.id), 1)
      this.$httpMessageStatus(
        {
          data: {
            success: true
          }
        }, `已將 ${item.title} 移除收藏清單`)
      this.isLoading = false
      saveFave.saveFavorite(this.faveList)
      this.emitter.emit('update-fave', this.faveList)
      this.getFave()
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
            this.faveList.splice(this.faveList.indexOf(id), 1)
            this.isLoading = false
            saveFave.saveFavorite(this.faveList)
            this.emitter.emit('update-fave', this.faveList)
            this.getFave()
            this.$httpMessageStatus(res, '加入購物車')
          }
        })
    }
  },
  created () {
    this.getFave()
  },
  mounted () {
    this.emitter.on('update-fave', this.updateFave)
    this.getFave()
  }
}
</script>
