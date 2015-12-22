require.config({
	paths :{
		jquery : "jquery-2.1.4.min"
	}
});

require(["app"], function(app) {
	app.init();
});