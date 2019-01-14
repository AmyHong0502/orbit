import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import categories from './Donki/categories';

class Donki extends Component {
  renderedCategories = categories.map(item => {
    return (
      <button type='button' className='btn btn-secondary' key={item.id}>
        <Link to={`${this.props.match.url}${item.path}`}>{item.name}</Link>
      </button>
    );
  });

  renderCategoryGroup() {
    return (
      <div>
        <div className='btn-group' role='group'>
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
      <div>
        {this.renderCategoryGroup()}
        {this.routes}
      </div>
    );
  }
}

export default Donki;
