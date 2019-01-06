import React from 'react';

const NavBar = () => {
  return (
    <nav className='col-md-2 d-md-block sidebar'>
      <div class='sidebar-sticky'>
        <ul class='nav flex-column'>
          <li class='nav-item'>
            <a class='nav-link active' href='#'>
              item 1
            </a>
          </li>
          <li class='nav-item'>
            <a class='nav-link' href='#'>
              item 2
            </a>
          </li>
          <li class='nav-item'>
            <a class='nav-link' href='#'>
              item 3
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
