import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import SuccessMessage from '@/components/SuccessMessage.vue'

describe('SuccessMessage.vue', () => {
  it('renders passed message', () => {
    const msg = 'Test Message'
    const wrapper = shallowMount(SuccessMessage, {
      propsData: {
        message: msg
      }
    })
    expect(wrapper.text()).to.include(msg)
  })
})
