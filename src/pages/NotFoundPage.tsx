import { Link } from 'react-router'

export default function NotFoundPage() {
  return (
    <div className="page">
      <h1>404 — Page not found</h1>
      <p>Oops! This page doesn't exist.</p>
      <Link to="/posts">Back to all posts</Link>
    </div>
  )
}