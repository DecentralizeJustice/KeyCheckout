<template>
  <v-container grid-list-md text-center fill-height text-xs-center>
    <v-layout align-start justify-center row fill-height>
      <v-flex xs10 >
        <stepper class="mt-5"/>

      </v-flex>
      <v-flex xs8>
          <v-card
            class="mx-auto"
          >
            <v-img
              class="white--text"
              height="200px"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            >
              <v-card-title class="align-end fill-height">Top 10 Australian beaches</v-card-title>
            </v-img>

            <v-card-text>
              <span>Number 10</span><br>
              <span class="text--primary">
                <span>Whitehaven Beach</span><br>
                <span>Whitsunday Island, Whitsunday Islands</span>
              </span>
            </v-card-text>

            <v-card-actions>
              <v-btn
                text
                color="orange"
              >
                Share
              </v-btn>
              <v-btn
                text
                color="orange"
              >
                Explore
              </v-btn>
            </v-card-actions>
          </v-card>
      </v-flex>
    </v-layout>
  </v-container>

</template>

<script>
import stepper from '@/components/stepper.vue'
export default {
  name: 'App',
  data: () => ({
    //
  }),
  components: {
    stepper
  }
}
</script>
