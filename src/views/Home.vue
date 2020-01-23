<template>
  <div>
    <Welcome msg="Welcome to Chuck Norris Jokes"/>
  </div>
</template>

<script>

  // @ is an alias to /src
import Welcome from '@/components/Welcome.vue'

export default {
  name: 'home',
  components: {
    Welcome
  }
}
</script>
