<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <h1>JokenPo</h1>
      </div>
    </v-app-bar>

    <v-content>
      <Game/>
    </v-content>
  </v-app>
</template>

<script>
import Game from './components/Game';

export default {
  name: 'App',

  components: {
    Game,
  },

  data: () => ({
    //
  }),
};
</script>
