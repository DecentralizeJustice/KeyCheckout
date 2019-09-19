<template>
  <v-card-text>
    <v-alert type="info">
      {{advancedWarning}}
    </v-alert>
    <p class="mb-3 title">
      How Many Devices Will Be Required for a Transaction?
    </p>
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
  props: ['hardwareOptions', 'disabled', 'minNumberNeededDevices'],
  data: () => ({
    neededDevices: null,
    advancedWarning: 'You are using Advanced Settings. Make Informed Decisions.'
  }),
  computed: {
    neededDevicessDropDown () {
      const options = []
      for (let i = this.minNumberNeededDevices; i <
        this.hardwareOptions.hardwareWallets + 1; i++) {
        options.push(i)
      }
      return options
    }
  },
  methods: {
    rehydrate (hardwareOptions) {
      this.neededDevices = hardwareOptions.neededDevices
    }
  },
  watch: {
    neededDevices (newValue) {
      this.$emit('updateNeededDevices', newValue)
    },
    hardwareOptions (newval, oldval) {
      this.rehydrate(newval)
    }
  },
  created: function () {
    this.rehydrate(this.hardwareOptions)
  }
}
</script>
