<template>
  <v-container>
  <v-card class="mx-auto" max-width="400">
    <v-img
      class="white--text align-end"
      height="400px"
      src="../../assets/12.png"
    >
    </v-img>
    <v-card-text><h2 class="display-1 font-weight-light orange--text mb-2">信你个鬼，下次再犯怎么办</h2></v-card-text>
    <v-card-actions>
      <v-btn color="orange" raised @click="show = !show">继续认错</v-btn>
      <v-btn color="orange" raised><router-link to="/sorry2"><router-link to="/sorry6">交罚款</router-link></router-link></v-btn>
    </v-card-actions>
  </v-card>
          <v-tooltip v-model="show" top>
          <template v-slot:activator="{ on }">
          </template>
          <span>Programmatic tooltip</span>
        </v-tooltip>
  </v-container>
</template>