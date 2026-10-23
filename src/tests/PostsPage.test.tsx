import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import PostsPage from '../pages/PostsPage'
import { posts } from '../data/posts'

test('posts page shows one card per post', () => {
  render(
    <MemoryRouter>
      <PostsPage />
    </MemoryRouter>,
  )
  expect(screen.getAllByRole('article')).toHaveLength(posts.length)
})