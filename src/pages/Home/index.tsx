import { SearchForm } from './components/SearchForm'
import { ProfileCard } from './components/ProfileCard'
import { PostList } from './components/PostList'

import { HomeContainer, Publications } from './styles'
import { useContext } from 'react'
import { GithubContext } from '../../contexts/GithubContext'

export const Home = () => {
  const { numberOfPosts } = useContext(GithubContext)

  return (
    <>
      <ProfileCard />
      <HomeContainer>
        <Publications>
          <strong>Publicações</strong>
          <span>
            {numberOfPosts > 1
              ? `${numberOfPosts} publicações`
              : `1 publicação`}
          </span>
        </Publications>

        <SearchForm />

        <PostList />
      </HomeContainer>
    </>
  )
}
