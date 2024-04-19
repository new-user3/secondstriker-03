<template>
    <v-container>
      <v-row>
        <v-col cols="12">
          <h1>Matches</h1>
          <!-- Add your matches content here -->
          <v-card v-for="match in matches" :key="match.id">
            <v-card-title>{{ match.homeTeam }} vs. {{ match.awayTeam }}</v-card-title>
            <v-card-text>Date: {{ match.date }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const matches = ref([
    {
      id: 1,
      homeTeam: 'Manchester United',
      awayTeam: 'Chelsea',
      date: 'April 5, 2024',
    },
    {
      id: 2,
      homeTeam: 'Barcelona',
      awayTeam: 'Real Madrid',
      date: 'April 12, 2024',
    },
    // Add more matches as needed
  ]);
  </script>