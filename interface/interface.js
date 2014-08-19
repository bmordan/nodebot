define(function(require, exports, module) {
    // import dependencies
    var Engine = require('famous/core/Engine')
    var Surface = require('famous/core/Surface')
    var View = require('famous/core/View')
    var Modifier = require('famous/core/Modifier')
    var Transform = require('famous/core/Transform')
    var ImageSurface = require('famous/surfaces/ImageSurface')
    var SequentialLayout = require('famous/views/SequentialLayout')

    // create the main context
    var mainContext = Engine.createContext()
    var left = function _createLeft(){
      var view = new View()
      var leftMod = new Modifier({
        align: [0.5,0.5],
        origin: [0.5,0.5]
      })
      var leftSurface = new Surface({
        size: [undefined,300],
        content: 'left',
        properties: {
          backgroundColor: '#FF3300'
        }
      })
      view.add(leftMod).add(leftSurface)
      return view
    }
    var right = function _createRight(){
      var view = new View()
      var rightMod = new Modifier({
        align: [0.5,0.5],
        origin: [0.5,0.5]
      })
      var rightSurface = new Surface({
        size: [undefined,200],
        content: 'right',
        properties: {
          backgroundColor: '#FF3300'
        }
      })
      view.add(rightMod).add(rightSurface)
      return view
    }
    var controls = [left(),right()]
    var sequentialLayout = new SequentialLayout({
     direction: 0
    })
    sequentialLayout.sequenceFrom(controls)
    mainContext.add(sequentialLayout)
});
