<template>
  <v-container>
    <v-row class="mb-4">
      <v-col>
        <v-text-field
          v-model="newNoteText"
          label="Новая заметка"
          variant="outlined"
          hide-details
          @keyup.enter="addNote"
        >
          <template v-slot:append>
            <v-btn icon="mdi-plus" variant="text" @click="addNote" :disabled="!newNoteText.trim()"></v-btn>
          </template>
        </v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="6" md="4" v-for="(note, index) in notes" :key="index">
        <v-card :color="note.important ? 'amber-lighten-4' : undefined" elevation="2" class="mx-auto">
          <v-card-item>
            <template v-slot:prepend>
              <v-icon :color="note.important ? 'warning' : 'primary'">
                {{ note.important ? 'mdi-star' : 'mdi-star-outline' }}
              </v-icon>
            </template>
            <v-card-title>{{ note.text }}</v-card-title>
            <template v-slot:append>
              <v-btn icon="mdi-star-outline" variant="text" size="small" @click="toggleImportant(index)"></v-btn>
              <v-btn icon="mdi-delete" variant="text" size="small" color="error" @click="deleteNote(index)"></v-btn>
            </template>
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>

    <v-row v-if="notes.length === 0" class="text-center mt-10">
      <v-col>
        <v-icon size="64" color="grey-lighten-1">mdi-note-off</v-icon>
        <p class="text-grey">Заметок пока нет. Добавьте первую!</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, reactive } from 'vue'

const newNoteText = ref('')
const notes = reactive([])

function addNote() {
  const text = newNoteText.value.trim()
  if (!text) return
  notes.push({ text, important: false })
  newNoteText.value = ''
}

function deleteNote(index) {
  notes.splice(index, 1)
}

function toggleImportant(index) {
  notes[index].important = !notes[index].important
}
</script>
