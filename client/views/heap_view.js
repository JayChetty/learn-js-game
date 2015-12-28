var heap = require('../models/heap');
var heapItemFactory = require('../models/heap_item_factory');

module.exports = {
  canvas: null,
  model:heap,
  placeItems:function(){
    var ctx = this.canvas.getContext('2d');
    this.model.items.forEach(function(item){
      ctx.rect( item.x, item.y, item.width, item.height );
    })
    ctx.stroke();
  },

  addItem:function(spec){
    var item = heapItemFactory(spec);
    heap.addItem(item);
  },

  render:function(){
    var ctx = this.canvas.getContext('2d');
    this.placeItems();
    window.requestAnimationFrame(this.render.bind(this));
  }
}
