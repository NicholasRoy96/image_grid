<template>
  <v-row>
    <v-btn
      fab
      class="social-button"
      href="https://www.linkedin.com/in/nicholas-roy-b1078a19a/"
      target="_blank"
     >
      <v-icon color="grey">mdi-linkedin</v-icon>
    </v-btn>
    <v-btn
      fab
      class="social-button"
      href="https://github.com/NicholasRoy96"
      target="_blank"
     >
      <v-icon color="grey">mdi-github</v-icon>
    </v-btn>
    <v-btn
      fab
      class="social-button"
      href="http://nicholasroy.co.uk/"
      target="_blank"
     >
      <v-icon color="grey">mdi-account-box-multiple</v-icon>
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