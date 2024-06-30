<template>
    <form @submit.prevent="handleSubmit">
      <input 
        type="text" 
        placeholder="I need to..."
        v-model="newTask"
        required
      >
      <button>Add</button>
    </form>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useTaskStore } from '../stores/TaskStore'
  import { useToast } from 'vue-toastification';

  
  const taskStore = useTaskStore();
  const newTask = ref('');
  const toast = useToast();
  
  const handleSubmit = () => {
    if (newTask.value.length > 0) {
      taskStore.addTask({
        title: newTask.value,
        isFav: false,
      })
      toast.success("Task Added");
      newTask.value = "";
    }
  }
  </script>
  