<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import getCurrentWeather from '@/api/getCurrentWeather'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  async created () {
    let response = await getCurrentWeather()

    console.log(response)
  }
}
</script>
