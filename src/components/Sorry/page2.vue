<template>
  <v-container>
    <v-card class="mx-auto" max-width="400">
      <v-img class="white--text align-end" height="400px" src="../../assets/1.png">
      </v-img>
      <v-card-text>
        <h2 class="display-1 font-weight-light orange--text mb-2">第几次犯错了</h2>
      </v-card-text>
      <v-card-actions>
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn color="primary" dark v-on="on">第一次</v-btn>
          </template>
          <span>亲，可能选错了，会挨打哦</span>
        </v-tooltip>
        <v-btn color="orange" raised>
          <router-link to="/sorry2">
            <router-link to="/sorry3">很多次</router-link>
          </router-link>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>