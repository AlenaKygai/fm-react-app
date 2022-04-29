import React from 'react';
import styles from './UserCard.module.scss';
import {UserContext} from '../../../context';

const UserCard = (props) => {
  const renderProps = (user) => {
    return (
     <div className={styles.container}> 
      <h2>UserCard</h2>
      <p>{user.fname} {user.sname}</p>
      <img src={user.imgSrc} className={styles.img}/>
     </div>
  );
}
return <UserContext.Consumer>{renderProps}</UserContext.Consumer>
}


export default UserCard;
