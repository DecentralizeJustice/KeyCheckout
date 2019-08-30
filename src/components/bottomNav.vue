<template>

        <v-card-actions>
          <v-btn
            color="orange"
            text
          >
            <v-icon>mdi-help</v-icon>
          </v-btn>
          <v-btn
            text
            color="red"
            v-on:click="goBack"
            v-bind:disabled="backDisabled"
          >
            Back
          </v-btn>
          <v-btn
            text
            color="blue"
            v-on:click="continueForward"
            v-bind:disabled="continueDisabled"
          >
            Continue
          </v-btn>

        </v-card-actions>
</template>

<script>
export default {
  props: ['currentSection', 'continueDisabled'],
  data: () => ({

  }),
  methods: {
    continueForward () {
      this.$emit('change', 'continue')
    },
    goBack () {
      this.$emit('change', 'back')
    }
  },
  computed: {
    backDisabled () {
      if (this.currentSection === 0) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>
