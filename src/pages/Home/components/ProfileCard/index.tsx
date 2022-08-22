import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ProfileCardContainer, ProfileInfo } from './styles'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { useContext } from 'react'
import { GithubContext } from '../../../../contexts/GithubContext'

export const ProfileCard = () => {
  const { ownerProfile } = useContext(GithubContext)

  return (
    <ProfileCardContainer>
      <img src="https://avatars.githubusercontent.com/u/15985896?v=4" alt="" />
      <ProfileInfo>
        <header>
          <strong>{ownerProfile.name}</strong>
          <a href={ownerProfile.htmlUrl} target="_blank" rel="noreferrer">
            <span>GITHUB</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </header>

        <div>
          <p>{ownerProfile.bio}</p>
        </div>

        <footer>
          <p>
            <FontAwesomeIcon icon={faGithub} />
            <span>{ownerProfile.login}</span>
          </p>
          {ownerProfile.company && (
            <p>
              <FontAwesomeIcon icon={faBuilding} />
              <span>{ownerProfile.company}</span>
            </p>
          )}
          <p>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>
              {ownerProfile.followers > 1
                ? `${ownerProfile.followers} seguidores`
                : `1 seguidor`}
            </span>
          </p>
        </footer>
      </ProfileInfo>
    </ProfileCardContainer>
  )
}
