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
          ></v-select>

          <v-select
          class="my-2"
          :items="hardwareWalletSupportingDropdown"
          label="Hardware Wallet Desktops"
          v-model="hardwareWalletSupportingDesktop"
          v-bind:disabled="desktopHardwareWalletDisabled"
          ></v-select>

          <v-select
          class="my-2"
          :items="desktopDropdown"
          label="Desktops"
          v-bind:disabled="desktopDisabled"
          v-model="desktopKeys"
          ></v-select>

          <v-select
          class="my-2"
          :items="phoneAndTabletDropdown"
          label="Phones and Tablets"
          v-bind:disabled="phoneAndTabletDisabled"
          v-model="phonesOrTabletKeys"
          ></v-select>

        </v-card-text>
        </v-flex>
</template>

<script>
export default {
  props: ['hardwareOptions'],
  data: () => ({
    totalkeysAllowed: 8,
    minKeyDevices: 3,
    minDevicesWarning: 'You Must Use Atleast 3 Devices',
    hardwareWallets: null,
    hardwareWalletSupportingDesktop: null,
    desktopKeys: null,
    phonesOrTabletKeys: null
  }),
  created () {
    if (Object.keys(this.hardwareOptions).length !== 0) {
      this.hardwareWallets = this.hardwareOptions.hardwareWallets
      this.desktopKeys = this.hardwareOptions.desktopKeys
      this.phonesOrTabletKeys = this.hardwareOptions.phonesOrTabletKeys
      this.hardwareWalletSupportingDesktop = this.hardwareOptions.hardwareWalletSupportingDesktop
    }
  },
  methods: {
  },
  computed: {
    availableSoftwareKeys: function () {
      let availKeys = this.hardwareWallets -
      this.desktopKeys - this.phonesOrTabletKeys - 1
      return availKeys
    },
    hardwareWalletdropdown: function () {
      let options = []
      for (let i = 2; i < this.totalkeysAllowed + this.hardwareWallets + 1; i++) {
        options.push(i)
      }
      return options
    },
    hardwareWalletSupportingDropdown: function () {
      let options = []
      for (let i = 1; i < this.hardwareWallets + 1; i++) {
        options.push(i)
      }
      return options
    },
    desktopDropdown: function () {
      let options = []
      for (let i = 0; i < this.availableSoftwareKeys + this.desktopKeys + 1; i++) {
        options.push(i)
      }
      return options
    },
    phoneAndTabletDropdown: function () {
      let options = []
      for (let i = 0; i < this.availableSoftwareKeys + this.phonesOrTabletKeys + 1; i++) {
        options.push(i)
      }
      return options
    },
    desktopHardwareWalletDisabled: function () {
      if (this.hardwareWallets !== null) {
        return false
      }
      return true
    },
    desktopDisabled: function () {
      if (this.hardwareWalletSupportingDesktop !== null) {
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
    allChosen: function () {
      if (this.hardwareWallets !== null &&
        this.hardwareWalletSupportingDesktop !== null &&
        this.desktopKeys !== null &&
        this.phonesOrTabletKeys !== null
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
    validPlan: function () {
      if (this.allChosen && this.minDevicesAchieved) {
        let hardwareOptionsValid = {
          hardwareWallets: this.hardwareWallets,
          desktopKeys: this.desktopKeys,
          phonesOrTabletKeys: this.phonesOrTabletKeys,
          hardwareWalletSupportingDesktop: this.hardwareWalletSupportingDesktop
        }
        return hardwareOptionsValid
      }
      return {}
    }
  },
  watch: {
    validPlan (newOptions) {
      if (JSON.stringify(newOptions) !== JSON.stringify(this.hardwareOptions)) {
        this.$emit('updatePlanOptions', newOptions)
      }
    }
  }
}
</script>
