import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import NameList from '../components/NameList';
import PhoneList from '../components/PhoneList';

const LoaderPage = () => {
  return (
    <div>
      <h1>Loadboard</h1>
      <NameList />
      <PhoneList />
      <Outlet />
      <Link to="/">Home</Link>
    </div>
  );
}

export default LoaderPage;
