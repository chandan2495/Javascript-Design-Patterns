var Task = require('./task');
// var Task = require('./class');
var Repo = require('./taskRepository');

var task1 = new Task(Repo.get(1));
var task2 = new Task({name: 'Another task'});

task1.complete();
task2.save();