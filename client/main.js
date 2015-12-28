var heapView = require('./views/heap_view');
console.log('lala', heapView);
window.onload = function(){
  console.log('what is up', heapView);
  heapView.canvas = document.getElementById('heap');
  heapView.addItem( { height:10, width:10, x:20, y:20 } );
  heapView.addItem( { height:10, width:10, x:70, y:20 } );
  heapView.render();
};
