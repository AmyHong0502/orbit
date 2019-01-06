import React from 'react';

const NavItem = ({ menuItem, onMenuItemSelect }) => {
  return (
    <li className='nav-item'>
      <button
        className='nav-link'
        href='#'
        onClick={() => onMenuItemSelect(menuItem)}
      >
        {menuItem.name}
      </button>
    </li>
  );
};

export default NavItem;
