<script setup lang="ts">
import { provide } from "vue";
import { todos, todoKey } from "./useTodo";
import TodoList from "./components/TodoList.vue";

provide(todoKey)
// provide('todos', todos)
// provide('addTodo', addTodo)
</script>

<template>
  <TodoList />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
