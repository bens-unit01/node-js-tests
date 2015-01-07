

console.log('app  started ...');
//console.log(process.argv);

var sum = 0;

//console.log("lenght: " + process.argv.length);
for(var i= 0; i < process.argv.length ; i++){
console.log(" " + process.argv[i]);
sum += Number(process.argv[i]);

}

console.log(sum);
