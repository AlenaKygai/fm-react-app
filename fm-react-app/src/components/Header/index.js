import React, { Component } from 'react';
import {UserContext,ThemeContext} from '../../context';
import styles from './Header.module.scss';
import { WbSunny,NightsStayRounded } from '@material-ui/icons';
import cx from 'classnames';
import CONSTANTS from '../../constants';
const {THEMES} = CONSTANTS;

class Header extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {
          ([theme,setTheme])=>{
            const classNames = cx(styles.container,
              {
              [styles.light] : theme===THEMES.LIGHT,
              [styles.dark] : theme===THEMES.DARK,
              });
            return (
            <UserContext.Consumer>
              {
              (user)=>(
                <header className={classNames}>
                  <p>{user.fname} {user.sname} </p> 
                  <div onClick={()=>{
                    const nexTheme = theme ===THEMES.LIGHT?
                    THEMES.DARK : THEMES.LIGHT;
                    setTheme(nexTheme);
                  }}>
                    {theme === THEMES.LIGHT? <WbSunny/>:<NightsStayRounded/>}
                  </div>
                </header>)
              }
            </UserContext.Consumer>
          )}
        }
      </ThemeContext.Consumer>


    );
  }
}

// Header.contextType = UserContext;

export default Header;
