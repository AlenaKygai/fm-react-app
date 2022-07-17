import React from 'react';
import { getUsersJSON } from '../../api/getUsers';
import {useData} from '../../hooks';

const FuncNameList = () => {
  const { data:users, error, isFetching } = useData(getUsersJSON);

  if(isFetching) {
    return 'loading...';
  }

  if(error) {
    return `error: ${error}`;
  }

  return (
    <ol>
      {users.map((user)=>{
         return <li key={user.id}>{user.name}</li>
    })}
    </ol>
  )
}

export default FuncNameList;