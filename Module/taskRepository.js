var repo = function() {
	var db = {};	//db initialization can be done here

	var get = function(id) {
		console.log('Getting task ' + id);
		return {
			name: 'new task from db'
		}
	};
	var save = function(task) {
		console.log('Saving ' + task.name);
	}
	return {
		// get: function(id) {
		// 	console.log('Getting task ' + id);
		// 	return {
		// 		name: 'new task from db'
		// 	}
		// },
		// save: function(task) {
		// 	console.log('Saving ' + task.name);
		// }
		get : get,	//module reveal pattern
		save: save
	}
}

module.exports =repo();