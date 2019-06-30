const Todo = function (data) {
  this.name = data.name // UNIQUE
  this.priority = data.priority
  this.section = data.section
  this.project = data.project
  this.assignTo = data.assignTo
  this.complete = data.complete
}

function TodoCollection () {
  let todos = {}
  let count = 0

  let add = function (todo) {
    todos[todo.name] = new Todo(todo)
    count += 1
  }
  let get = function (name) {
    return todo[name]
  }
  let getCount = function () {
    return count
  }
  return {
    add: add,
    get: get,
    getCount: getCount
  }
}

let todos = new TodoCollection()

let priorities = ['Low', 'Medium', 'High', 'Urgent']
let sections = ['Todo', 'Doing', 'Done']
let projects = ['None', 'Frontend', 'Backend', 'Mobile App']
let members = ['None', 'Jakkapan', 'Tissanu']
let completions = ['True', 'False']

var initialMemory = process.memoryUsage().heapUsed

for(let i = 0; i < 1000000; i++ ) {
  todos.add({
    name: 'Todo Name' + i,
    priority: priorities[Math.floor( Math.random() * priorities.length )],
    section: sections[Math.floor( Math.random() * sections.length )],
    project: projects[Math.floor( Math.random() * projects.length )],
    assignTo: members[Math.floor( Math.random() * members.length )],
    complete: completions[Math.floor( Math.random() * completions.length )]
  })
}

var afterMemory = process.memoryUsage().heapUsed

console.log('Used memory: ' + (afterMemory - initialMemory) / 1000000 + ' MB.')
console.log('Todo Count: ' + Number(todos.getCount()).toLocaleString())

