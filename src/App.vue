<script setup>
  import TaskDetails from './components/TaskDetails.vue'
  import TaskForm from './components/TaskForm.vue'
  import { useTaskStore } from './stores/TaskStore'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import { ref } from 'vue'
  import { storeToRefs } from 'pinia'
  
  const taskStore = useTaskStore();
  const filter = ref('all');
  taskStore.getTasks();
  const { tasks, loading, favs, totalCount, favCount } = storeToRefs(taskStore);
  
</script>

<template>
  <main>

    <!-- heading -->
    <header>
      <img src="https://pinia.vuejs.org/logo.svg" alt="pinia logo">
      <h1>Pinia Task Manager</h1>
    </header>

    <!-- new task form -->
     <div class="new-task-form">
      <TaskForm />
     </div>

    <!-- filter -->
     <nav class="filter">
      <button class="button1" @click="filter = 'all'">
        <font-awesome-icon icon="clipboard" class="custom-icon-clip"/>
        All Tasks
      </button>
      <button class="button2" @click="filter = 'favs'">       
        <font-awesome-icon icon="heart" class="custom-icon-heart" />
        Fav Tasks
      </button>
     </nav>

     <!-- loading -->
      <div class="loading" v-if="loading">
        Loading tasks
      </div>

    <!-- task list -->
    <div class="task-list" v-if="filter === 'all'">
      <p>You have a total of  {{ totalCount }} things left to do.</p>
      <div v-for="task in tasks" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>

    <!-- favorits list -->
    <div class="task-list" v-if="filter === 'favs'">
      <p>You have {{favCount}} favorite things left to do</p>
      <div v-for="task in favs" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>

  </main>
</template>
