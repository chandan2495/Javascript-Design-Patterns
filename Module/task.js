var Repo = require('./taskRepository')

var Task = function(data) {
	this.name = data.name;
	this.completed = false;

	/*functions inside an function will get duplicated for each new object
	 *to avoid this we are defining functions in prototype so that each 
	 *new object can refer to common function
	 */
	// this.complete = function() {
	// 	console.log('completing task: ' + this.name);
	// 	this.completed = true;
	// }

	// this.save = function() {
	// 	console.log('saving task: ' + this.name);
	// }
}

Task.prototype.complete = function() {
	console.log('completing task: ' + this.name);
	this.completed = true;
}

Task.prototype.save = function() {
	console.log('saving task: ' + this.name);
	Repo.save(this);
}

module.exports = Task;