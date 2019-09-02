<template>

      <v-flex xs10 offset-xs1>
        <v-card-text>

          <p class="mb-5 display-1">Plan Overview</p>
          <p class="mb-5 title">Hardware Wallets</p>
          <p class="mb-5 title">Phone Wallets</p>

        </v-card-text>
        </v-flex>

</template>

<script>
export default {
  data: () => ({

  }),
  computed: {
  },
  watch: {
    localneededSigs (newValue) {
      this.$emit('updateneededDevices', newValue)
    }
  },
  created () {
  },
  props: ['neededSigs', 'hardwareOptions']
}
</script>
