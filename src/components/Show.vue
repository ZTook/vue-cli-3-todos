<template>
    <v-app>
        <Header></Header>
        <v-content>
            <v-card class="mx-auto" :max-width="$screen.width>1200 ?'1000':'470'">
                <v-card dark flat>
                    <v-img src="../assets/img/girl3.jpg" gradient="to top, rgba(0,0,0,.44), rgba(0,0,0,.44)">
                        <v-container class="fill-height">
                            <v-row align="center">
                                <strong class="display-3 font-weight-regular mr-6" justify="center"> Sweet Sugar
                                    Daddy</strong>
                            </v-row>
                        </v-container>
                    </v-img>
                </v-card>
                <v-card-text class="py-0">
                    <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
                        <v-timeline-item v-for="(item, i) in items" :key="i" :color="item.color" :icon="item.icon"
                            fill-dot>
                            <v-card :color="item.color" dark>
                                <v-card-title class="title">Lorem Ipsum Dolor</v-card-title>
                                <v-img src="../assets/img/girl12.jpg" height=200></v-img>
                                <v-card-text class="white text--primary">
                                    <p>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet
                                        nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim
                                        zril disputando voluptatibus, vix an salutandi sententiae.</p>
                                    <v-btn :color="item.color" class="mx-0" outlined>
                                        Detail
                                    </v-btn>
                                </v-card-text>
                            </v-card>
                        </v-timeline-item>
                    </v-timeline>
                </v-card-text>
            </v-card>
        </v-content>
    </v-app>
</template>>

<script>
import Header from "../components/Views/Header.vue";
export default {
  data: () => ({
    items: [{
      color: 'red lighten-2',
      icon: 'mdi-star',
    },
    {
      color: 'purple darken-1',
      icon: 'mdi-book-variant',
    },
    {
      color: 'green lighten-1',
      icon: 'mdi-airballoon',
    },
    {
      color: 'indigo',
      icon: 'mdi-buffer',
    }],
  }),
  name: "home",
    components: {
      Header
  }
};
</script>