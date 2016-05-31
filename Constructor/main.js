// var Task = require('./task');
var Task = require('./class');
var task1 = new Task('New task');
var task2 = new Task('Another task');

task1.complete();
task2.save();