var heap = require('../models/heap')
var heapItemFactory = require('../models/heap_item_factory');
module.exports = {
  heap: heap,
  stackView:null,
  linkButton: function(button){
    button.onclick = this.run.bind(this);
  },
  run:function(){
    console.log('running')
    var item = heapItemFactory({ height:10, width:10, x:70, y:20 });
    this.heap.addItem(item);
  }
}
