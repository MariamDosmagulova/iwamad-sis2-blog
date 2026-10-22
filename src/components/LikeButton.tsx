import { useState } from 'react'
import Button from './ui/Button'

export default function LikeButton() {
  const [likes, setLikes] = useState<number>(0)
  const [liked, setLiked] = useState<boolean>(false)

  function handleClick() {
    if (liked) {
      setLikes(likes - 1)
      setLiked(false)
    } else {
      setLikes(likes + 1)
      setLiked(true)
    }
  }

  return (
    <Button variant={liked ? 'primary' : 'secondary'} onClick={handleClick}>
      {liked ? '♥ Liked' : '♡ Like'} ({likes})
    </Button>
  )
}