<template>
  <div class="home">
    <img alt="Vue logo" src="../../assets/logo.png" />
      <v-container class="grey lighten-5">
    <v-row no-gutters align="center" justify="center">
      <v-col class="sss"
        cols="12"
        sm="4"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          One of three columns
        </v-card>
      </v-col>
    </v-row>
  </v-container>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>

<style lang="stylus" scoped>
.sss {

}
</style>
