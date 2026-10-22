import { Link, useParams } from 'react-router'
import LikeButton from '../components/LikeButton'
import Tag from '../components/ui/Tag'
import { posts } from '../data/posts'

export default function PostPage() {
  const { id } = useParams()
  const post = posts.find((p) => p.id === Number(id))

  if (!post) {
    return (
      <div className="page">
        <h1>Post not found</h1>
        <p>There is no post with id {id}.</p>
        <Link to="/posts">← All posts</Link>
      </div>
    )
  }

  return (
    <article className="post">
      <Link to="/posts">← All posts</Link>
      <h1>{post.title}</h1>
      <p className="post-date">{post.date}</p>
      <Tag label={post.tag} />
      <p>{post.body}</p>
      <LikeButton key={post.id} />
    </article>
  )
}