<template>
  <div>
    <v-parallax dark src="../assets/img/girl23.jpg" :height="$screen.height>800 ?'460':'350'">
    </v-parallax>
    <vue-particles color="#dedede" :height=$screen.height-460>
    </vue-particles>
    <v-container class=fill-height fluid>
      <v-row align="center" justify="center">
        <v-card class="mx-auto" :max-width="$screen.width>1200 ?'470':'370'" raised elevation="20">
        <v-img class="white--text align-end" height="300px" src="../assets/img/girl11.jpg">
        <v-card-title>Hi, Come Here To Register And Seek More</v-card-title>
      </v-img>
        <v-card-text class="text--primary">
          <v-form ref="form" v-model="valid" :lazy-validation="lazy">
            <v-text-field v-model="name" :counter="10" :rules="nameRules" label="NickName" required></v-text-field>
            <v-text-field v-model="email" :rules="emailRules" label="Your E-mail" required></v-text-field>
            <v-select v-model="select" :items="items" :rules="[v => !!v || 'Item is required']" label="Item" required>
              </v-select>
                <v-checkbox v-model="checkbox" :rules="[v => !!v || 'You must agree to continue!']" label="Do you agree?" required></v-checkbox>
                  <v-btn color="warning" class="mr-3" @click="cancel">Cancel</v-btn>
                  <v-btn color="error" class="mr-3" @click="reset">Reset</v-btn>
                  <v-btn color="primary" @click="submit">Submit</v-btn>
                </v-form>
        </v-card-text>
      </v-card>
    </v-row>
    </v-container>
  </div>
</template>

<style lang="stylus" scoped>
.fill-height {
    position: fixed
    top: 0px
}
</style>