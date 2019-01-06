import React from 'react';
import NavItem from './NavItem';
import NavData from './NavData';

const NavBar = ({ onMenuItemSelect }) => {
  const renderedList = NavData.map(menuItem => {
    return (
      <NavItem
        key={menuItem.id}
        onMenuItemSelect={onMenuItemSelect}
        menuItem={menuItem}
      />
    );
  });

  return (
    <nav className='col-md-2 d-md-block sidebar'>
      <div class='sidebar-sticky'>
        <ul class='nav flex-column'>{renderedList}</ul>
      </div>
    </nav>
  );
};

export default NavBar;
