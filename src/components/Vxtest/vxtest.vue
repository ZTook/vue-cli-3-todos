<template>
  <v-container>
    <v-banner :sticky="sticky" :single-line="singleLine" :icon="icon" :color="color" :icon-color="iconColor"
      :elevation="elevation">
      Vuex Test Demo<br><br>
      Summerry: Press + to Plus and Press - to Minus
      <template v-slot:actions>
        <v-btn text color="deep-purple accent-4">Action</v-btn>
      </template>
    </v-banner>
    <v-div>
      <v-badge overlap>
        <template v-slot:badge>{{ count }}</template>
        <v-icon large>mdi-email</v-icon>
      </v-badge>
      <p>{{ count }}</p>
      <v-btn @click="increment" class="mx-2" fab dark color="primary">
        <v-icon dark>mdi-plus</v-icon>
      </v-btn>
      <v-btn @click="decrement" class="mx-2" fab dark color="primary">
        <v-icon dark>mdi-minus</v-icon>
      </v-btn>
    </v-div>
    <div class="text-center">
      <v-dialog v-model="dialog" width="500">
        <template v-slot:activator="{ on }">
          <v-btn color="red lighten-2" dark v-on="on">
            Click Me
          </v-btn>
        </template>

        <v-card>
          <v-card-title class="headline grey lighten-2" primary-title>
            Privacy Policy
          </v-card-title>

          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="dialog = false">
              I accept
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      sticky: false,
      singleLine: false,
      icon: 'mdi-plus',
      color: undefined,
      iconColor: undefined,
      elevation: 4,
      colors: ['red', 'blue', 'teal lighten-2', 'warning lighten-1', 'orange'],
      icons: ['mdi-access-point-network', 'mdi-plus', 'mdi-minus', 'mdi-network-strength-2-alert', 'mdi-earth'],
      dialog: false,
    }),
  }
</script>

<script>
  export default {
    data: () => ({
      sticky: false,
      singleLine: true,
      icon: 'mdi-plus',
      color: undefined,
      iconColor: undefined,
      elevation: 4,
      colors: ['red', 'blue', 'teal lighten-2', 'warning lighten-1', 'orange'],
      icons: ['mdi-access-point-network', 'mdi-plus', 'mdi-minus', 'mdi-network-strength-2-alert', 'mdi-earth'],
    }),
    computed: {
      count() {
        return this.$store.state.count
      }
    },
    methods: {
      increment() {
        this.$store.commit('increment')
      },
      decrement() {
        this.$store.commit('decrement')
      }
    }
  }
</script>