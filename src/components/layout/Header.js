import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import AppsIcon from '@material-ui/icons/Apps'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

const Header = () => {
    return (
        <Wrapper>
            <LogoWrapper>
                <Menu>
                    <MenuIcon/>
                </Menu>
                <Logo xmlns="http://www.w3.org/2000/svg" viewBox="52 42 88 66" height={35} width={46.66}>
                    <path fill="#4285f4" d="M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6"/>
                    <path fill="#34a853" d="M120 108h14c3.32 0 6-2.69 6-6V59l-20 15"/>
                    <path fill="#fbbc04" d="M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2"/>
                    <path fill="#ea4335" d="M72 74V48l24 18 24-18v26L96 92"/>
                    <path fill="#c5221f" d="M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2"/>
                </Logo>
                <h1>Gmail</h1>
            </LogoWrapper>
            <SearchWrapper>
                <SearchBarWrapper>
                    <SearchIcon/>
                    <input type='text' placeholder='Search mail'/>
                    <ExpandMoreIcon/>
                </SearchBarWrapper>
            </SearchWrapper>

            <IconsWrapper>
                <HelpOutlineIcon/>
                <SettingsOutlinedIcon/>
                <AppsIcon/>
                <AccountCircleIcon/>
            </IconsWrapper>
        </Wrapper>
    )
}

export default Header

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 270px auto 170px;
  -webkit-box-shadow: inset 0 -1px 0 rgb(100 121 143 / 12%);
  box-shadow: inset 0 -1px 0 rgb(100 121 143 / 12%);
  height: 64px;
  align-items: center;
`

const LogoWrapper = styled.div`
  height: 45px;
  display: grid;
  grid-template-columns: 25% 61px 0 auto;

  h1 {
    display: grid;
    place-items: center;
    font-weight: normal;
    color: #5f6368;
  }
`

const Menu = styled.div`
  display: grid;
  place-items: center;
`

const Logo = styled.svg`
  display: flex;
  height: 45px;
`

const SearchWrapper = styled.div``

const SearchBarWrapper = styled.div`
  background-color: #f1f3f4;
  width: 100%;
  max-width: 750px;
  display: grid;
  grid-template-columns: 10% auto 10%;
  place-items: center;
  height: 45px;
  border-radius: 6px;

  .MuiSvgIcon-root {
    color: #5f6368;
  }

  input {
    width: 100%;
    height: 30px;
    background: none;
    border: none;
    font-size: 18px;

    :focus {
      outline: none;
    }
  }
`

const IconsWrapper = styled.div`
  margin-left: 8px;
  display: grid;
  grid-template-columns: repeat(4, auto);

  .MuiSvgIcon-root {
    color: #5f6368;
  }
`
