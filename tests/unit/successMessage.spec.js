import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import SuccessMessage from '@/components/SuccessMessage.vue'

describe('SuccessMessage.vue', () => {
  it('renders message that is passed in', () => {
    const msg = 'Test Message'
    const wrapper = shallowMount(SuccessMessage, {
      propsData: {
        message: msg
      }
    })
    expect(wrapper.text()).to.include(msg)
  })
})
