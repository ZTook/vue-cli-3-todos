<template>
  <v-div>
    <v-parallax dark src="../assets/img/girl9.jpg" :height = "$screen.height>800 ?'460':'350'">
    </v-parallax>
    <vue-particles color="#dedede" :height = $screen.height-460>
    </vue-particles>
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4" id="loginbox">
            <v-card class="elevation-12">
              <v-toolbar color="warning" dark flat>
                <v-toolbar-title>Welcome Home , Dear</v-toolbar-title>
                <v-spacer />
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Username"
                    name="username"
                    prepend-icon="person"
                    type="text"
                  />

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="lock"
                    type="password"
                  />
                </v-form>
              </v-card-text>

              <v-card-actions>
                <v-spacer />

                <v-btn color="warning">Login in<v-icon>mdi-launch</v-icon></v-btn>
                <v-btn color="warning">Just See<v-icon>mdi-face</v-icon></v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>
.fill-height {
    position: fixed
    top: 0px
}
</style>
