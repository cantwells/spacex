import React from 'react';
import './Header.css';
import logo from '../../logo.svg';

const Header = props => {
    return( 
        <header className="header">
        <img
            src={logo}
            alt="Logo Space X"
            className="logo"
        />
        <nav className="main-nav nav">
          <ul className="list">
            {props.rockets.map( (item, idx) => (
              <li key={idx} className="item">
                <a onClick={e => {
                  e.preventDefault();
                  props.changeRocket(item);
                }} href="/" className="item-link">{item}</a>
              </li>
            ))}
          </ul>
        </nav>
        <nav className="secondary-nav">
          <ul className="list">
            <li className="item">
              <a href="/" className="item-link">Home</a>
            </li>
            <li className="item">
              <a href="calendar.html" className="item-link">Calendar</a>
            </li>
          </ul>
        </nav>
      </header>
    );
}

export default Header;