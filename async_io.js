
var fs = require('fs');
var path = process.argv[2];

if (path != null) {
	var buffer = fs.readFile(path, 
			function(err, data) {
		if(err) throw err;
		
		var array = data.toString().split('\n');
    	console.log( array.length -1);
	});


}
