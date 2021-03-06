const todoList = {
  data() {
    return {
      newTodo: '',
      todoList: [
        { todo: 'Some homework', completed: false }
      ]
    }
  },
  methods: {
    addTask() {
      this.todoList.push({todo: this.newTodo, completed: false});
      this.newTodo = '';
    }
  }
}

const app = Vue.createApp(todoList);

app.component('todo-item', {
  props: ['todo'],
  template: `<li><b>Task:</b> {{ todo.todo }} 
  - <b>Completed:</b> {{ todo.completed }} 
  <input type="checkbox" v-model="todo.completed"></li>`
});

app.mount('#todo-task')

