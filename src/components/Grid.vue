<template>
  <v-row>
    <v-col
      v-for="n in 12"
      :key="n"
      class="d-flex child-flex"
      cols="6"
      sm="4"
      md="3"
    >
      <v-hover>
        <template v-slot:default="{ hover }">
          <a href="#">
            <v-card flat tile class="d-flex">
              <GridImage :image="`https://picsum.photos/500/300?image=${n}`" />
              <GridImageOverlay v-if="hover" />
            </v-card>
          </a>
        </template>
      </v-hover>
    </v-col>
  </v-row>
</template>

<script>
import GridImage from './GridImage.vue'
import GridImageOverlay from './GridImageOverlay.vue'

export default {
  name: 'Grid',
  components: {
    GridImage,
    GridImageOverlay
  }
}
</script>