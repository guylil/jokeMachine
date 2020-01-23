<template>
  <v-container fluid>
    <v-row v-if="jokes.length">
      <v-col sm-12 cols="12" md="4">
        <div class="title mb-3">Category: {{ category }}</div>
        <v-select outlined
          :items="selectionOptions"
          v-model="numberOfJokesToDisplay"
          label="Select how many jokes to display"
        />
      </v-col>
      <v-spacer></v-spacer>
      <v-col md="7">
        <div
          v-html="joke.joke"
          v-for="joke in jokes.slice(0, numberOfJokesToDisplay)"
          :key="joke.id"
          :class="{'blue-grey lighten-1' : (1+jokes.indexOf(joke))%2}"
          class="pa-1"
        ></div>
      </v-col>
    </v-row>
    <v-row v-else> There are no jokes about "{{ category }}" apparently </v-row>
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
    numberOfJokesToDisplay: null,
    items: [...Array(10).keys()].map(x => ++x)
  }),
  computed: {
    selectionOptions: function() {
      return [this.jokes.length, ...this.items];
    }
  }
};
</script>
