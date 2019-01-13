import React from 'react';
import { Link } from 'react-router-dom';

const NavItem = ({ menuItem, onMenuItemSelect }) => {
  return (
    <li className='nav-item' onClick={onMenuItemSelect}>
      <div>
        <Link to={menuItem.urlPath} exact className='nav-link'>
          {menuItem.name}
        </Link>
      </div>
    </li>
  );
};

export default NavItem;
