import React from 'react';
import styles from './UserCard.module.scss';
import { WithUser } from '../../HOCs';

const UserCard = (props) => {
  const {user} = props;
    return (
     <div className={styles.container}> 
      <h2>UserCard</h2>
      <p>{user.fname} {user.sname}</p>
      <img src={user.imgSrc} className={styles.img}/>
     </div>
  );
}
const UserCardWithUser = WithUser(UserCard);

export default UserCardWithUser;
