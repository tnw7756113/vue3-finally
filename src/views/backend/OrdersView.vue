<template>
  <LoadingView :active="isLoading"></LoadingView>
  <div class="d-flex justify-content-end">
    <button class="btn btn-primary" type="button"
    @click="openModal(true)">新增訂單項目</button>
  </div>
  <table class="table mt-4">
    <thead>
      <tr>
        <th width="120">購買時間</th>
        <th width="120">E-mail</th>
        <th width="240">購買款項</th>
        <th width="120">應付金額</th>
        <th width="100">是否付款</th>
        <th width="200">編輯</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="(item, key) in orders" :key="key">
        <tr v-if="orders.length"
            :class="{'text-secondary': !item.is_paid}">
          <td>{{ $filters.date(item.create_at) }}</td>
          <td><span v-text="item.user.email" v-if="item.user"></span></td>
          <td>
            <ul class="list-unstyled">
              <li v-for="(product, i) in item.products" :key="i">
                {{ product.product.title }} 數量：{{ product.qty }}
                {{ product.product.unit }}
              </li>
            </ul>
          </td>
          <td class="text-right">{{ item.total }}</td>
          <td>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" :id="`paidSwitch${item.id}`"
              v-model="item.is_paid"
              @change="updatePaid(item)">
              <label class="form-check-label" :for="`paidSwitch${item.id}`">
                <span v-if="item.is_paid">已付款</span>
                <span v-else>未付款</span>
              </label>
            </div>
          </td>
          <td>
            <div class="btn-group">
              <button class="btn btn-outline-primary btn-sm"
                      @click="openModal(false, item)">檢視</button>
              <button class="btn btn-outline-danger btn-sm"
                      @click="openDelOrderModal(item)"
              >刪除</button>
            </div>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
  <OrderModal ref="orderModal"
  :order="tempOrder"></OrderModal>
</template>

<script>
import OrderModal from '@/components/OrderModal.vue'

export default {
  data () {
    return {
      orders: {},
      pagination: {},
      tempOrder: {},
      isNew: false,
      isLoading: false
    }
  },
  comments: {
    OrderModal
  },
  methods: {
    getOrders (page = 1) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders?page=${page}`
      this.$http.get(api)
        .then((res) => {
          if (res.data.success) {
            console.log(res)
            this.orders = res.data.orders
            this.pagination = res.data.pagination
            this.isLoading = false
          }
        })
    },
    openModal (isNew, item) {
      this.tempOrder = { ...item }
      this.isNew = false
      this.$refs.orderModal.showModal()
    },
    updateProduct (item) {
      this.isLoading = true
      this.tempOrder = item
      // update
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${item.id}`
      const orderComponet = this.$refs.orderModal
      this.put(api, { data: this.tempProduct }).then((res) => {
        this.isLoading = false
        console.log(res)
        orderComponet.hideModal()
        this.$httpMessageStatus(res, '更新產品')
      })
    }
  },
  created () {
    this.getOrders()
  }
}
</script>
