<template>
  <div id="overview" class="pa-4 pa-sm-0">

    <h1 class="overview-title">
      Image Grid
    </h1>
    <p class="overview-text">
      Explore this reponsive image grid. Click an image to be taken to the image page, or hover over the image and click on the user to visit the user profile. You can toggle the layout of the grid between fullscreen and splitscreen, and you can pull in new random images by hitting the new images button.
    </p>

    <ActionButtons class="pt-3" />
    <SocialButtons class="pt-3" />

  </div>
</template>

<script>
import ActionButtons from './ActionButtons'
import SocialButtons from './SocialButtons'

export default {
  name: 'Overview',
  components: {
    ActionButtons,
    SocialButtons
  }
}
</script>

<style scoped>
#overview {
  background-color: transparent;
  padding-right: 30px;
}
.overview-title {
  padding-bottom: 12px;
  font-size: 4em;
  font-weight: 540;
  opacity: 0.95;
}
.overview-text {
  font-size: 1em;
  color: #544f4f;
}
</style>