var my= require('./statement.js');

var invoices = require('./invoices.json');
var plays = require('./plays.json');

console.log(my.statement(invoices[0],plays))