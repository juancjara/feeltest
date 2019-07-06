import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            {' '}
            <NavLink className="nav-link" to="/">
              <span className="fa fa-home fa-lg" />Home
            </NavLink>
          </li>
          <li>
            {' '}
            <NavLink className="nav-link" to="/FEEL">
              <span className="fa fa-clipboard fa-lg" />Feel First Test
            </NavLink>
          </li>
          <li>
            {' '}
            <NavLink className="nav-link" to="/about">
              <span className="fa fa-info-circle fa-lg" />About
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
