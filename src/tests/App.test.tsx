import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router'
import App from '../App'

test('protected page shows sign in when signed out', async () => {
  render(
    <MemoryRouter initialEntries={['/account']}>
      <App />
    </MemoryRouter>,
  )
  expect(screen.getByRole('heading', { name: 'Sign in' })).toBeInTheDocument()

  await userEvent.click(screen.getByRole('button', { name: 'Sign in' }))
  expect(screen.getByRole('heading', { name: 'My account' })).toBeInTheDocument()
})

test('unknown url shows the 404 page', () => {
  render(
    <MemoryRouter initialEntries={['/banana']}>
      <App />
    </MemoryRouter>,
  )
  expect(screen.getByRole('heading', { name: '404 — Page not found' })).toBeInTheDocument()
})

test('post that does not exist shows a message', () => {
  render(
    <MemoryRouter initialEntries={['/posts/999']}>
      <App />
    </MemoryRouter>,
  )
  expect(screen.getByRole('heading', { name: 'Post not found' })).toBeInTheDocument()
})