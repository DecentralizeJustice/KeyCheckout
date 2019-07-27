<template>
  <v-stepper value="2">
      <v-stepper-header>
        <v-stepper-step step="1" >Select Amount</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="2" complete>Pay</v-stepper-step>

      <v-divider></v-divider>
      <v-stepper-step step="3" complete>Setup 1st Device</v-stepper-step>

    </v-stepper-header>
    </v-stepper>
</template>

<script>
export default {
  data: () => ({
    e6: 0
  }),
  name: 'Stepper'
}
</script>
