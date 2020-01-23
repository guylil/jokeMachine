<template>
  <v-container fluid>
    <v-row justify="center">
        <h3 class="font-weight-bold mb-3">Welcome to Chuck Norris Jokes</h3>
    </v-row>
    <v-row xs-12 justify="center">
      <v-col>
        <v-layout>
          <Joke :category="$route.params.category" :jokes="jokes"/>
        </v-layout>
      </v-col>
    </v-row>
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
