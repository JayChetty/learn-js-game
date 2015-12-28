var heap = require('../models/heap')
var heapItemFactory = require('../models/heap_item_factory');
module.exports = {
  heap: heap,
  stackView:null,
  editor:null,
  linkButton: function(button){
    button.onclick = this.run.bind(this);
  },
  run:function(){
    console.log('running')

    console.log('editor', this.editor);
    window.editor = this.editor;
    eval(editor.getValue());
    console.log('a', a)
    var item = heapItemFactory(a);
    this.heap.addItem(item);
  }
}
