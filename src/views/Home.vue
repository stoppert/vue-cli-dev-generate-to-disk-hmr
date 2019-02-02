<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HmrTest/>
  </div>
</template>

<script>
// @ is an alias to /src
import HmrTest from '@/components/HmrTest.vue'

export default {
  name: 'home',
  components: {
    HmrTest
  }
}
</script>
