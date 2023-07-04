"use strict";(self["webpackChunkproject_vue3_finally"]=self["webpackChunkproject_vue3_finally"]||[]).push([[544],{3544:function(e,t,o){o.r(t),o.d(t,{default:function(){return O}});var a=o(3396),n=o(7139);const s={class:"table-responsive"},i={class:"text-end mt-4"},l={class:"table mt-4"},d=(0,a._)("thead",{class:"table-beige text-brown"},[(0,a._)("tr",{class:"text-nowrap"},[(0,a._)("th",null,"名稱"),(0,a._)("th",null,"折扣百分比"),(0,a._)("th",null,"到期日"),(0,a._)("th",null,"是否啟用"),(0,a._)("th",null,"編輯")])],-1),p={key:0,class:"text-success"},u={key:1,class:"text-muted"},c={class:"btn-group"},r=["onClick"],m=["onClick"];function h(e,t,o,h,_,b){const g=(0,a.up)("LoadingView"),C=(0,a.up)("CouponModal"),f=(0,a.up)("DeleteModal"),y=(0,a.up)("Pagination");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(g,{active:_.isLoading},null,8,["active"]),(0,a._)("div",s,[(0,a._)("div",i,[(0,a._)("button",{type:"button",class:"btn btn-brown",onClick:t[0]||(t[0]=e=>b.openCouponModal(!0))}," 建立新的優惠券 ")]),(0,a._)("table",l,[d,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(_.coupons,((t,o)=>((0,a.wg)(),(0,a.iD)("tr",{key:o,class:"text-nowrap"},[(0,a._)("td",null,(0,n.zw)(t.title),1),(0,a._)("td",null,(0,n.zw)(t.percent)+"%",1),(0,a._)("td",null,(0,n.zw)(e.$filters.date(t.due_date)),1),(0,a._)("td",null,[1===t.is_enabled?((0,a.wg)(),(0,a.iD)("span",p,"啟用")):((0,a.wg)(),(0,a.iD)("span",u,"未起用"))]),(0,a._)("td",null,[(0,a._)("div",c,[(0,a._)("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:e=>b.openCouponModal(!1,t)},"編輯",8,r),(0,a._)("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:e=>b.openDeleteModal(t)},"刪除",8,m)])])])))),128))])]),(0,a.Wm)(C,{coupon:_.tempCoupon,ref:"couponModal",onUpdateCoupon:b.updateCoupon},null,8,["coupon","onUpdateCoupon"]),(0,a.Wm)(f,{item:_.tempCoupon,ref:"deleteModal",onDeleteProduct:b.delCoupon},null,8,["item","onDeleteProduct"]),(0,a.Wm)(y,{pages:_.pagination,onEmitPage:b.getCoupons},null,8,["pages","onEmitPage"])])],64)}var _=o(9242);const b={class:"modal fade",id:"couponModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},g={class:"modal-dialog",role:"document"},C={class:"modal-content"},f=(0,a._)("div",{class:"modal-header"},[(0,a._)("h5",{class:"modal-title",id:"exampleModalLabel"},"優惠卷"),(0,a._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),y={class:"modal-body"},v={class:"mb-3"},w=(0,a._)("label",{for:"title"},"標題",-1),M={class:"mb-3"},x=(0,a._)("label",{for:"coupon_code"},"優惠碼",-1),k={class:"mb-3"},D=(0,a._)("label",{for:"due_date"},"到期日",-1),L={class:"mb-3"},$=(0,a._)("label",{for:"price"},"折扣百分比",-1),U={class:"mb-3"},V={class:"form-check"},P=(0,a._)("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),W={class:"modal-footer"},Z=(0,a._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"關閉",-1);function N(e,t,o,n,s,i){const l=(0,a.up)("LoadingView");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(l,{active:e.isLoading},null,8,["active"]),(0,a._)("div",b,[(0,a._)("div",g,[(0,a._)("div",C,[f,(0,a._)("div",y,[(0,a._)("div",v,[w,(0,a.wy)((0,a._)("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":t[0]||(t[0]=e=>s.tempCoupon.title=e),placeholder:"請輸入標題"},null,512),[[_.nr,s.tempCoupon.title]])]),(0,a._)("div",M,[x,(0,a.wy)((0,a._)("input",{type:"text",class:"form-control",id:"coupon_code","onUpdate:modelValue":t[1]||(t[1]=e=>s.tempCoupon.code=e),placeholder:"請輸入優惠碼"},null,512),[[_.nr,s.tempCoupon.code]])]),(0,a._)("div",k,[D,(0,a.wy)((0,a._)("input",{type:"date",class:"form-control",id:"due_date","onUpdate:modelValue":t[2]||(t[2]=e=>s.due_date=e)},null,512),[[_.nr,s.due_date]])]),(0,a._)("div",L,[$,(0,a.wy)((0,a._)("input",{type:"number",class:"form-control",id:"price","onUpdate:modelValue":t[3]||(t[3]=e=>s.tempCoupon.percent=e),placeholder:"請輸入折扣百分比"},null,512),[[_.nr,s.tempCoupon.percent,void 0,{number:!0}]])]),(0,a._)("div",U,[(0,a._)("div",V,[(0,a.wy)((0,a._)("input",{class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":t[4]||(t[4]=e=>s.tempCoupon.is_enabled=e),id:"is_enabled"},null,512),[[_.e8,s.tempCoupon.is_enabled]]),P])])]),(0,a._)("div",W,[Z,(0,a._)("button",{type:"button",class:"btn btn-primary",onClick:t[5]||(t[5]=t=>e.$emit("update-coupon",s.tempCoupon))},"確認 ")])])])],512)],64)}var S=o(1339),j={name:"couponModal",props:{coupon:{}},data(){return{tempCoupon:{},due_date:""}},emits:["update-coupon"],watch:{coupon(){this.tempCoupon=this.coupon;const e=new Date(1e3*this.tempCoupon.due_date).toISOString().split("T");[this.due_date]=e},due_date(){this.tempCoupon.due_date=Math.floor(new Date(this.due_date)/1e3)}},mixins:[S.Z]},z=o(89);const H=(0,z.Z)(j,[["render",N]]);var Y=H,E=o(1016),T=o(4286),I={data(){return{coupons:{},pagination:{},tempCoupon:{title:"",is_enabled:0,percent:100,code:""},isLoading:!1,isNew:!1}},components:{CouponModal:Y,DeleteModal:E.Z,Pagination:T.Z},inject:{emitter:["emitter"]},methods:{getCoupons(e=1){this.isLoading=!0;const t=`https://vue3-course-api.hexschool.io/api/gary123-api/admin/coupons?page=${e}`;this.axios.get(t).then((e=>{e.data.success&&(this.coupons=e.data.coupons,this.pagination=e.data.pagination,this.isLoading=!1)})).catch((e=>{this.isLoading=!1,this.emitter.emit("push-message",{style:"danger",title:e.response.data.message})}))},updateCoupon(e){if(this.isNew){const t="https://vue3-course-api.hexschool.io/api/gary123-api/admin/coupon";this.axios.post(t,{data:e}).then((e=>{this.$httpMessageStatus(e,"新增優惠券"),this.getCoupons(),this.$refs.couponModal.hideModal()})).catch((e=>{this.isLoading=!1,this.emitter.emit("push-message",{style:"danger",title:e.response.data.message})}))}else{const e=`https://vue3-course-api.hexschool.io/api/gary123-api/admin/coupon/${this.tempCoupon.id}`;this.axios.put(e,{data:this.tempCoupon}).then((e=>{this.$httpMessageStatus(e,"修改優惠券"),this.getCoupons(),this.$refs.couponModal.hideModal()})).catch((e=>{this.isLoading=!1,this.emitter.emit("push-message",{style:"danger",title:e.response.data.message})}))}},delCoupon(){this.isLoading=!0;const e=`https://vue3-course-api.hexschool.io/api/gary123-api/admin/coupon/${this.tempCoupon.id}`;this.axios.delete(e,{data:this.tempCoupon}).then((e=>{this.isLoading=!1,this.$refs.deleteModal.hideModal(),this.getCoupons()})).catch((e=>{this.isLoading=!1,this.emitter.emit("push-message",{style:"danger",title:e.response.data.message})}))},openCouponModal(e,t){this.isNew=e,this.isNew?this.tempCoupon={due_date:(new Date).getTime()/1e3}:this.tempCoupon={...t},this.$refs.couponModal.showModal()},openDeleteModal(e){this.tempCoupon={...e},this.$refs.deleteModal.showModal()}},created(){this.getCoupons()}};const K=(0,z.Z)(I,[["render",h]]);var O=K}}]);
//# sourceMappingURL=544.96b85299.js.map