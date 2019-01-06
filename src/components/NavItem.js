import React from 'react';

const NavItem = ({ menuItem, onMenuItemSelect }) => {
  return (
    <li class='nav-item'>
      <button
        class='nav-link'
        href='#'
        onClick={() => onMenuItemSelect(menuItem)}
      >
        {menuItem.name}
      </button>
    </li>
  );
};

export default NavItem;
