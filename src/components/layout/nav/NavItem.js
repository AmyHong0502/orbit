import React from 'react';
import { Link } from 'react-router-dom';

const NavItem = ({ menuItem, onMenuItemSelect, match }) => {
  return (
    <li className='nav-item' onClick={onMenuItemSelect}>
      <div>
        <Link to={`${match.url}${menuItem.urlPath}`} className='nav-link'>
          {menuItem.name}
        </Link>
      </div>
    </li>
  );
};

export default NavItem;
