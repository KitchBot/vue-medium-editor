import { mount } from '@vue/test-utils'
import VueMediumEditor from '../src/index.js'

import Vue from 'vue'

describe('VueMediumEditorField', () => {
  it('happy', async () => {
    var props = {
      value: '<h1>Foo</h1><p>bar</p>',
      options: {}
    }

    var wrapper = make_component({ props })

    expect(wrapper.html().includes('bar')).true()

    //wrapper.find('textarea').setValue('foo <b>bar</b>')
    //await Vue.nextTick()

    //console.log('AAA', wrapper.find('#field-0-html').html())
    //expect(wrapper.find('#field-0-html').html()).contains('foo <b>bar</b>')
  })
})

function make_component(config) {
  const wrapper = mount(VueMediumEditor, {
    Vue,
    propsData: config.props
  })

  expect(wrapper.isVueInstance()).true()

  Fs.writeFileSync('./test/html/index.html', wrapper.html())

  return wrapper
}
