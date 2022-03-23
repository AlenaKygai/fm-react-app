import React from 'react';
import Aloha from '../Aloha';

const AlohaList = (props) =>{
  const {users} = props;
  const mapUsersAloha = ({fname, id}) => <Aloha key={id} id={id} name={fname} /> ;

  return <div>
    {users.map(mapUsersAloha)}
    </div>;
}
export default AlohaList;