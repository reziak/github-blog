import { SearchForm } from './components/SearchForm'
import { ProfileCard } from './components/ProfileCard'
import { PostList } from './components/PostList'

import { HomeContainer, Publications } from './styles'

export const Home = () => {
  return (
    <>
      <ProfileCard />
      <HomeContainer>
        <Publications>
          <strong>Publicações</strong>
          <span>6 publicações</span>
        </Publications>

        <SearchForm />

        <PostList />
      </HomeContainer>
    </>
  )
}
