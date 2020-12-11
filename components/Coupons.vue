<template>
  <div>
    <button
      type="button"
      class="fixed bottom-0 right-0 flex items-center justify-center w-12 h-12 p-4 mb-4 mr-4 text-white bg-pink-600 border rounded-full shadow-lg hover:shadow-xl hover:bg-pink-500 focus:outline-none"
      @click="coupon = {}"
    >
      <PlusCircleIcon />
    </button>
    <div class="flex flex-wrap">
      <table class="table-auto">
        <thead>
          <tr>
            <th class="px-4 py-2"></th>
            <th class="px-4 py-2">ID</th>
            <th class="px-4 py-2">Code</th>
            <th class="px-4 py-2">Value</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="c in coupons && coupons.data" :key="c.id">
            <td class="px-4 py-2 border">
              <!-- <button class="material-button" @click="deleteCoupon(c.id)">
                <TrashIcon />
              </button> -->
              <button class="material-button" @click="getCoupon(c.id)">
                <EditIcon />
              </button>
            </td>
            <td class="px-4 py-2 border">{{ c.id }}</td>
            <td class="px-4 py-2 border">{{ c.code }}</td>
            <td class="px-4 py-2 border">{{ c.value }}</td>
          </tr>
        </tbody>
      </table>
      <div v-if="coupon" class="p-8 mt-20 bg-yellow-200">
        <div>{{ coupon.id }}</div>
        <div>
          <label class="material-textbox-outlined">
            <input
              type="text"
              class="material-textbox-outlined"
              v-model="coupon.code"
            />
            <span>Code</span>
          </label>
        </div>
        <div>
          <label class="material-textbox-outlined">
            <input
              type="text"
              class="material-textbox-outlined"
              v-model.number="coupon.value"
            />
            <span>Value</span>
          </label>
        </div>
        <div>
          <button class="material-button" @click="saveCoupon(coupon)">
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import COUPONS from '~/shared/gql/coupon/coupons.gql'
import COUPON from '~/shared/gql/coupon/coupon.gql'
import SAVE_COUPON from '~/shared/gql/coupon/saveCoupon.gql'
// import DELETE_COUPON from '~/shared/gql/coupon/deleteCoupon.gql'
import { EditIcon, TrashIcon, PlusCircleIcon } from 'vue-feather-icons'
export default {
  components: { EditIcon, TrashIcon, PlusCircleIcon },
  data() {
    return {
      coupon: null,
      coupons: null,
    }
  },
  created() {
    this.getCoupons()
  },
  methods: {
    async getCoupon(id) {
      try {
        this.coupon = (
          await this.$apollo.query({
            query: COUPON,
            variables: { id },
            fetchPolicy: 'no-cache',
          })
        ).data.coupon
      } catch (e) {
      } finally {
      }
    },
    async getCoupons() {
      try {
        this.coupons = (
          await this.$apollo.query({
            query: COUPONS,
            fetchPolicy: 'no-cache',
          })
        ).data.coupons
      } catch (e) {
      } finally {
      }
    },
    async saveCoupon(c) {
      if (!c.id) c.id = 'new'
      try {
        await this.$apollo.mutate({
          mutation: SAVE_COUPON,
          variables: c,
        })
        await this.getCoupons()
      } catch (e) {
      } finally {
      }
    },
    // async deleteCoupon(id) {
    //   try {
    //     await this.$apollo.mutate({
    //       mutation: DELETE_COUPON,
    //       variables: { id },
    //     })
    //     await this.getCoupons()
    //   } catch (e) {
    //   } finally {
    //   }
    // },
  },
}
</script>

<style></style>
