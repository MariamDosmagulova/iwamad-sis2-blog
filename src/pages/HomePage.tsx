import { Link } from 'react-router'

export default function HomePage() {
  return (
    <div className="page">
      <h1>Welcome to my blog</h1>
      <p>I am Mariam, a student. Here I write short notes about what I learn in web development.</p>
      <p>
        <Link to="/posts">Read all posts →</Link>
      </p>
    </div>
  )
}