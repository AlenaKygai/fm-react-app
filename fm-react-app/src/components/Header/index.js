import React, { Component } from 'react';
import {UserContext} from '../../context';
import styles from './Header.module.scss';

class Header extends Component {
  render() {
    const user = this.context;
    return (
      <div className={styles.container}>
        {user.fname} {user.sname}
      </div>
    );
  }
}
Header.contextType = UserContext;
export default Header;
