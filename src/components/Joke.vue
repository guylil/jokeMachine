<template>
  <v-container>
    <v-layout text-center wrap>
      <v-flex v-if="jokes.length" mb-4>
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to Jokes about {{ category }} stuff
        </h1>
        <v-select
          :items="selectionOptions"
          v-model="numberOfJokesToDisplay"
          label="Select how many jokes to display"
        />
        <v-flex>
          <div
            v-html="joke.joke"
            v-for="joke in jokes.slice(0, numberOfJokesToDisplay)"
            :key="joke.id"
          ></div>
        </v-flex>
      </v-flex>
      <v-flex v-else
        >There are no jokes about "{{ category }}" apparently</v-flex
      >
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Joke",
  props: {
    category: String,
    jokes: Array
  },
  data: () => ({
    numberOfJokesToDisplay: 0,
    items: [...Array(10).keys()].map(x => ++x)
  }),
  computed: {
    selectionOptions: function() {
      return [this.jokes.length, ...this.items];
    }
  }
};
</script>
