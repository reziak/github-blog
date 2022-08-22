import { HeaderContainer } from './styles'

import logo from '../../assets/images/logo.svg'

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
    </HeaderContainer>
  )
}
