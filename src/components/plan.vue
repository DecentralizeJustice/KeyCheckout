<template>

      <v-flex xs8 offset-xs2>
        <v-card-text>

          <p class="mb-5 headline">How Many Devices Will You Require to Send Money?</p>

          <v-select
          class="my-2"
          :items="neededSigsDropDown"
          label="Needed Devices"
          v-model="localneededSigs"
          ></v-select>
        </v-card-text>
        </v-flex>

</template>

<script>
export default {
  data: () => ({
    totalKeys: null,
    localneededSigs: null

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
