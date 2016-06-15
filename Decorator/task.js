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

var urgentTask = new Task('Urgent task');
urgentTask.notify = function(){
    console.log('notify ');
};
urgentTask.complete();
urgentTask.save = function() {
    this.notify();
    Task.prototype.save.apply(this);
};

urgentTask.save();