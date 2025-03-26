<script setup lang="ts">
import Login from './components/login.vue';
import Toast from './components/toast.vue';
</script>

<template>
  <main>
    <Login />
    <Toast />
  </main>
</template>

<style scoped>
main {
  display: flex;
  width: 100%;
  height: 100vh;

  background-color: var(--offwhite);

  align-items: center;
  justify-content: center;
}
</style>
