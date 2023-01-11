<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="
      bg-neutral-100
      w-screen
      flex flex-col
      items-center
      justify-center
      overflow-y-auto
      space-y-2
      py-4
      h-screen
    ">

    <RouterView />
    <p class="px-6 mt-12 border rounded-lg py-2 text-sm bg-white shadow-sm">
      Made with <span class="text-purple-500 font-medium">TailwindCss</span> & <span
        class="text-green-600 font-medium">Vuejs</span> by
      <a href="https://bowofade.com" class="text-blue-600">Bowofade</a>
    </p>
    <!--  -->
  </div>
</template>
