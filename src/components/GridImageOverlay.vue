<template>
  <v-fade-transition>
    <v-overlay
      absolute
      :color="imageInfo.color"
      opacity="0.8"
      class="overlay"
      :class="{'dark-text': !darkColor}"
    >
      <h3 class="user-title">
        by
        <a
          :href="imageInfo.user_link"
          target="_blank"
          class="user-link"
          :class="{'dark-text': !darkColor}"
        >
          {{imageInfo.user_name}}
        </a>
      </h3>
      <span class="summary">
        "{{formattedSummary}}"
      </span>
      <div class="likes-div">
        <v-icon color="red">mdi-heart</v-icon>
        <span class="likes-text">
        {{imageInfo.likes}}
        </span>
      </div>
    </v-overlay>
  </v-fade-transition>
</template>

<script>
import isDarkColor from 'is-dark-color'

export default {
  name: 'GridImageOverlay',
  props: {
    imageInfo: {
      type: Object,
      required: true
    }
  },
  computed: {
    formattedSummary() {
      if (this.imageInfo.summary.length < 82) return this.imageInfo.summary
      return this.imageInfo.summary.slice(0, 82).trim() + "..."
    },
    darkColor() {
      return isDarkColor(this.imageInfo.color)
    }
  }
}
</script>

<style scoped>
.overlay {
  text-align: center;
  padding-left: 15px;
  padding-right: 15px;
}
.user-title {
  font-size: 1.15em;
  font-style: italic;
}
.user-link {
  color: white;
  text-decoration: none;
  text-align: center;
}
.user-link:hover {
  text-decoration: underline;
}
.likes-div {
  display: flex;
  justify-content: center;
  padding-top: 10px;
}
.likes-text {
  font-weight: 600;
  padding-left: 5px;
  font-size: 0.9em;
}
.dark-text {
  color: #161717 !important;
}
.summary {
  font-size: 0.72em;
  font-style: italic;
}
</style>