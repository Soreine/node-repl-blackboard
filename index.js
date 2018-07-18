console.log('Preloaded library:');
console.log('Immutable (alias Im)');
console.log('Slate');
console.log('hyperprint');
console.log('hyperscript');
console.log('fs');
console.log('path');

var repl = require("repl");
var r = repl.start("node> ");

r.context.Immutable = require('immutable');
r.context.Im = r.context.Immutable;
r.context.Path = require('path');
r.context.Slate = require('slate');
r.context.hyperprint = require('slate-hyperprint').default;
r.context.hyperscript = require('slate-hyperscript').default;
r.context.fs = require('fs');
