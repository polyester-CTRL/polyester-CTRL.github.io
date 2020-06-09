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
function storageAvailable (type) {
  let storage
  try {
    storage = window[type]
    const x = '__storage_test__'
    storage.setItem(x, x)
    storage.removeItem(x)
    return true
  } catch (e) {
    return e instanceof DOMException && (
    // everything except Firefox
      e.code === 22 ||
    // Firefox
    e.code === 1014 ||
    // test name field too, because code might not be present
    // everything except Firefox
    e.name === 'QuotaExceededError' ||
    // Firefox
    e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
    // acknowledge QuotaExceededError only if there's something already stored
    (storage && storage.length !== 0)
  }
}
let ok = 'please'
if (storageAvailable('localStorage')) {
  // やったあ! ローカルストレージをちゃんと利用できます
  ok = 'ローカルストレージ'
} else {
  // 残念、ローカルストレージは利用できません
  ok = 'ローカルストレージ'
}
export default {
  data () {
    return {
      newItem: '',
      todos: [],
      status: ok
    }
  },
  methods: {
    addItem: function () {
      if (this.newItem === '') {
        return
      }
      const todo = {
        item: this.newItem,
        isDone: false
      }
      this.todos.push(todo)
      localStorage.toDo = todo
      this.newItem = ''
    },
    deleteItem: function (index) {
      this.todos.splice(index, 1)
      localStorage.removeItem(index, 1)
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
