<template>
  <v-app id="app">
    <v-main class="pt-md-16">
      <v-container>
        <v-row>
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
    overviewColValues() {
      if (this.$store.state.gridExpanded) {
        return 12
      }
      return 5
    },
    gridColValues() {
      if (this.$store.state.gridExpanded) {
        return 12
      }
      return 7
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
  font-family: Arial, Helvetica, sans-serif
}
</style>>
