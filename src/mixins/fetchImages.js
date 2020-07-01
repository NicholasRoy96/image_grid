  export default {
    methods: {
      async fetchImages() {
        try {
          const response = await this.$axios.get(`https://api.unsplash.com/photos/?page=${Math.random() * 100}&per_page=12&client_id=${process.env.VUE_APP_ACCESS_KEY}`)
          const images = response.data
          const formattedImages = images.map(image => {
            return {
              url: image.urls.regular,
              user_name: image.user.first_name,
              user_link: image.user.links.html,
              image_link: image.links.html,
              likes: image.likes,
              summary: image.alt_description,
              color: image.color
            }
          })
          await this.$store.dispatch("updateImages", formattedImages)
        } catch (err) {
          console.log(err)
        }
      }
    }
  }
  