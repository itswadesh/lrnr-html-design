<template>
  <div class="h-screen bg-white">
    <Coupons :data="transactions"/>
    <!-- <Wallet :data="transactions"/> -->
  </div>
</template>
<script>
import ALL_TRANSACTIONS from '~/shared/gql/wallet/allTransaction.gql'
export default {
  components: {
  },
  data() {
    return {
      transactions: null
    }
  },
  created() {
    this.getTransactions()
  },
  methods: {
    async getTransactions() {
      try {
        this.transactions = (
          await this.$apollo.query({
            query: ALL_TRANSACTIONS,
            fetchPolicy: 'no-cache'
          })
        ).data.transactions
      } catch (e) {
        console.log(e)
      } finally {
      }
    }
  }
}
</script>

<style></style>
