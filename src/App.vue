<template>
  <v-app>
    <v-app-bar app dark>
      <div class="d-flex align-center">
        <div>All the Chuck Norris jokes that you can wish for</div>
      </div>
      <v-spacer></v-spacer>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      <v-btn
              href="https://github.com/vuetifyjs/vuetify/releases/latest"
              target="_blank"
              text
      >
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
