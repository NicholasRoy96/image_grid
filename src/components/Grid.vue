<template>
  <transition appear name="fade">
    <v-row>
      <v-col
        v-for="(image, i) in imageInfo"
        :key="i"
        class="d-flex child-flex"
        cols="6"
        sm="4"
        :md="colValues"
      >
        <v-hover>
          <template v-slot:default="{ hover }">
            <a :href="image.image_link" target="_blank">
              <v-card
                flat
                tile
                class="d-flex"
              >
                <GridImage :image="image.url" />
                <GridImageOverlay :imageInfo="image" v-if="hover" />
              </v-card>
            </a>
          </template>
        </v-hover>
      </v-col>
    </v-row>
  </transition>
</template>

<script>
import GridImage from './GridImage.vue'
import GridImageOverlay from './GridImageOverlay.vue'

export default {
  name: 'Grid',
  components: {
    GridImage,
    GridImageOverlay
  },
  computed: {
    colValues() {
      return this.$store.state.gridExpanded ? 3 : 6
    },
    imageInfo() {
      if (!this.$store.state.images) return []
      return this.$store.state.images
    }
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.25s ease-out;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>