<template>
  <v-card-text>
    <v-alert type="info">
      {{advacnedWarning}}
    </v-alert>
    <p class="mb-3 title">How Many Devices Will Be Required for a Transaction?</p>
    <v-select
    class="mb-2"
    :items="neededDevicessDropDown"
    label="Needed Devices"
    v-model="neededDevices"
    v-bind:disabled="disabled"
    ></v-select>
  </v-card-text>
</template>

<script>
export default {
  props: ['hardwareOptions', 'disabled'],
  data: () => ({
    neededDevices: null,
    hardwareKeys: null,
    advacnedWarning: 'You are using Advanced Settings. Make Informed Decisions.'
  }),
  computed: {
    neededDevicessDropDown () {
      const options = []
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
    },
    totalKeys () {
      return this.hardwareOptions.hardwareWallets +
      this.hardwareOptions.desktopKeys +
      this.hardwareOptions.phonesOrTabletKeys
    },
    softwareKeys () {
      return this.hardwareOptions.desktopKeys +
      this.hardwareOptions.phonesOrTabletKeys
    }
  },
  methods: {
    rehydrate (hardwareOptions) {
      this.neededDevices = hardwareOptions.neededDevices
      this.hardWareKeys = hardwareOptions.hardwareWallets
    }
  },
  watch: {
    neededDevices (newValue) {
      this.$emit('updateNeededDevices', newValue)
    },
    hardwareOptions (newval) {
      this.rehydrate(newval)
    }
  },
  created: function () {
    this.rehydrate(this.hardwareOptions)
  }
}
</script>
