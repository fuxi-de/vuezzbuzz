import { expect } from 'chai'
import Button from '@/components/Button.vue'

describe('Button.vue', () => {
  it('sets correct button styles', () => {
    const localThis = { look: 'full' }
    const fullClassString = 'flex-shrink-0 bg-immowelt-500 hover:bg-immowelt-400 border-immowelt-500 hover:border-immowelt-400 text-sm border-4 text-white py-1 px-2 rounded'
    expect(Button.computed.classString.call(localThis)).to.be.equal(fullClassString)
  })
})
