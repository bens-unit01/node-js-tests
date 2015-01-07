
var fs = require('fs');
var path = process.argv[2];
// var buffer =
// fs.readFileSync('c:\\Users\\user\\Documents\\Raouf\\ws-javascript\\app_01\\hello-world-server.js');
if (path != null) {
	var buffer = fs.readFileSync(path);
	var array = buffer.toString().split('\n');
	var counter = 0;

	for (var i = 0; i < array.length; i++) {

		if (array[i] == '\n')
			counter++;
	//	console.log('-->' + array[i] + '\n');
	}

	console.log( array.length -1);

}
