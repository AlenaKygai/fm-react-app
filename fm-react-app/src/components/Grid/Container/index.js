import React from 'react';

const Container = (props) => {
  const {children}=props;
  return (
    <div style={{maxWidth:"900px",textAlign:'center'}}>
      {children}
    </div>
  );
}

export default Container;
