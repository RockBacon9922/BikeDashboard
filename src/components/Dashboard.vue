<style>
.bgColor {
  @apply bg-gray-600;
}
.navColors {
  @apply text-black bg-green-600 opacity-30 rounded-3xl gap-10;
}

</style>


<script>
import { ref } from "vue";

const time = ref(2000)

</script>


<template>
  <div id="main" class="bgColor min-h-screen min-w-min flex flex-col">
    <nav class="relative p-2 m-2 flex justify-between flex-wrap flex-row navColors">
      <h1 class="justify-self-start">User</h1>
      <h1 class="justify-self-center">time and date</h1>
      <h1 class="justify-self-end">100%</h1>
    </nav>
    <div id="main" class="relative flex-auto rounded-3xl m-2 bg-blue-600"></div>
  </div>  
</template>

<style scoped>
</style>