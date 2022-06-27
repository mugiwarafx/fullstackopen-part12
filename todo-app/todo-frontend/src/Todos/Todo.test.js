import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'

import Todo from './Todo'

const todos = [
  {
    _id: '62b9837a9f847e44ea81a7a6',
    text: 'Write code',
    done: true,
  },
  {
    _id: '62b9bed62fe09b81c473c3f4',
    text: 'Something else',
    done: false,
    __v: 0,
  },
]

let container = null
beforeEach(() => {
  // configurar un elemento del DOM como objetivo del renderizado
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  // limpieza al salir
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

it('renders todo text properly', () => {
  console.log(todos[0])
  act(() => {
    render(<Todo todo={todos[0]} />, container)
  })
  expect(container.textContent).toBe('Write code')
})
