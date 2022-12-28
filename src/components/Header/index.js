// import ReactPopUp from '../ReactPopUp'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdContact} from 'react-icons/io'
import {
  MainContainer,
  LogoContainer,
  LogoHeader,
  HeaderOptionsContainer,
  HeaderOptionsListItem,
  LoginButtonHeader,
} from './StyledComponents'
import './index.css'

const Header = () => (
  <MainContainer>
    <LogoContainer>
      <GiHamburgerMenu />
      <LogoHeader>IndigoLearn</LogoHeader>
    </LogoContainer>
    <HeaderOptionsContainer>
      <HeaderOptionsListItem>BUY COURSES</HeaderOptionsListItem>
      <HeaderOptionsListItem>BUY BOOKS</HeaderOptionsListItem>
      <HeaderOptionsListItem>PROGRAMS</HeaderOptionsListItem>
      <HeaderOptionsListItem>FREE RESOURCES</HeaderOptionsListItem>
    </HeaderOptionsContainer>
    <LoginButtonHeader>
      <IoMdContact className="contact-icon" /> Log In/Sign Up
    </LoginButtonHeader>
  </MainContainer>
)
export default Header
