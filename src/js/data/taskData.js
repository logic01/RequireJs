// taskData.js 
define([], function() {
	"use strict"

	var STORE_NAME = "tasks";

	function save(tasks){
		localStorage.setItem(STORE_NAME, JSON.stringify(tasks));
	}

	function load() {
		var storedTasks = localStorage.getItem(STORE_NAME);
		if(storedTasks){
			return JSON.parse(storedTasks);
		}
		return [];
	}

	function clear(){
		localStorage.removeItem(STORE_NAME);
	}

	return{
		save: save,
		load: load,
		clear: clear
	};
});