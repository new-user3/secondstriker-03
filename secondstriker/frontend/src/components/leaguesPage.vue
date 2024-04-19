<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>Leagues</h1>
        <!-- Leagues content -->
        <v-card v-for="league in leagues" :key="league.id">
          <v-card-title>{{ league.name }}</v-card-title>
          <v-card-text>{{ league.description }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <h1>Tournament Bracket</h1>
        <!-- Tournament bracket -->
        <TournamentBracket
          :teams="teams"
          :matchups="matchups"
          :settings="settings"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { TournamentBracket } from 'vue-tournament-bracket';
import { ref } from 'vue';

const leagues = ref([
  {
    id: 1,
    name: 'Premier League',
    description: 'The top professional men\'s English football league.',
  },
  {
    id: 2,
    name: 'La Liga',
    description: 'The top professional men\'s Spanish football league.',
  },
  // Add more leagues as needed
]);

const teams = ref([
  { id: 1, name: 'Team A' },
  { id: 2, name: 'Team B' },
  { id: 3, name: 'Team C' },
  { id: 4, name: 'Team D' },
  // Add more teams as needed
]);

const matchups = ref([
  { id: 1, team1: 1, team2: 2 },
  { id: 2, team1: 3, team2: 4 },
  { id: 3, team1: 1, team2: 4 },
  { id: 4, team1: 2, team2: 3 },
  // Add more matchups as needed
]);

const settings = ref({
  showControls: true,
  showTeamNames: true,
  theme: 'dark',
  // Add more settings as needed
});
</script>