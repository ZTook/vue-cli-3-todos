<template>
  <v-container>
  <v-card class="mx-auto" max-width="400">
    <v-img
      class="white--text align-end"
      height="400px"
      src="../../assets/13.jpg"
    >
    </v-img>
    <v-card-text><h2 class="display-1 font-weight-light orange--text mb-2">上交本次罚金</h2></v-card-text>
    <v-card-actions>
      <v-btn color="orange" raised @click="show = !show">犹豫</v-btn>
      <v-btn color="orange" raised>上交</v-btn>
    </v-card-actions>
  </v-card>
          <v-tooltip v-model="show" top>
          <template v-slot:activator="{ on }">
          </template>
          <span>Programmatic tooltip</span>
        </v-tooltip>
  </v-container>
</template>