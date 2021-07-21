Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.class }} - A{{ todo.id + 1 }}: {{ todo.assignment }}</li>'
  })
  
  var app = new Vue({
    el: '#todo-app',
    data: {
      assignmentsToDo: [
        { id: 0, class: "SIT120", assignment: 'Project Idea' },
        { id: 1, class: "SIT120", assignment: 'Portfolio' },
        { id: 2, class: "SIT120", assignment: 'Final Project' }
      ]
    }
  })