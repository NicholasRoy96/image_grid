<template>
  <v-row justify="start">
    <v-btn v-if="fullscreenGrid" class="text-capitalize action-button" @click="toggleGrid" depressed>
      <v-icon left>mdi-grid</v-icon>
      Fullscreen grid
    </v-btn>
    <v-btn v-if="!fullscreenGrid" class="text-capitalize action-button" @click="toggleGrid" depressed>
      <v-icon left>mdi-grid-large</v-icon>
      Splitscreen grid
    </v-btn>
    <v-btn class="text-capitalize action-button" depressed>
      <v-icon left>mdi-refresh</v-icon>
      New images
    </v-btn>
  </v-row>
</template>

<script>
export default {
  name: 'ActionButtons',
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