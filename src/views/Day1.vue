<template>
  <div class="max-w-max space-y-6 shadow-lg bg-white rounded-lg p-6">
   <h1 class="text-2xl text-center font-semibold">Day1 Challenge</h1>
   <p class="text-lg"><span class=" font-medium">Question:</span> Write code to say “hello, world!” in any language of your choosing.</p>

   <h1 class="text-4xl text-center text-blue-600 font-bold" v-text="text"></h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
    text: "Hello, world!"
  }
}};
</script>