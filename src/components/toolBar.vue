<template>
  <div>
    <v-toolbar>

      <v-toolbar-title>Decentralize Justice</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>

        <v-btn text
        v-bind:input-value="page.title===current"
          v-for="page in pages"
          :key="page.title"
          :href="page.link" >

            {{page.title}}

        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
</div>
</template>

<script>
export default {
  name: 'toolBar',
  props: {

  },
  data: () => ({
    pages: [
      { title: 'Home', link: 'https://www.multisigcrypto.com/' },
      { title: 'Test', link: '/' },
      { title: 'About', link: 'https://www.multisigcrypto.com/about' }
    ],
    current: 'Test'
  })
}
</script>

<style scoped>
a{text-decoration: none;
color:white;}
</style>
