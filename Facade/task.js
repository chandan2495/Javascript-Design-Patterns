var Task = function(data) {
	this.name = data.name;
	this.priority = data.priority;
	this.project = data.project;
	this.user = data.user;
	this.completed = data.completed;
}

var TaskService = function() {
    return {
        complete: function(task) {
            task.completed = true;
            console.log('completing task: ' + task.name);
        },
        setCompleteDate: function(task) {
            task.completeDate = new Date();
            console.log(task.name + ' completed on ' + task.completeDate);
        },
        notifyCompletion: function(task) {
            console.log('notifyCompletion');
        },
        save: function(task) {
            console.log('saving task: ' + task.name);
        }
    }
}();


// Facade pattern code
var TaskServiceWrapper = function() {
    var completeAndNotify = function() {
        TaskService.complete(myTask);
        if (myTask.completed == true) {
            TaskService.setCompleteDate(myTask);
            TaskService.notifyCompletion(myTask);
            TaskService.save(myTask);
        }
    }
    
    return {
        completeAndNotify: completeAndNotify
    }
}();


// ends here


var myTask = new Task({
   name: 'MyTask',
   priority: 1,
   project: 'Courses',
   user: 'Jon',
   completed: false
});

TaskServiceWrapper.completeAndNotify(myTask);