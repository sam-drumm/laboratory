import React from 'react'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithRedux } from '../../test-utils'
import { getIsAuthenticated, getLogoutFn } from '../../auth0-utils'
import Header from './Header'

jest.mock('../../auth0-utils')

describe('when user is authenticated', () => {
  it('displays "Co_lab", "Find Projects", "Pitch an Idea", "Favorites", "Boris\'s Co_Lab" and "Log out" when authenticated', () => {
    getIsAuthenticated.mockImplementation(() => true)

    renderWithRedux(<Header location={{ pathname: '/' }}/>, {
      initialState: {
        user: {
          id: 2,
          firstName: 'Boris'
        }
      }
    })
    const buttons = screen.getAllByRole('button')
    const links = screen.getAllByRole('link')
    const headings = screen.getAllByRole('heading')
    expect(buttons).toHaveLength(2)
    expect(buttons[0]).toHaveTextContent('Boris\'s Co_Lab')
    expect(buttons[1]).toHaveTextContent('Log out')
    expect(links).toHaveLength(3)
    expect(links[0]).toHaveTextContent('Find Projects')
    expect(links[1]).toHaveTextContent('Pitch an Idea')
    expect(links[2]).toHaveTextContent('Favorites')
    expect(headings).toHaveLength(1)
    expect(headings[0]).toHaveTextContent('Co_lab')
  })
})

describe('Log Out link', () => {
  it('calls logOut helper on click', () => {
    const logout = jest.fn()
    getIsAuthenticated.mockImplementation(() => true)
    getLogoutFn.mockImplementation(() => logout)

    renderWithRedux(<Header location={{ pathname: '/' }}/>, {
      initialState: {
        user: {
          id: 4,
          firstName: 'Joe'
        }
      }
    })
    const logOutLink = screen.getByRole('button', { name: 'Log out' })
    userEvent.click(logOutLink)
    expect(logout).toHaveBeenCalled()
  })
})
