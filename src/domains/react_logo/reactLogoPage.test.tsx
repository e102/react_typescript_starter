import React from 'react'
import ReactDOM from 'react-dom'
import { ReactLogoPage } from './reactLogoPage'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<ReactLogoPage />, div)
    ReactDOM.unmountComponentAtNode(div)
})
