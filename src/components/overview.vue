<template>

      <v-flex xs10 offset-xs1>
        <v-card-text>

          <p class="mb-5 title">Given your current hardware selections you are
            50% dependent on hardware wallets and 30% dependent on software wallets.</p>

              <v-icon large>mdi-calculator</v-icon>
          <p class="mb-5 title">Given your current hardware selections you are
            50% dependent on hardware wallets and 30% dependent software wallets.</p>

          <!-- <v-select
          class="my-2"
          :items="neededSigsDropDown"
          label="Needed Devices"
          v-model="localneededSigs"
          ></v-select> -->
        </v-card-text>
        </v-flex>

</template>

<script>
export default {
  data: () => ({
    totalKeys: null,
    localneededSigs: null,
    softwareKeys: null,
    hardwareKeys: null

  }),
  computed: {
    neededSigsDropDown () {
      let options = []
      for (let i = 1; i < this.totalKeys + 1; i++) {
        options.push(i)
      }
      return options
    }
  },
  watch: {
    localneededSigs (newValue) {
      this.$emit('updateneededDevices', newValue)
    }
  },
  created () {
    this.totalKeys = this.hardwareOptions.hardwareWallets +
    this.hardwareOptions.desktopKeys +
    this.hardwareOptions.phonesOrTabletKeys
  },
  props: ['neededSigs', 'hardwareOptions']
}
</script>
