<template>
  <v-app>
    <v-app-bar app dark>
      <div class="d-flex align-center">
        <div>All the Chuck Norris jokes that you can wish for</div>
      </div>
      <v-spacer></v-spacer>
      <div>Categories:</div>
      <router-link v-for="category in categories" :key="category.name" :to="category.route">
        <v-btn text>{{category.text}}</v-btn>
      </router-link>
      <v-btn href="https://github.com/guylil" target="_blank" text>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>
<script>

export default {
  name: "App",
  data() {
    return {
      categories: [],
    };
  },
  mounted() {
    this.getRoutes();
  },
  methods: {
    getRoutes() {
      fetch('https://api.icndb.com/categories')
              .then(response => response.json())
              .then(res => this.categories = ['all',...res.value].map(cat =>
                            {return { name: cat, route: `/category/${cat}`, text: cat }}))
    }
  },
};
</script>

<style lang="scss">
a {
  text-decoration: none;
}

</style>
