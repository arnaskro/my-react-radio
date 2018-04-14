import React from 'react';

export default class Header extends React.Component {

  render() {
    return (
      <div className="Header">
        <img src={process.env.PUBLIC_URL + '/assets/logo.png'} alt="Lietuviskas Radijas" className="Logo" />
      </div>
    )
  }

}