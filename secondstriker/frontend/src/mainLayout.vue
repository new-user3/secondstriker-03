<template>
  
  <v-app :class="theme">
    <v-app-bar app dark color= #000>
      <v-app-bar-title>Second Striker</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

    <v-bottom-navigation fixed app color="grey darken-3">
      <v-btn href="/">
        <v-icon>mdi-soccer</v-icon>
        <span>1 vs 1</span>
      </v-btn>

      <v-btn href="/leagues">
        <v-icon>mdi-trophy</v-icon>
        <span>Leagues</span>
      </v-btn>

      <v-btn href="/matches">
        <v-icon>mdi-calendar-today</v-icon>
        <span>Matches</span>
      </v-btn>

      <v-btn href="/profile">
        <v-icon>mdi-account</v-icon>
        <span>Profile</span>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<style scoped>
.v-app-bar {
  font-size: 16px;
}

.v-btn {
  padding: 8px 12px;
}

/*.v-bottom-navigation .v-btn span {
  display: none;
}*/

@media (min-width: 600px) {
  .v-bottom-navigation .v-btn span {
    display: inherit;
  }
}
</style>