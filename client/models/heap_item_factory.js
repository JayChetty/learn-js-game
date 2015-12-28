var heapItemFactory = function(spec){
  var out = {};
  out.width = spec.width;
  out.height = spec.height;
  out.x = spec.x;
  out.y = spec.y;
  return out;
}

module.exports = heapItemFactory;
