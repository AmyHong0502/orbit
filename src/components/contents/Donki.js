import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import categories from './Donki/categories';

class Donki extends Component {
  renderedCategories = categories.map(item => {
    return (
      <Link
        to={`${this.props.match.url}${item.path}`}
        key={item.id}
        className='rounded-pill border border-light m-1 p-2 pl-3 pr-3 no-wrap'
      >
        {item.name}
      </Link>
    );
  });

  renderCategoryGroup() {
    return (
      <div className='overflow-auto'>
        <div className='btn-group mb-3' role='group'>
          {this.renderedCategories}
        </div>
      </div>
    );
  }

  routes = categories.map(item => {
    return (
      <Route
        path={`/donki${item.path}`}
        exact
        component={item.component}
        key={item.id}
      />
    );
  });

  render() {
    return (
      <div className='overflow-auto'>
        {this.renderCategoryGroup()}
        {this.routes}
      </div>
    );
  }
}

export default Donki;
