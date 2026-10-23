import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import LikeButton from '../components/LikeButton'

test('like button changes when it is clicked', async () => {
  render(<LikeButton />)
  const button = screen.getByRole('button', { name: '♡ Like (0)' })

  await userEvent.click(button)
  expect(button).toHaveTextContent('♥ Liked (1)')

  await userEvent.click(button)
  expect(button).toHaveTextContent('♡ Like (0)')
})