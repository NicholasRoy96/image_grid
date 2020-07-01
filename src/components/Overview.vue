<template>
  <div id="overview" class="pa-4 pa-sm-0">

    <h1 class="overview-title">
      Image Grid
    </h1>
    
    <h4 class="overview-creator">
      by
      <a
        href="http://nicholasroy.co.uk/"
        target="_blank"
        class="creator-link"
      >
        Nicholas Roy
      </a>
    </h4>
    <p class="overview-text">
      Explore this responsive image grid. Click an image to be taken to the image page, or hover over the image and click on the user to visit the user profile. Toggle the layout of the grid between fullscreen and splitscreen, or even pull in new random images by hitting the new images button. The Unsplash API only allows 50 request per hour though, so go easy!
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
  font-size: 4em;
  font-weight: 540;
  opacity: 0.95;
}
.overview-creator {
  font-size: 0.95em;
  font-style: italic;
  font-weight: 450;
  opacity: 0.9;
  margin-top: -10px;
  padding-bottom: 20px;
}
.creator-link {
  color: white;
  text-decoration: none;
}
.creator-link:hover {
  text-decoration: line-through;
}
.overview-text {
  font-size: 1em;
  color: #a2a3a3;
  font-family: 'Roboto', sans-serif;
}

/* MEDIA QUERIES */
/* MD */
@media(max-width: 1263px) {
  .overview-title {
    font-size: 3.5em;
  }
}

/* XS */
@media(max-width: 599px) {
  .overview-title {
    font-size: 3em;
  }
}
</style>