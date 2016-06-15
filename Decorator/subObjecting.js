var Task = function(name) {
	this.name = name;
	this.completed = false;
}

Task.prototype.complete = function() {
	console.log('completing task: ' + this.name);
	this.completed = true;
}

Task.prototype.save = function() {
	console.log('saving task: ' + this.name);
}

var myTask = new Task('legacy task');
myTask.complete();
myTask.save();

var UrgentTask = function(name, priority) {
  Task.call(this, name);
  this.priority = priority;
};

UrgentTask.prototype = Object.create(Task.prototype);

var ut = new UrgentTask('This is urgent', 1);

ut.complete();
console.log(ut);