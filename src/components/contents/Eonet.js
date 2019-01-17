import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import subCategories from './Eonet/subCategories';

class Eonet extends Component {
  renderCategoryGroup() {
    return (
      <div className='overflow-auto'>
        <div className='btn-group mb-3' role='group'>
          {this.renderedCategories}
        </div>
      </div>
    );
  }

  renderedCategories = subCategories.map(item => {
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

  routes = subCategories.map(item => {
    return (
      <Route
        path={`/eonet${item.path}`}
        exact
        component={item.component}
        key={item.id}
      />
    );
  });

  render() {
    return (
      <div className='overflow-auto'>
        <h1 className='display-4 mb-1'>
          Earth Observatory Natural Event Tracker
        </h1>
        {this.renderCategoryGroup()}
        <Route path={'/eonet'} exact component={subCategories[0].component} />
        {this.routes}
      </div>
    );
  }
}

export default Eonet;
