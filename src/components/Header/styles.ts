import styled from 'styled-components'

import bgLeft from '../../assets/images/header-bg-left.svg'
import bgRight from '../../assets/images/header-bg-right.svg'
import bgCover from '../../assets/images/header-bg-cover.png'

export const HeaderContainer = styled.header`
  height: 18.5rem;
  background-color: ${(props) => props.theme.colors.profile};
  background-image: url(${bgLeft}), url(${bgRight}), url(${bgCover});
  background-repeat: no-repeat;
  background-position: left center, right center, center bottom;
  background-size: auto, auto, cover;
  position: relative;
  padding-top: 4rem;
  overflow: hidden;

  img {
    display: block;
    margin: 0 auto;
  }
`
