<template>
  <div>
    <b-container fluid>
      <b-row align-h="center" class="mb-3">
        <router-link :to="{ name: 'templates' }">Templates</router-link>
        <router-link :to="{ name: 'pricing' }">Pricing</router-link>
        <router-link :to="{ name: 'platforms' }" href="#">Apps</router-link>
        <router-link :to="{ name: 'blog' }">Blog</router-link>
        <router-link :to="{ name: 'about' }">About</router-link>
        <router-link :to="{ name: 'help' }">Help</router-link>
      </b-row>

      <b-row align-h="center" class="mb-5">
        <p>
          © Copyright 2020. All rights reserved.
        </p>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
a {
  color: #7e7e7e;
  margin-right: 1rem;
  display: inline-block;
  text-decoration: underline;
}

a:hover,
a:active {
  color: #000000;
}
</style>
