<template>
  <v-row>
    <v-btn
      fab
      class="social-button"
      href="https://www.linkedin.com/in/nicholas-roy-b1078a19a/"
      target="_blank"
     >
      <v-icon color="#b2ccd6" size="30">mdi-linkedin</v-icon>
    </v-btn>
    <v-btn
      fab
      class="social-button"
      href="https://github.com/NicholasRoy96"
      target="_blank"
     >
      <v-icon color="#b2ccd6" size="30">mdi-github</v-icon>
    </v-btn>
    <v-btn
      fab
      class="social-button"
      href="http://nicholasroy.co.uk/"
      target="_blank"
     >
      <v-icon color="#b2ccd6" size="30">mdi-laptop-windows</v-icon>
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
  margin-left: 10px;
  margin-right: 10px;
}
.social-button:hover {
  border: 2px solid darkgrey;
}
</style>