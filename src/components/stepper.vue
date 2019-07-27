<template>
  <v-stepper :value='currentStep'>
      <v-stepper-header>
        <v-stepper-step step="1" :complete='complete(1)' >Select Amount</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="2" >Pay</v-stepper-step>

      <v-divider></v-divider>
      <v-stepper-step step="3" >Setup 1st Device</v-stepper-step>

    </v-stepper-header>
    </v-stepper>
</template>

<script>
export default {
  name: 'Stepper',
  props: ['currentSection'],
  computed: {
    currentStep () {
      const currentStepString = (this.currentSection + 1).toString()
      return currentStepString
    }
  },
  methods: {
    complete (step) {
      const statement = ((step - 2) === this.currentSection)
      return statement
    }
  }
}
</script>
