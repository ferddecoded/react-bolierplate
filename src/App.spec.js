import React from 'react'
import { render } from '@testing-library/react'
// adds extra matchers specific to testing dom
import '@testing-library/jest-dom/extend-expect'
// run code after each test that will clean up virtual dom so that there is no reminaing state between trests
// import "@testing-library/react/cleanup-after-each";
import App from './App'

describe('App', () => {
  it('Renders without error', () => {
    render(<App />)
  })
})
