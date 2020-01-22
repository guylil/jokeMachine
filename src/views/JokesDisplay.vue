<template>
  <v-container>
    <v-layout text-center wrap>
      <v-flex mb-4>
        <h3 class="font-weight-bold mb-3">
          Welcome to JokesDisplay.vue
        </h3>
      </v-flex>

      <v-flex mb-5 xs12>
<!--        <h2 class="headline font-weight-bold mb-3">What's next?</h2>-->
                <v-layout justify-center>
                  <Joke :category="$route.params.category" :jokes="jokes"/>
                </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  /* eslint-disable */

import Joke from "../components/Joke";

export default {
  name: "JokesDisplay",
  components: {
    Joke
  },
  data: () => ({
    jokes: []
  }),
  methods: {
    getJokesByCategory(category) {
      let url = 'https://api.icndb.com/jokes/';
      if (category !=='all') { url = `${url}?limitTo=[${category}]` }
      fetch(url).then(response => response.json())
                .then(jokes => this.jokes = jokes.value);
      }
  },
  watch: {
    $route(to, from) {
      this.getJokesByCategory(to.params.category);
    }
  },
  mounted() {
    this.getJokesByCategory(this.$route.params.category)
  }
};
</script>
