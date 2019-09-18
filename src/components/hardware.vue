<template>
<v-flex xs10 offset-xs1>
  <v-card-text>
    <v-alert type="error" v-if="!minDevicesAchieved && allChosen">
      {{minDevicesWarning}}
    </v-alert>
    <p class="mb-5 headline">What Hardware do you plan to Use?</p>

    <v-select
    class="my-2"
    :items="hardwareWalletdropdown"
    label="Hardware Wallets"
    v-model="hardwareWallets"
    />

    <v-select
    class="my-2"
    :items="desktopDropdown"
    label="Desktops"
    v-bind:disabled="desktopDisabled"
    v-model="desktopKeys"
    />

    <v-select
    class="my-2"
    :items="phoneAndTabletDropdown"
    label="Phones and Tablets"
    v-bind:disabled="phoneAndTabletDisabled"
    v-model="phonesOrTabletKeys"
    ></v-select>

  </v-card-text>
  <neededDevices v-if='hardwareAdvancedOption'
    v-bind:neededDevices="neededDevices"
    v-bind:hardwareOptions="localhardwareOptions"
    v-bind:disabled="neededDevicesDisabled"
    v-bind:hardwareWalletsChecker="hardwareWallets"
    v-on:updateNeededDevices='updateNeededDevices'
    />

</v-flex>
</template>

<script>
import neededDevices from '@/components/neededDevices.vue'
export default {
  components: {
    neededDevices
  },
  props: ['hardwareOptions', 'hardwareAdvancedOption'],
  data: () => ({
    totalkeysAllowed: 8,
    minKeyDevices: 3,
    minDevicesWarning: 'You Must Use Atleast 3 Devices',
    hardwareWallets: null,
    desktopKeys: null,
    phonesOrTabletKeys: null,
    neededDevices: null
  }),
  created () {
    if (Object.keys(this.hardwareOptions).length !== 0) {
      this.hardwareWallets = this.hardwareOptions.hardwareWallets
      this.desktopKeys = this.hardwareOptions.desktopKeys
      this.phonesOrTabletKeys = this.hardwareOptions.phonesOrTabletKeys
      this.neededDevices = this.hardwareOptions.neededDevices
    }
  },
  methods: {
    updateNeededDevices (newNeededDevices) {
      this.neededDevices = newNeededDevices
    }
  },
  computed: {
    availableSoftwareKeys: function () {
      const availKeys = this.hardwareWallets -
      this.desktopKeys - this.phonesOrTabletKeys - 1
      return availKeys
    },
    reccommendedNeededKeys: function () {
      return this.hardwareWallets
    },
    hardwareWalletdropdown: function () {
      const options = []
      for (let i = 2; i < this.totalkeysAllowed + 1;
        i++) {
        options.push(i)
      }
      return options
    },
    desktopDropdown: function () {
      const options = []
      for (let i = 0; i < this.availableSoftwareKeys +
        this.desktopKeys + 1; i++) {
        options.push(i)
      }
      return options
    },
    phoneAndTabletDropdown: function () {
      const options = []
      for (let i = 0; i < this.availableSoftwareKeys + this.phonesOrTabletKeys +
         1; i++) {
        options.push(i)
      }
      return options
    },
    desktopDisabled: function () {
      if (this.hardwareWallets !== null) {
        return false
      }
      return true
    },
    phoneAndTabletDisabled: function () {
      if (this.desktopKeys !== null) {
        return false
      }
      return true
    },
    neededDevicesDisabled: function () {
      if (this.phonesOrTabletKeys !== null) {
        return false
      }
      return true
    },
    allChosen: function () {
      if (this.hardwareWallets !== null &&
        this.desktopKeys !== null &&
        this.phonesOrTabletKeys !== null &&
        ((this.neededDevices !== null &&
          this.hardwareAdvancedOption) || !this.hardwareAdvancedOption)
      ) {
        return true
      } return false
    },
    minDevicesAchieved: function () {
      if (this.hardwareWallets + this.desktopKeys +
        this.phonesOrTabletKeys >= this.minKeyDevices) {
        return true
      } return false
    },
    localhardwareOptions: function () {
      let devicesNeeded
      if (this.hardwareAdvancedOption) {
        devicesNeeded = this.neededDevices
      } else {
        devicesNeeded = this.reccommendedNeededKeys
      }
      return {
        hardwareWallets: this.hardwareWallets,
        desktopKeys: this.desktopKeys,
        phonesOrTabletKeys: this.phonesOrTabletKeys,
        hardwareAdvancedOption: this.hardwareAdvancedOption,
        neededDevices: devicesNeeded
      }
    },
    validPlan: function () {
      if (this.allChosen && this.minDevicesAchieved) {
        return this.localhardwareOptions
      }
      return {}
    }
  },
  watch: {
    validPlan (newOptions) {
      this.$emit('updatePlanOptions', newOptions)
    },
    hardwareWallets (newOptions, oldOptions) {
      if (newOptions < oldOptions &&
        (this.desktopKeys + this.phonesOrTabletKeys > newOptions) &&
          (this.desktopKeys !== null && this.phonesOrTabletKeys !== null)) {
        this.desktopKeys = 0
        this.phonesOrTabletKeys = 1
      }
    }
  }
}
</script>
