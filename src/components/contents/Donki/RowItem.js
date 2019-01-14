import React from 'react';

const subRow = (key, value) => {
  return (
    <div className='row'>
      <div className='col-sm-4'>{key}</div>
      <div className='col-sm-8'>{value}</div>
    </div>
  );
};

const renderContent = content => {
  if (Array.isArray(content)) {
    // TODO implemented array sub-rows
    return (
      <div>
        <span className='font-weight-bold'> Array</span>- Not implemented yet
      </div>
    );
  } else {
    return content.toString();
  }
};

const RowItem = ({ name, content }) => {
  if (!content) {
    return null;
  }

  return (
    <div className='row'>
      <div className='col-3 font-weight-bold'>{name}</div>
      <div className='col-9 font-weight-light'>{renderContent(content)}</div>
    </div>
  );
};

export default RowItem;
