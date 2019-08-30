<template>

      <v-flex xs10 offset-xs1>
        <v-card-text>
          <v-alert type="error" v-if="!enoughDevices && allChosen">
            {{this.minAmountWarning}}
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
    keyHardwareAmount: 10,
    hardwareWallets: null,
    hardwareWalletSupportingDesktop: null,
    desktopKeys: null,
    phonesOrTabletKeys: null,
    minAmountWarning: 'You Must Use Atleast 2 Key Holding Devices'
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
    availableKeyHardware: function () {
      let availKeys = this.keyHardwareAmount - this.hardwareWallets -
      this.desktopKeys - this.phonesOrTabletKeys
      return availKeys
    },
    hardwareWalletSupportingDesktopMin: function () {
      if (this.hardwareWallets !== 0 || this.hardwareWallets === null) {
        return 1
      }
      return 0
    },
    hardwareWalletdropdown: function () {
      let options = []
      for (let i = 0; i < this.availableKeyHardware + this.hardwareWallets + 1; i++) {
        options.push(i)
      }
      return options
    },
    hardwareWalletSupportingDropdown: function () {
      let options = []
      for (let i = this.hardwareWalletSupportingDesktopMin; i < this.hardwareWallets + 1; i++) {
        options.push(i)
      }
      return options
    },
    desktopDropdown: function () {
      let options = []
      for (let i = 0; i < this.availableKeyHardware + this.desktopKeys + 1; i++) {
        options.push(i)
      }
      return options
    },
    phoneAndTabletDropdown: function () {
      let options = []
      for (let i = 0; i < this.availableKeyHardware + this.phonesOrTabletKeys + 1; i++) {
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
    enoughDevices: function () {
      if (this.hardwareWallets + this.desktopKeys + this.phonesOrTabletKeys) {
        return true
      } return false
    },
    allChosen: function () {
      if (this.hardwareWallets !== null && this.desktopKeys !== null &&
        this.phonesOrTabletKeys !== null &&
        this.hardwareWalletSupportingDesktop !== null) {
        return true
      } return false
    },
    validPlan: function () {
      if (this.enoughDevices && this.allChosen) {
        return true
      }
      return false
    }
  },
  watch: {
    validPlan (newValue) {
      if (newValue === true) {
        let hardwareOptions = {
          hardwareWallets: this.hardwareWallets,
          hardwareWalletSupportingDesktop: this.hardwareWalletSupportingDesktop,
          desktopKeys: this.desktopKeys,
          phonesOrTabletKeys: this.phonesOrTabletKeys
        }
        this.$emit('updatePlanOptions', hardwareOptions)
      }
    }
  }
}
</script>
