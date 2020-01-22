<template>
  <v-app>
    <v-app-bar app dark>
      <div class="d-flex align-center">
        <div>All the Chuck Norris jokes that you can wish for</div>
      </div>
      <v-spacer></v-spacer>
      <router-link v-for="cat in categories" :key="cat.name" :to="cat.route">
        |> {{ cat.text }} |
      </router-link>
      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
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
      categories: [
        // {name: 'home', route: '/', text:'home', originApi:'/'},
        // {name: 'About', route: '/about', text:'about', originApi:'/'},
      ],
      routes: []
    };
  },
  beforeCreate() {},
  mounted() {
    this.getRoutes();
  },
  methods: {
    getRoutes() {
      fetch('https://api.icndb.com/categories')
              .then(response => response.json())
              .then(res => this.categories = ['all',...res.value].map(cat =>
                            {return { name: cat, route: `/category/${cat}`, text: cat }}))
      // return {type: "success", value: ["explicit", "nerdy"]}
      // this.routes = ["explicit", "nerdy"];
      // this.categories = ["explicit", "nerdy", "all"].map(cat => {
      //   return { name: cat, route: `/category/${cat}`, text: cat };
      // });
    }
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
