//You have to require a local file by giving its path.
const xyz = require('./people');

console.log(xyz);
console.log(xyz.ages);

//If you have to import some specific variable from the module
//const {variable name} = require('file path')
const { name } = require('./people');
console.log(name);

//If you have to import some global module for e.g. OS Module
const os = require('os');
// console.log(os) to see all the properties of os module
console.log(os.platform(), os.homedir())