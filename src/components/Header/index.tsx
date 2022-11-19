import coverImage from '../../assets/cover.png'
import logoImage from '../../assets/logo.png'
import { HeaderBackground, HeaderContainer, HeaderLogo } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderBackground>
        <img src={coverImage} alt="" />
      </HeaderBackground>
      <HeaderLogo src={logoImage} alt="" />
    </HeaderContainer>
  )
}
