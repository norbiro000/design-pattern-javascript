const Todo = function (data) {
  this.name = data.name
  this.flyweight = TodoFlyweightFactory.get(data.priority, data.section, data.project, data.assignTo, data.complete)
  // this.priority = data.priority
  // this.section = data.section
  // this.project = data.project
  // this.assignTo = data.assignTo
  // this.complete = data.complete
}

Todo.prototype.getPriority = function () {
  return this.flyweight.priority
}

const TodoFlyweight = function (priority, section, project, assignTo, complete) {
  this.priority = priority
  this.section = section
  this.project = project
  this.assignTo = assignTo
  this.complete = complete
}

const TodoFlyweightFactory = function (priority, section, project, assignTo, complete){
  let todos = {}
  let count = 0
  
  function get (priority, section, project, assignTo, complete) {
    if(!todos[priority + section + project + assignTo + complete]) {
      todos[priority + section + project + assignTo + complete] = new TodoFlyweight(priority, section, project, assignTo, complete)
      count++
    }
    return todos[priority + section + project + assignTo + complete]
  }

  function getFlyweightCount () {
    return count
  }

  return {
    get: get,
    getFlyweightCount: getFlyweightCount
  }
}()

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
console.log('Todo Flyweight Count: ' + TodoFlyweightFactory.getFlyweightCount())