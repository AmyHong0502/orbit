import React from 'react';
import NavItem from './NavItem';
import NavData from './NavData';

const NavBar = ({ onMenuItemSelect, match }) => {
  const renderedList = NavData.map(menuItem => {
    return (
      <NavItem
        key={menuItem.id}
        onMenuItemSelect={onMenuItemSelect}
        menuItem={menuItem}
        match={match}
      />
    );
  });

  return (
    <nav className='col-md-2 d-md-block sidebar p-0'>
      <div className='sidebar-sticky'>
        <ul className='nav flex-column'>{renderedList}</ul>
      </div>
    </nav>
  );
};

export default NavBar;
