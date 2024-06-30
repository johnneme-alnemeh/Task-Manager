<template>
  <div class="task">
    <h3>{{ task.title }}</h3>
    <div class="icons">
      <i 
        class="material-icons delete-icon" 
        @click="taskStore.deleteTask(task.id)">
        delete
      </i>
      <i 
        class="material-icons favorite-icon"
        :class="{active: task.isFav}" 
        @click="taskStore.toggleFav(task.id)">
        favorite
      </i>
    </div>
  </div>
</template>

<script setup>
import { useTaskStore } from '../stores/TaskStore'

// Define props directly using the defineProps function
const props = defineProps({
  task: {
    type: Object,
    required: true,
  }
})

// Use the task store
const taskStore = useTaskStore()
</script>