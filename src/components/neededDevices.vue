<template>

      <v-flex xs10 offset-xs1>
        <v-card-text>

          <p class="mb-5 title">How Many Devices Will Be Required for a Transaction?</p>

          <v-select
          class="my-2"
          :items="neededDevicessDropDown"
          label="Needed Devices"
          v-model="localneededDevices"
          ></v-select>
        </v-card-text>
        </v-flex>

</template>

<script>
export default {
  data: () => ({
    totalKeys: null,
    localneededDevices: null,
    softwareKeys: null,
    hardwareKeys: null

  }),
  computed: {
    neededDevicessDropDown () {
      let options = []
      for (let i = this.minNumberNeededDevices; i < this.hardWareKeys + 1; i++) {
        options.push(i)
      }
      return options
    },
    minNumberNeededDevices () {
      if (this.hardWareKeys === this.totalKeys) {
        return 2
      }
      return this.softwareKeys + 1
    }
  },
  watch: {
    localneededDevices (newValue) {
      this.$emit('updateneededDevices', newValue)
    }
  },
  created () {
    this.localneededDevices = this.neededDevices

    this.totalKeys = this.hardwareOptions.hardwareWallets +
    this.hardwareOptions.desktopKeys +
    this.hardwareOptions.phonesOrTabletKeys

    this.hardWareKeys = this.hardwareOptions.hardwareWallets

    this.softwareKeys = this.hardwareOptions.desktopKeys +
    this.hardwareOptions.phonesOrTabletKeys
  },
  props: ['neededDevices', 'hardwareOptions']
}
</script>
