import { ref } from 'vue'

type Todo = {
  id: number,
  title: string
}

const defaultTodos = [{ id: 0, title: 'first' }, { id: 1, titile: 'second' }]
const todos = ref<Todo[]>(defaultTodos)