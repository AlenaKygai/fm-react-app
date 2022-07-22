import React,{useContext, useEffect, useRef} from "react";
import cx from 'classnames';
import { NavLink } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import styles from './NavMenu.module.scss';
import { AppContext } from "../../context";


const NavMenu = (props) => {
  const {state:{isMenuOpen},closeMenu,openMenu} = useContext(AppContext);
  const classNames = cx(styles.container,{
    [styles.open]: isMenuOpen
  });
  const navRef = useRef(null);
  useEffect(() => {
    const handlerClick = ({target}) => {
      if(isMenuOpen && !navRef.current.contains(target)){
        closeMenu();
      }
    }
    const downClick = (event) => {
      if(isMenuOpen){
        closeMenu();
      }else{
        openMenu();
      }
    }
    window.addEventListener('click',handlerClick);
    window.addEventListener('keydown',downClick);
    return () => {
      window.removeEventListener('click',handlerClick);
      window.removeEventListener('keydown',downClick);
    }
  },[isMenuOpen,closeMenu,openMenu])
  return(
    <nav className={classNames} ref={navRef}>
      <CloseIcon className={styles.closeBtn} onClick={closeMenu}/>
      <ul className={styles.list}>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/signup'>Sign Up</NavLink>
        </li>
        <li>
          <NavLink to='/chat'>Chat</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavMenu;