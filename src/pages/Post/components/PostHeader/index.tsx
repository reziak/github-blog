import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faCalendar,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { PostHeaderContainer, PostHeaderInfos, PostHeaderLinks } from './styles'

interface PostHeaderProps {
  title: string
  user: string
  publishedDate: string
  linkToGH: string
  comments: number
}

export const PostHeader = ({
  title,
  user,
  publishedDate,
  linkToGH,
  comments,
}: PostHeaderProps) => {
  return (
    <PostHeaderContainer>
      <PostHeaderLinks>
        <Link to="/">
          <FontAwesomeIcon icon={faChevronLeft} />
          <span>VOLTAR</span>
        </Link>
        <a href={linkToGH} target="_blank" rel="noreferrer">
          <span>VER NO GITHUB</span>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </PostHeaderLinks>
      <h1>{title}</h1>
      <PostHeaderInfos>
        <p>
          <FontAwesomeIcon icon={faGithub} />
          <span>{user}</span>
        </p>
        <p>
          <FontAwesomeIcon icon={faCalendar} />
          <span>{publishedDate}</span>
        </p>
        <p>
          <FontAwesomeIcon icon={faComment} />
          <span>
            {comments !== 1 ? `${comments} comentários` : '1 comentário'}
          </span>
        </p>
      </PostHeaderInfos>
    </PostHeaderContainer>
  )
}
