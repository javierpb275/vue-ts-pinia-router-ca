<script lang="ts" setup>
import HeaderLink from './HeaderLink.vue'
</script>

<template>
  <div class="text-center my-3">
    <h4>Cat 🐱 Facts</h4>
    <div class="d-flex justify-content-center">
      <HeaderLink to="/" exact>Home</HeaderLink>
      <HeaderLink to="/cats/facts">List</HeaderLink>
    </div>
  </div>
</template>

