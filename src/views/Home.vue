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
    let valenciaWeather = await getCurrentWeather('valencia')
    let barcelonaWeather = await getCurrentWeather('barcelona')

    console.log(valenciaWeather)
    console.log(barcelonaWeather)
  }
}
</script>
