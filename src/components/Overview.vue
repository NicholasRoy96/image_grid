<template>
  <div id="overview" class="pa-4 pa-sm-0">

    <h1 class="overview-title">
      Image Grid
    </h1>
    <p class="overview-text">
      Please explore this reponsive image grid. Click an image to be taken to the image page, or hover over the image and click on the user to visit the user profile. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia explicabo voluptatum blanditiis autem aspernatur quo. Illum incidunt, nesciunt earum eum ad magni repellendus iste pariatur, sapiente in sed? Expedita, voluptate.
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