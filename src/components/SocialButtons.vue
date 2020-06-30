<template>
  <v-row>
    <v-btn fab class="social-button">
      <v-icon color="grey">mdi-linkedin</v-icon>
    </v-btn>
    <v-btn fab class="social-button">
      <v-icon color="grey">mdi-github</v-icon>
    </v-btn>
    <v-btn fab class="social-button">
      <v-icon color="grey">mdi-twitter</v-icon>
    </v-btn>
  </v-row>
</template>

<script>
export default {
  name: 'SocialButtons'
}
</script>

<style scoped>
.social-button {
  background-color: transparent !important;
  margin-right: 4px;
}
.social-button:hover {
  border: 2px solid darkgrey;
}
</style>