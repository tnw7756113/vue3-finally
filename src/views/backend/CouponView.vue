<template>
  <LoadingView :active="isLoading"/>
  <div class="table-responsive">
    <div class="text-end mt-4">
      <button type="button" class="btn btn-brown" @click="openCouponModal(true)">
        建立新的優惠券
      </button>
    </div>
    <table class="table mt-4">
      <thead class="table-beige text-brown">
        <tr class="text-nowrap">
          <th>名稱</th>
          <th>折扣百分比</th>
          <th>到期日</th>
          <th>是否啟用</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, key) in coupons" :key="key" class="text-nowrap">
          <td>{{ item.title }}</td>
          <td>{{ item.percent }}%</td>
          <td>{{ $filters.date(item.due_date) }}</td>
          <td>
            <span v-if="item.is_enabled === 1" class="text-success">啟用</span>
            <span v-else class="text-muted">未起用</span>
          </td>
          <td>
            <div class="btn-group">
              <button type="button" class="btn btn-outline-primary btn-sm"
                      @click="openCouponModal(false, item)"
              >編輯</button>
              <button type="button" class="btn btn-outline-danger btn-sm"
                      @click="openDeleteModal(item)"
              >刪除</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <CouponModal :coupon="tempCoupon" ref="couponModal"
    @update-coupon="updateCoupon"/>
    <DeleteModal :item="tempCoupon" ref="deleteModal" @delete-product="delCoupon"/>
    <Pagination :pages="pagination"
    @emit-page="getCoupons"></Pagination>
  </div>
</template>

<script>
import CouponModal from '@/components/CouponModal.vue'
import DeleteModal from '@/components/DeleteModal.vue'
import Pagination from '@/components/PaginationView.vue'

export default {
  data () {
    return {
      coupons: {},
      pagination: {},
      tempCoupon: {
        title: '',
        is_enabled: 0,
        percent: 100,
        code: ''
      },
      isLoading: false,
      isNew: false
    }
  },
  components: {
    CouponModal,
    DeleteModal,
    Pagination
  },
  inject: {
    emitter: ['emitter']
  },
  methods: {
    getCoupons (page = 1) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupons?page=${page}`
      this.axios.get(api)
        .then((res) => {
          if (res.data.success) {
            this.coupons = res.data.coupons
            this.pagination = res.data.pagination
            this.isLoading = false
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
    updateCoupon (tempCoupon) {
      if (this.isNew) {
        const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon`
        this.axios.post(url, { data: tempCoupon })
          .then((res) => {
            this.$httpMessageStatus(res, '新增優惠券')
            this.getCoupons()
            this.$refs.couponModal.hideModal()
          })
          .catch((error) => {
            this.isLoading = false
            this.emitter.emit('push-message', {
              style: 'danger',
              title: error.response.data.message
            })
          })
      } else {
        const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`
        this.axios.put(url, { data: this.tempCoupon })
          .then((res) => {
            this.$httpMessageStatus(res, '修改優惠券')
            this.getCoupons()
            this.$refs.couponModal.hideModal()
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
    delCoupon () {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`
      this.axios.delete(api, { data: this.tempCoupon })
        .then((res) => {
          this.isLoading = false
          this.$refs.deleteModal.hideModal()
          this.getCoupons()
        })
        .catch((error) => {
          this.isLoading = false
          this.emitter.emit('push-message', {
            style: 'danger',
            title: error.response.data.message
          })
        })
    },
    openCouponModal (isNew, item) {
      this.isNew = isNew
      if (this.isNew) {
        this.tempCoupon = {
          due_date: new Date().getTime() / 1000
        }
      } else {
        this.tempCoupon = { ...item }
      }
      this.$refs.couponModal.showModal()
    },
    openDeleteModal (item) {
      this.tempCoupon = { ...item }
      this.$refs.deleteModal.showModal()
    }
  },
  created () {
    this.getCoupons()
  }
}
</script>
