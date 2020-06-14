<template>
  <div>
    <h1>To-do list</h1>
    <form v-on:submit.prevent>
      <el-input type="text" v-model="newItem" clearable/>
      <el-button type="primary" v-on:click="addItem">
        <i class="el-icon-edit"></i>
        追加
      </el-button>
    </form>
    <ul>
      <li v-for="(todo, index) in todos" :key="todo.id" class="text">
        <el-checkbox v-model="todo.isDone">
        <span v-bind:class="{done: todo.isDone}" class="text">
          {{todo.item}}
        </span>
        </el-checkbox>
        <el-button type="danger" v-on:click="deleteItem(index)">
          <i class="el-icon-delete"></i>
          削除
        </el-button>
      </li>
    </ul>
  </div>
</template>

<script>
const STORAGE_V = 'version'
const ver = '1.0'
if (ver !== localStorage.getItem(STORAGE_V)) {
  localStorage.setItem(STORAGE_V, ver)
  window.location.reload(true)
}
const STORAGE_KEY = 'vue-pwa-tutorial'
const todoStorage = {
  fetch: function () {
    const todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    todos.forEach(function (todo, index) {
      todo.id = index
    })
    todoStorage.uid = todos.length
    return todos
  },
  save: function (todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }
}
export default {
  name: 'app',
  data () {
    return {
      todos: todoStorage.fetch(),
      newItem: '',
      visibility: 'all'
    }
  },
  watch: {
    todos: {
      handler: function (todos) {
        todoStorage.save(todos)
      },
      deep: true
    }
  },
  computed: {
  },
  filters: {
    pluralize: function (n) {
      return n === 1 ? 'item' : 'items'
    }
  },
  methods: {
    addItem: function () {
      const value = this.newItem && this.newItem.trim()
      if (!value) {
        return
      }
      this.todos.push({
        id: todoStorage.uid++,
        item: value,
        isDone: false
      })
      this.newItem = ''
    },
    deleteItem: function (todo) {
      this.todos.splice(this.todos.indexOf(todo), 1)
    }
  }
}
</script>

<style scoped>
ul{
  list-style:none;
}
.done{
  text-decoration: line-through;
}
.el-input{
  width: 300px;
  margin: 10px;
}
.text{
  font-size: 20px;
  margin: 10px;
}
.item{
  padding: 18px 0;
}
.span{
  margin: 10px;
}
</style>
