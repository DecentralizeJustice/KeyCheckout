<template>
  <v-container grid-list-md text-center fill-height text-xs-center>
    <v-layout align-start justify-center row fill-height>
      <v-flex xs10 >
        <stepper class="mt-5" v-bind:currentSection="currentSection"/>
      </v-flex>
      <v-flex xs8>
          <v-card
            class="mx-auto"
          >

      <component v-bind:hardwareOptions="hardwareOptions" v-bind:is="currentMain"
      v-on:updatePlanOptions="updateHardware" v-on:updateneededDevices="updateneededDevices"
      v-bind:neededSigs="neededSigs">
      </component>

      <bottomNav v-on:change="updateStep" v-bind:currentSection="currentSection"
      v-bind:continueDisabled='continueDisabled'/>
    </v-card>
</v-flex>
    </v-layout>
  </v-container>

</template>

<script>
import stepper from '@/components/stepper.vue'
import bottomNav from '@/components/bottomNav.vue'
export default {
  data: () => ({
    componentList: ['hardware', 'plan', 'confirm', 'pay'],
    currentSection: 0,
    hardwareOptions: {
    },
    neededSigs: null
  }),
  components: {
    stepper,
    bottomNav
  },
  computed: {
    continueDisabled () {
      switch (this.currentSection) {
        case 0:
          if (Object.keys(this.hardwareOptions).length !== 0) {
            return false
          }
          break
        case 1:
          if (this.neededSigs !== null) {
            return false
          }
          break
        default:
          return true
      }

      return true
    },
    currentMain () {
      const componentName = this.componentList[this.currentSection]
      return () => import(`@/components/${componentName}.vue`)
    }
  },
  methods: {
    updateStep (stepUpdate) {
      if (stepUpdate === 'continue') {
        this.currentSection += 1
      }
      if (stepUpdate === 'back') {
        this.currentSection -= 1
      }
    },
    updateHardware (newHardwareOptions) {
      this.hardwareOptions = newHardwareOptions
      this.neededSigs = null
    },
    updateneededDevices (newSigNeeded) {
      this.neededSigs = newSigNeeded
    }
  }
}
</script>
