<template>

      <v-flex xs8 offset-xs2>
        <v-card-text>
          <p class="mb-5 headline">What Computers Will You Use?</p>
          <p class="mb-5 title">Desktops</p>
          <v-overflow-btn
          class="my-2"
          :items="deskDropdown"
          label="Desktops"
        ></v-overflow-btn>
        <p class="mb-5 title">Phones and Tablets</p>
        <v-overflow-btn
        class="my-2"
        :items="phoneAndTabletDropdown"
        label="Phones and Tablets"
      ></v-overflow-btn>
        </v-card-text>
        </v-flex>

</template>

<script>
export default {
  data: () => ({
    deskDropdown: [],
    phoneAndTabletDropdown: [],
    totalPossibleKeyComputers: null
  }),
  created () {
    this.totalPossibleKeyDevices = this.planOptions.hardwareAmount - 1
    for (let i = 1; i < this.totalPossibleKeyDevices + 1; i++) {
      this.deskDropdown.push(i)
    }
    for (let i = 2; i < this.totalPossibleKeyDevices; i++) {
      this.phoneAndTabletDropdown.push(i)
    }
  },
  props: ['planOptions']
}
</script>
