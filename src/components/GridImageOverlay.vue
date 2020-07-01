<template>
  <v-fade-transition>
    <v-overlay
      absolute
      :color="imageInfo.color"
      opacity="0.8"
    >
      <h3 :class="{'dark-text': !darkColor}">
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
      <div class="likes-div">
        <v-icon color="red">mdi-heart</v-icon>
        <span
          class="likes-text"
          :class="{'dark-text': !darkColor}"
        >
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
    darkColor() {
      return isDarkColor(this.imageInfo.color)
    }
  }
}
</script>

<style scoped>
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
  font-weight: 500;
  padding-left: 5px;
  font-size: 0.9em;
  font-style: italic;
}
.dark-text {
  color: #161717 !important;
}
</style>