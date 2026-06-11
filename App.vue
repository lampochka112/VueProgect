<template>
  <v-app>
    <v-app-bar color="primary" prominent>
      <v-app-bar-nav-icon variant="text" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Мои заметки</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon="mdi-theme-light-dark" @click="toggleTheme"></v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary>
      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-notebook-edit" title="Заметки" to="/" exact></v-list-item>
        <v-list-item prepend-icon="mdi-information" title="О приложении" to="/about"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import { useTheme } from 'vuetify'

const drawer = ref(false)
const theme = useTheme()

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>
