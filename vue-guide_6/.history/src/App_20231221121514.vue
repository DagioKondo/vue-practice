<script setup lang="ts">
import { provide } from "vue";
import { todos } from "./useTodo";

provide('todos', todos)
</script>

<template></template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
