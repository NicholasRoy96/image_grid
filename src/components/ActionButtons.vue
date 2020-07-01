<template>
  <v-row justify="start">
    <v-btn
      v-if="!fullscreenGrid"
      depressed
      class="text-capitalize action-button d-none d-md-flex"
      @click="toggleGrid"
     >
      <v-icon left color="#b2ccd6 !important">mdi-grid</v-icon>
      Fullscreen grid
    </v-btn>
    <v-btn
      v-else
      depressed
      class="text-capitalize action-button d-none d-md-flex"
      @click="toggleGrid"
    >
      <v-icon left color="#b2ccd6 !important">mdi-grid-large</v-icon>
      Splitscreen grid
    </v-btn>
    <v-btn
      depressed
      class="text-capitalize action-button"
      @click="fetchImages"
    >
      <v-icon left color="#b2ccd6 !important">mdi-refresh</v-icon>
      New images
    </v-btn>
  </v-row>
</template>

<script>
import fetchImages from '../mixins/fetchImages.js'

export default {
  name: 'ActionButtons',
  mixins: [fetchImages],
  computed: {
    fullscreenGrid() {
      return this.$store.state.gridExpanded
    }
  },
  methods: {
    toggleGrid() {
      return this.$store.dispatch('toggleGridExpanded')
    }
  }
}
</script>

<style scoped>
.action-button {
  background-color: transparent !important;
  color: lightgrey !important;
  margin-left: 10px;
  margin-right: 10px;
}
</style>