<template>
  <v-app>
    <Navbar />
    <v-main>
      <v-container>
        <Grid />
      </v-container>
    </v-main>
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
