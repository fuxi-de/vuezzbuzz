import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Button from '@/components/Button.vue'

const label = 'Testlabel'
const testAttr = 'test-attr'
const look = 'full'
const fullClassString = 'flex-shrink-0 bg-immowelt-500 hover:bg-immowelt-400 border-immowelt-500 hover:border-immowelt-400 text-sm border-4 text-white py-1 px-2 rounded'
const wrapper = shallowMount(Button, {
  propsData: {
    label: label,
    dataTest: testAttr,
    look: look
  }
})

describe('Button.vue', () => {
  it('sets passed button style in computed property', () => {
    const localThis = { look: 'full' }
    expect(Button.computed.classString.call(localThis)).to.be.equal(fullClassString)
  })
  it('puts the computed classnames in the dom', () => {
    expect(wrapper.attributes('class')).to.be.equal(fullClassString)
  })
  it('renders the passed label', () => {
    expect(wrapper.text()).to.include(label)
  })
  it('sets the passed atribute for testing', () => {
    expect(wrapper.attributes('data-test')).to.be.equal(testAttr)
  })
})
