import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import SuccessMessage from '@/components/SuccessMessage.vue'

const msg = 'Test Message'
const input = 1
const wrapper = shallowMount(SuccessMessage, {
  propsData: {
    message: msg,
    input: input
  }
})

describe('SuccessMessage.vue', () => {
  it('renders message that is passed in', () => {
    expect(wrapper.text()).to.include(msg)
  })
  it('renders the passed input value', () => {
    expect(wrapper.text()).to.include(input)
  })
})
