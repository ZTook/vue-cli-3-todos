<template>
  <v-container>
  <v-card class="mx-auto" max-width="400">
    <v-img
      class="white--text align-end"
      height="400px"
      src="../../assets/4.jpg"
    >
    </v-img>
    <v-card-text><h2 class="display-1 font-weight-light orange--text mb-2">还有下一次？</h2></v-card-text>
    <v-card-actions>
      <v-btn color="orange" raised @click="show = !show">说不好</v-btn>
      <v-btn color="orange" raised><router-link to="/sorry2"><router-link to="/sorry5">莫得咯</router-link></router-link></v-btn>
    </v-card-actions>
  </v-card>
          <v-tooltip v-model="show" top>
          <template v-slot:activator="{ on }">
          </template>
          <span>Programmatic tooltip</span>
        </v-tooltip>
  </v-container>
</template>