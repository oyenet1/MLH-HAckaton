<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div
    class="
      bg-neutral-100
      w-screen
      flex flex-col
      items-center
      justify-center
      overflow-y-auto
      space-y-2
      py-4
    "
  >
    <p class="px-6 mt-12 border rounded-lg py-2 text-sm bg-white shadow-sm">
      Made with TailwindCss by
      <a href="https://bowofade.com" class="text-blue-600">Bowofade</a>
    </p>
    <RouterView />

    <!--  -->
  </div>
</template>
