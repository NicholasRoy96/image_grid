<template>
  <v-app id="app">
    <v-main class="pt-md-10 pb-md-10">
      <v-container>
        <v-row justify="space-between">
          <v-col cols="12" :md="overviewColValues">
            <Overview />
          </v-col>
          <v-col cols="12" :md="gridColValues">
            <Grid />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Grid from './components/Grid.vue'
import Overview from './components/Overview.vue'
import fetchImages from './mixins/fetchImages.js'

export default {
  name: 'App',
  components: {
    Grid,
    Overview
  },
  mixins: [fetchImages],
  computed: {
    gridExpanded() {
      return this.$store.state.gridExpanded
    },
    overviewColValues() {
      if (this.gridExpanded) {
        return 12
      }
      return 5
    },
    gridColValues() {
      if (this.gridExpanded) {
        return 12
      }
      return 6
    }
  },

  created() {
    this.fetchImages()
  }
};
</script>

<style scoped>
#app {
  color: white;
  background-color: #080808;
  font-family: 'Poppins', sans-serif;
}
</style>>
