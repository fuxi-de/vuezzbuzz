import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import FizzBuzz from '@/components/FizzBuzz.vue'

const wrapper = mount(FizzBuzz)
const dataObject = wrapper.vm.$data
const inputField = wrapper.find('[data-test="input"]')
const submitButton = wrapper.find('[data-test="submit"]')

function submitForm (input) {
  inputField.element.value = input
  inputField.trigger('input')
  submitButton.trigger('click')
}

describe('FizzBuzz.vue', () => {
  function fizzBuzzTest (arr, expected) {
    arr.forEach((num) => {
      submitForm(num)
      expect(dataObject.output).to.be.equal(expected)
    })
  }
  it('returns fizz for multiples of 3', () => {
    fizzBuzzTest([3, 9, 18], 'fizz')
  })
  it('returns buzz for multiples of 5', () => {
    fizzBuzzTest([5, 10, 25], 'buzz')
  })
  it('returns fizzbuzz for multiples of 3 and 5', () => {
    fizzBuzzTest([15, 30, 60], 'fizzbuzz')
  })
  it('returns the input for numbers not matching the above', () => {
    fizzBuzzTest([1], '1')
  })
  it('renders error message for negative input', () => {
    submitForm(0)
    expect(dataObject.error).to.be.equal('Deine Eingabe muss eine Zahl sein die größer als 0 ist!')
  })
})
