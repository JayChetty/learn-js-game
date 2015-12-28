var heapView = require('./views/heap_view');
var stackView = require('./views/stack_view');
console.log('lala', heapView);
window.onload = function(){
  console.log('what is up', heapView);
  var editor = CodeMirror.fromTextArea(document.getElementById("stack-input"), {
    mode: "javascript",
    theme: "default",
    value: "function(){return 'anything'}",
  });
  heapView.canvas = document.getElementById('heap');
  stackView.linkButton( document.getElementById('runner') );
  stackView.editor = editor;
  heapView.render();
};
