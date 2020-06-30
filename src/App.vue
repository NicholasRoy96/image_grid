<template>
  <v-app>
    <Navbar />
    <v-content>
      <v-container>
        <Grid />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'
import Grid from './components/Grid'

export default {
  name: 'App',
  components: {
    Navbar,
    Grid
  },
  data: () => ({
    //
  }),
};
</script>
