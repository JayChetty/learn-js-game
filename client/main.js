var heapView = require('./views/heap_view');
var stackView = require('./views/stack_view');
console.log('lala', heapView);
window.onload = function(){
  console.log('what is up', heapView);
  heapView.canvas = document.getElementById('heap');
  stackView.linkButton( document.getElementById('runner') );
  heapView.render();
};
