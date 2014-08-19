define(function(require, exports, module) {
  var Engine = require("famous/core/Engine")
  var Surface = require("famous/core/Surface")
  var View = require("famous/core/View")
  var Modifier = require("famous/core/Modifier")
  var GridLayout = require("famous/views/GridLayout")
  var StateModifier = require("famous/modifiers/StateModifier")

  var mainContext = Engine.createContext()

  var grid = new GridLayout({
   dimensions: [2, 1]
  })

  var surfaces = [left(),right()]
  grid.sequenceFrom(surfaces)

  function right(){
    var view = new View()
    var rightMod = new Modifier({
      align: [0.5,0.5],
      origin: [0.5,0.5]
    })
    var rightSurface = new Surface({
      size: [200,200],
      content: 'right',
      properties: {
        color: '#fff',
        backgroundColor: '#FF3300'
      }
    })
    view.add(rightMod).add(rightSurface)
    return view
  }

  function left(){
    var view = new View()
    var leftMod = new Modifier({
      align: [0.5,0.5],
      origin: [0.5,0.5]
    })
    var leftSurface = new Surface({
      size: [200,200],
      content: 'left',
      properties: {
        color: '#fff',
        backgroundColor: '#FF3366'
      }
    })
    view.add(leftMod).add(leftSurface)
    return view
  }
  
  var stateModifier = new StateModifier({
   size: [undefined, undefined]
  })

  mainContext.add(stateModifier).add(grid)
})
