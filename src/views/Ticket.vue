<template>
  <v-container grid-list-md text-center fill-height text-xs-center>
    <v-layout align-start justify-center row fill-height>
      <v-flex xs10 >
        <stepper class="mt-5" v-bind:currentSection="currentSection"/>
      </v-flex>
      <component v-bind:is="currentMain"></component>
    </v-layout>
  </v-container>

</template>

<script>
import stepper from '@/components/stepper.vue'
export default {
  data: () => ({
    componentList: ['ticketAmount'],
    currentSection: 0
  }),
  components: {
    stepper
  },
  computed: {
    currentMain () {
      const componentName = this.componentList[this.currentSection]
      return () => import(`@/components/${componentName}.vue`)
    }
  }
}
</script>
