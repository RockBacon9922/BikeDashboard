<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
const googleview = ref(true)

function update() {
  if (count.value == 100) {
   googleview.value = true 
  }
  
}
</script>

<template>
  <h1>{{ msg }}</h1>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <button type="button" @click="count+=100">increase by 500</button>
  <button v-if="count!=0" @mouseenter="count=0">zero</button>
  <button @click="update()">update</button>
  <p v-if="googleview==true" @mouseenter="googleview=false"><a href="href="https://google.com>click this</a></p>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
