<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Ostrich</span>
        <span class="font-weight-light">TOOL</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <Serial/>
    </v-content>
  </v-app>
</template>

<script>
import Serial from './components/Serial'

export default {
  name: 'App',
  components: {
    Serial
  },
  data () {
    return {
      //
    }
  }
}
</script>
