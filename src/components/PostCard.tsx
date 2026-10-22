import { Link } from 'react-router'
import type { Post } from '../data/posts'
import LikeButton from './LikeButton'
import Tag from './ui/Tag'

type PostCardProps = {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="card">
      <Tag label={post.tag} />
      <h3>{post.title}</h3>
      <p className="post-date">{post.date}</p>
      <p>{post.excerpt}</p>
      <div className="card-actions">
        <Link to={`/posts/${post.id}`}>Read more</Link>
        <LikeButton />
      </div>
    </article>
  )
}