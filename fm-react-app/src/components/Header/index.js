import React, { Component } from 'react';
import {UserContext,ThemeContext} from '../../context';
import styles from './Header.module.scss';
import { WbSunny,NightsStayRounded } from '@material-ui/icons';
import cx from 'classnames';
import CONSTANTS from '../../constants';
import { WithTheme, WithUser } from '../HOCs';
const {THEMES} = CONSTANTS;

const UserInfo = ({user}) => (<p> {user.fname} {user.sname} </p> );
const UserInfoWithUser = WithUser(UserInfo);

class Header extends Component {
  render() {
  const {theme,setTheme} = this.props;  
  const isLightTheme = theme===THEMES.LIGHT;
  const classNames = cx(styles.container,
    {
      [styles.light] : isLightTheme,
      [styles.dark] : theme===THEMES.DARK,
    });
      return (
      <header className={classNames}>
        <UserInfoWithUser />
            <div onClick={()=>{
              const nexTheme = isLightTheme? THEMES.DARK : THEMES.LIGHT;
              setTheme(nexTheme);
        }}>
          {isLightTheme? <WbSunny/>:<NightsStayRounded/>}
          </div>
          </header>)
}
}
// Header.contextType = UserContext;

const HeaderWithTheme = WithTheme(Header);

export default HeaderWithTheme;
