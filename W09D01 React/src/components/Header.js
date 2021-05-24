import React from 'react';

// const Header = ({myName,myAge}) => {
  // const {name,age}=props
  const Header = (props) => {
  console.log('PROPS: ', props);
  return (
    <>
      <div className="Header">
        <span>{props.myName}</span>
        <span>{props.myAge}</span>
        <span>{props.a}</span>
      </div>
    </>
  );
};

export default Header;
