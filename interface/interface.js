define(function(require, exports, module) {
    // import dependencies
    var Engine = require('famous/core/Engine')
    var Surface = require('famous/core/Surface')
    var Modifier = require('famous/core/Modifier')
    var Transform = require('famous/core/Transform')
    var ImageSurface = require('famous/surfaces/ImageSurface')
    var GridLayout = require('famous/views/GridLayout')

    // create the main context
    var mainContext = Engine.createContext()
    var grid = new GridLayout({
      dimensions: [2,1]
    })
    
    var left = new Surface({
      content: 'Left',
      size: [200,200],
      properties: {
        backgroundColor: '#FF3300'
      }
    })
    
    var right = new Surface({
      content: 'right',
      size: [200,200],
      properties: {
        backgroundColor: '#FF3300'
      }
    })
    
    var controls = [left,right]
    grid.sequenceFrom(controls)
    
    mainContext.add(grid)
});
