//EX2015+ 전

var sayNode = function() {
    console.log('Node');
};

var es = 'ES';
var oldObject = {
    sayJS: function() {
        console.log('JS');
    },
    sayNode: sayNode,
};

oldObject[es + 6] = `Fantastic`;
oldObject.sayNode();            // Node
oldObject.sayJS();              // JS
console.log(oldObject.ES6);     // Fantastic


//EX2015+ 후

const newObject = {
    sayJS() {
        console.log('JS');
    },
    sayNode,
    [es + 6]: `Fantastic`,
};

newObject.sayNode();
newObject.sayJS();
console.log(newObject.ES6);
