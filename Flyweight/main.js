var Task = function(data) {
    this.flyweight = FlyweightFactory.get(data.priority, data.project, data.user, data.completed);
	this.name = data.name;
// 	this.priority = data.priority;
// 	this.project = data.project;
// 	this.user = data.user;
// 	this.completed = data.completed;
}

var Flyweight = function(priority, project, user, completed) {
    this.priority = priority;
	this.project = project;
	this.user = user;
	this.completed = completed;
};


var FlyweightFactory = function() {
   var flyweight = {}; 
   
   var get = function(priority, project, user, completed) {
     if (!flyweight[priority + project + user + completed]) {
         flyweight[priority + project + user + completed] = new Flyweight(priority, project, user, completed);
     }
     return flyweight[priority + project + user + completed]
   };
   
   var getCount = function() {
     var count = 0;
     for(var f in flyweight) 
        count++;
     return count;
   };
   return {
     get: get,
     getCount: getCount
   };
}()


function TaskCollection() {
    var tasks = {};
    var count = 0;
    var add = function(data) {
        tasks[data.name] = new Task(data);
        count++;
    };
    var getCount = function() {
        return count;
    };
    var get = function(name) {
        return  tasks[name];
    };
    return {
      add: add,
      get: get,
      getCount: getCount
    };
}

var tasks = new TaskCollection();

var projects = ['none', 'courses', 'training', 'project'];
var priorities = [1,2,3,4,5];
var users = ['J','E','A' , 'N'];
var completed = [true, false];

var initialMemory = process.memoryUsage().heapUsed; // memory used

for (var i = 0; i < 100000; i++) {
    tasks.add({
       name: 'task '+ i,
       priority: priorities[Math.floor((Math.random()*5))],
       project: projects[Math.floor((Math.random()*4))],
       user: users[Math.floor((Math.random()*4))],
       completed: completed[Math.floor((Math.random()*2))]
    });
}

var afterMemory = process.memoryUsage().heapUsed;

console.log('used memory '+ (afterMemory - initialMemory) / 1000000);

console.log("flyweight " + FlyweightFactory.getCount());