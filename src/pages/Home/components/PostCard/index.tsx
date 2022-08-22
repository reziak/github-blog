import { PostCardContainer } from './styles'

export const PostCard = () => {
  return (
    <PostCardContainer href="/1234567890">
      <header>
        <strong>Javascript data types and data structures</strong>
        <span>Há 1 dia</span>
      </header>
      <div>
        <p>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in...
        </p>
      </div>
    </PostCardContainer>
  )
}
