import { useContext } from 'react'
import { GithubContext } from '../../../../contexts/GithubContext'
import { PostCard } from '../PostCard'
import { PostListContainer } from './styles'

export const PostList = () => {
  const { posts } = useContext(GithubContext)
  return (
    <PostListContainer>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </PostListContainer>
  )
}
