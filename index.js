console.log('Preloaded library:');
console.log('lodash');
console.log('Q');
console.log('immutable');
console.log('Path');
console.log('Reflux');

var repl = require("repl");
var r = repl.start("node> ");

r.context.lodash = require('lodash');
r.context.Q = require('q');
r.context.immutable = require('immutable');
r.context.Path = require('path');
r.context.Reflux = require('reflux');
