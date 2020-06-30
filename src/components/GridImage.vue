<template>
  <v-img
    :src="image"
    aspect-ratio="0.88"
    class="grey lighten-2"
  >
    <template v-slot:placeholder>
      <v-row
        class="fill-height ma-0"
        align="center"
        justify="center"
      >
        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
      </v-row>
    </template>
  </v-img>
</template>

<script>
export default {
  name: 'GridImage',
  props: {
    image: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.hover-text {
  display: none;
}
</style>