<template>
  <LoadingView :active="isLoading"></LoadingView>
  <div class="table-responsive">
    <table class="table mt-4">
      <thead class="table-success">
        <tr class="text-nowrap">
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
          <tr v-if="orders.length" class="align-middle text-nowrap"
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
                        @click="openOrderModal(item)">檢視</button>
                <button class="btn btn-outline-danger btn-sm"
                        @click="openDeleteModal(item)">刪除</button>
              </div>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
  <OrderModal ref="orderModal"
  :order="tempOrder" @update-paid="updatePaid"></OrderModal>
  <DelModal :item="tempOrder" ref="deleteModal" @delete-product="delOrder"></DelModal>
  <Pagination :pages="pagination"
  @emit-page="getOrders"></Pagination>
</template>

<script>
import OrderModal from '@/components/OrderModal.vue'
import DelModal from '@/components/DeleteModal.vue'
import Pagination from '@/components/PaginationView.vue'

export default {
  data () {
    return {
      orders: [],
      pagination: {},
      tempOrder: {},
      isLoading: false
    }
  },
  components: {
    OrderModal, DelModal, Pagination
  },
  methods: {
    getOrders (page = 1) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders?page=${page}`
      this.axios.get(url)
        .then((res) => {
          if (res.data.success) {
            console.log(res)
            this.orders = res.data.orders
            this.pagination = res.data.pagination
            this.isLoading = false
          }
        })
    },
    openOrderModal (item) {
      this.tempOrder = { ...item }
      this.$refs.orderModal.showModal()
    },
    openDeleteModal (item) {
      this.tempOrder = { ...item }
      this.$refs.deleteModal.showModal()
    },
    updatePaid (item) {
      this.isLoading = true
      const paid = {
        is_paid: item.is_paid
      }
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${item.id}`
      this.axios.put(api, { data: paid }).then((res) => {
        this.isLoading = false
        console.log(res)
        this.$refs.orderModal.hideModal()
        this.$httpMessageStatus(res, '更新付款狀態')
        this.getOrders()
      })
    },
    delOrder () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${this.tempOrder.id}`
      this.isLoading = true
      this.axios.delete(url).then((res) => {
        console.log(res)
        this.isLoading = false
        this.$refs.deleteModal.hideModal()
        this.$httpMessageStatus(res, '刪除訂單')
        this.getOrders()
      })
    }
  },
  created () {
    this.getOrders()
  }
}
</script>
