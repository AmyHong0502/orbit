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
        <div className='navbar-brand p-3 m-0'>
          <i className='fas fa-satellite fa-2x pr-2' />
        </div>
        <ul className='nav flex-column'>{renderedList}</ul>
      </div>
    </nav>
  );
};

export default NavBar;
