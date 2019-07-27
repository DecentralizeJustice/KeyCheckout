<template>
  <v-flex xs8>
      <v-card
        class="mx-auto"
      >

        <v-card-text>
          <v-overflow-btn
          class="my-2"
          :items="dropdown_font"
          label="Amount"
          target="#dropdown-example"
        ></v-overflow-btn>
        </v-card-text>
        <bottomNav/>
      </v-card>
  </v-flex>
</template>

<script>
import bottomNav from '@/components/bottomNav.vue'

export default {
  data: () => ({
    dropdown_font: ['50 USD', '100 USD', '150 USD', '200 USD']
  }),
  components: {
    bottomNav
  }
}
</script>
