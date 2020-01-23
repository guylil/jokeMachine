<template>
  <v-container>
    <v-row no-gutters>
      <v-col mb-4>
        <v-row justify="center">
          <h1 class="display-2 ma-3">{{ msg }}</h1>
        </v-row>
        <v-row class="my-2" justify="center">
          <div class="subheading font-weight-regular">
            Please select a category from above
            <br />Or just get all the jokes right now:
          </div>
        </v-row>
        <v-row class="my-4" justify="center">
          <v-btn dark class="secondary" x-large @click="$router.push('category/all')">all</v-btn>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Welcome",
  props: { msg: String },
  data: () => ({})
};
</script>
