import React from 'react'
import { screen } from '@testing-library/react'

import { renderWithRedux } from '../../test-utils'
import { getIsAuthenticated } from '../../auth0-utils'
import Footer from './Footer'

jest.mock('../../auth0-utils')

describe('when user is authenticated', () => {
  it('displays "Contact", "Legal" when authenticated', () => {
    getIsAuthenticated.mockImplementation(() => true)

    renderWithRedux(<Footer location={{ pathname: '/' }}/>, {
      initialState: {
        user: {
          id: 2
        }
      }
    })
    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(2)
    expect(buttons[0]).toHaveTextContent('Contact')
    expect(buttons[1]).toHaveTextContent('Legal')
  })
})
