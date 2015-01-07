
var fs = require('fs');
var path = process.argv[2];
var extension = process.argv[3];
//console.log("path: " + path + " extension: " + extension);

fs.readdir(path, function(err, files) {
	if(err) throw err;
	for(var i=0; i < files.length; i++){
		//console.log(files[i] + '\n');
		var current = files[i].split('.');
	    if(current[current.length - 1] == extension && current.length >= 2){
	      console.log(files[i] );	
	    }	
		
	}
});


/* solution officielle 
var fs = require('fs')
var path = require('path')

fs.readdir(process.argv[2], function (err, list) {
  list.forEach(function (file) {
    if (path.extname(file) === '.' + process.argv[3])
      console.log(file)
  })
})

*/