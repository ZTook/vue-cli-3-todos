<template>
  <v-container>
    <v-card class="mx-auto" max-width="400">
      <v-img class="white--text align-end" height="400px" src="../../assets/6.jpg">
      </v-img>
      <v-card-text>
        <h2 class="display-1 font-weight-light orange--text mb-2">错了没有</h2>
      </v-card-text>
      <v-card-actions>
        <v-tooltip v-model="show">
          <span>亲，可能选错了，会挨打哦</span>
        </v-tooltip>
        <v-btn color="orange" raised @click="show = !show">没错</v-btn>
        <v-btn color="orange" raised @click="gotopage2">错了</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        show: false,
      }
    },
    methods : {
      gotopage2 : function (event) {
        if (event)
          this.$router.push({ path: '/sorry2' });
      }

    }
  }
</script>