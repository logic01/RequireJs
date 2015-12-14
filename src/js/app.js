// app.js
define( function(require, exports, module){
	var $ = require("jquery");
	var tasks = require("tasks");

	function _addTask(){
		tasks.add();
	}

	function _deleteAlltasks() {
		 tasks.clear();
	}

	function _saveChanges()	{
		tasks.save();
	}
	function _cancelChanges(){
		tasks.cancel();
	}

	function _deleteTask(clickEvent){
		tasks.remove(clickEvent.target);
	}

	function _registerEventHandlers(){
		$("#new-task-button").on("click", _addTask);
		$("#delete-all-button").on("click", _deleteAlltasks);
		$("#save-button").on("click", _saveChanges);
		$("#cancel-button").on("click", _cancelChanges);
		$("#task-list").on("click", ".delete-button", _deleteTask);
	}
	
	// makes the method public
	exports.init = function()
		{
			_registerEventHandlers();
			tasks.render();
		}
});
