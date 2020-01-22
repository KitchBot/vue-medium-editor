const Fs = require('fs')
global.Fs = Fs

require('jsdom-global')('', { pretendToBeVisual: true })

//global.expect = require('expect')

global.expect = require('@hapi/code').expect

window.Date = Date

const el = document.createElement('div')
el.setAttribute('data-app', true)
document.body.appendChild(el)

global.dd = function(x) {
  return JSON.parse(JSON.stringify(x))
}

global.voxgig = {}
