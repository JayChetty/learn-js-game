/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var heapView = __webpack_require__(1);
	var stackView = __webpack_require__(4);
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


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var heap = __webpack_require__(2);
	var heapItemFactory = __webpack_require__(3);

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


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = {
	  items:[],
	  addItem:function(item){
	    this.items.push(item);
	  }
	}


/***/ },
/* 3 */
/***/ function(module, exports) {

	var heapItemFactory = function(spec){
	  var out = {};
	  out.width = spec.width;
	  out.height = spec.height;
	  out.x = spec.x;
	  out.y = spec.y;
	  return out;
	}

	module.exports = heapItemFactory;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var heap = __webpack_require__(2)
	var heapItemFactory = __webpack_require__(3);
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


/***/ }
/******/ ]);