import React from 'react';
import Aloha from '../Aloha';
import PropTypes from 'prop-types';

const AlohaList = (props) =>{
  const {users} = props;
  const mapUsersAloha = ({fname, id}) => <Aloha key={id} id={id} name={fname} /> ;

  return <div>
    {users.map(mapUsersAloha)}
    </div>;
}
const userProps = {
 id: PropTypes.number.isRequired,
 name: PropTypes.string.isRequired,
}
const userPropsShape = PropTypes.shape(userProps).isRequired;
AlohaList.protoTypes={
  users: PropTypes.arrayOf(userPropsShape).isRequired,
}
export default AlohaList;