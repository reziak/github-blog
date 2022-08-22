import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ProfileCardContainer, ProfileInfo } from './styles'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export const ProfileCard = () => {
  return (
    <ProfileCardContainer>
      <img src="https://avatars.githubusercontent.com/u/15985896?v=4" alt="" />
      <ProfileInfo>
        <header>
          <strong>Bruno Lira</strong>
          <a href="https://github.com/reziak" target="_blank" rel="noreferrer">
            <span>GITHUB</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </header>

        <div>
          <p>Always learning new stuff.</p>
        </div>

        <footer>
          <p>
            <FontAwesomeIcon icon={faGithub} />
            <span>reziak</span>
          </p>
          <p>
            <FontAwesomeIcon icon={faBuilding} />
            <span>fake org</span>
          </p>
          <p>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>69 seguidores</span>
          </p>
        </footer>
      </ProfileInfo>
    </ProfileCardContainer>
  )
}
