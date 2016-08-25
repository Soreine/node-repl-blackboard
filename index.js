console.log('Preloaded library:');
console.log('lodash');
console.log('Q');
console.log('Immutable');
console.log('Path');
console.log('Reflux');
console.log('Slate');

var repl = require("repl");
var r = repl.start("node> ");

r.context.lodash = require('lodash');
r.context.Q = require('q');
r.context.Immutable = require('immutable');
r.context.Path = require('path');
r.context.Reflux = require('reflux');
r.context.Slate = require('slate');
