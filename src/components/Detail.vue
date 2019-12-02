<template>
    <v-app>
        <Header></Header>
        <v-content>
            <v-card class="mx-auto" :max-width="$screen.width>1200 ?'1000':'470'">
                <v-carousel>
                    <v-carousel-item v-for="(item,i) in caritems" :key="i" :src="item.src"></v-carousel-item>
                </v-carousel>
                <v-hover v-slot:default="{ hover }">
                    <v-card class="mx-auto" color="grey lighten-4" max-width="600">
                        <v-img :aspect-ratio="16/9" src="../assets/img/girl22.jpg">
                            <v-expand-transition>
                                <div v-if="hover"
                                    class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
                                    style="height: 100%; opacity: 0.5;">
                                    $14.99
                                </div>
                            </v-expand-transition>
                        </v-img>
                        <v-card-text class="pt-6" style="position: relative;">
                            <v-btn absolute color="orange" class="white--text" fab large right top>
                                <v-icon>mdi-cart</v-icon>
                            </v-btn>
                            <div class="font-weight-light grey--text title mb-2">For the perfect meal</div>
                            <h3 class="display-1 font-weight-light orange--text mb-2">QW cooking utensils</h3>
                            <div class="font-weight-light title mb-2">
                                Our Vintage kitchen utensils delight any chef.<br>
                                Made of bamboo by hand
                            </div>
                        </v-card-text>
                    </v-card>
                </v-hover>
                <v-row class="fill-height" align="center" justify="center">
                    <template v-for="(item, i) in items">
                        <v-col :key="i" cols="12" md="4">
                            <v-hover v-slot:default="{ hover }">
                                <v-card class="recommod" :elevation="hover ? 12 : 2" :class="{ 'on-hover': hover }">
                                    <v-img :src="item.img" height="225px">
                                        <v-chip class="ma-2" color="orange" text-color="white">Premium<v-icon right>mdi-star</v-icon>
                                        </v-chip>
                                        <v-card-title class="title white--text">
                                            <v-row class="fill-height flex-column" justify="space-between">
                                                <p class="mt-4 subheading text-left">{{ item.title }}</p>

                                                <div>
                                                    <p class="ma-0 body-1 font-weight-bold font-italic text-left">
                                                        {{ item.text }}
                                                    </p>
                                                    <p class="caption font-weight-medium font-italic text-left">
                                                        {{ item.subtext }}
                                                    </p>
                                                </div>

                                                <div class="align-self-center">
                                                    <v-btn v-for="(icon, index) in icons" :key="index"
                                                        :class="{ 'show-btns': hover }" color="transparent" icon>
                                                        <v-icon :class="{ 'show-btns': hover }" color="transparent">
                                                            {{ icon }}
                                                        </v-icon>
                                                    </v-btn>
                                                </div>
                                            </v-row>
                                        </v-card-title>
                                    </v-img>
                                </v-card>
                            </v-hover>
                        </v-col>
                    </template>
                </v-row>
            </v-card>
        </v-content>
    </v-app>
</template>>

<script>
    import Header from "../components/Views/Header.vue";
    export default {
        data: () => ({
            icons: ['mdi-rewind', 'mdi-play', 'mdi-fast-forward'],
            items: [{
                    title: 'New Releases',
                    text: "It's New Release Friday",
                    subtext: 'Newly released songs. Updated daily.',
                    img: require('../assets/img/girl11.jpg'),
                },
                {
                    title: 'Rock',
                    text: 'Greatest Rock Hits',
                    subtext: 'Lose yourself in rock tunes.',
                    img: require('../assets/img/girl12.jpg'),
                },
                {
                    title: 'Mellow Moods',
                    text: 'Ambient Bass',
                    subtext: 'Chill beats to mellow you out.',
                    img: require('../assets/img/girl13.jpg'),
                },
            ],
            caritems: [
                {
                    src: require('../assets/img/girl26.jpg'),
                },
                {
                    src: require('../assets/img/girl28.jpg'),
                },
                {
                    src: require('../assets/img/girl29.jpg'),
                },
                {
                    src: require('../assets/img/girl30.jpg'),
                },
            ],
            imgs: 
                {
                    src: '../assets/img/girl26.jpg'
                },
            transparent: 'rgba(255, 255, 255, 0)',
        }),

        name: "home",
        components: {
            Header
        }
    };
</script>


<style scoped>
    .v-card {
        transition: opacity .4s ease-in-out;
        padding: 10px;
    }
    .recommod:not(.on-hover) {
        opacity: 0.6;
    }
    .show-btns {
        color: rgba(255, 255, 255, 1) !important;
    }
</style>