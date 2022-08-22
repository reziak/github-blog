import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { PostType } from '../../../../contexts/GithubContext'
import { PostCardContainer } from './styles'

interface PostCardProps {
  post: PostType
}

export const PostCard = ({ post }: PostCardProps) => {
  const formattedDate = formatDistanceToNow(new Date(post.createdAt), {
    // addSuffix: true,
    locale: ptBR,
  })

  return (
    <PostCardContainer href={`/posts/${post.id}`}>
      <header>
        <strong>{post.title}</strong>
        <span>{formattedDate}</span>
      </header>
      <div>
        <p>{post.body.substring(0, 200)}...</p>
      </div>
    </PostCardContainer>
  )
}
