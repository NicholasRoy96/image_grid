<template>
  <v-fade-transition>
    <v-overlay
      absolute
      color="#141414"
      opacity="0.8"
    >
      <h3>
        by
        <a href="#" class="user-link">
          Nicholas
        </a>
      </h3>
    </v-overlay>
  </v-fade-transition>
</template>

<style scoped>
.user-link {
  color: white;
  text-decoration: none;
  text-align: center;
}
.user-link:hover {
  text-decoration: underline;
}
</style>