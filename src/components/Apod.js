import React from 'react';
import nasa from '../apis/nasa';

class Apod extends React.Component {
  state = {
    data: null
  };

  onButtonClick = async () => {
    this.state.data = await nasa.get('/planetary/apod', {
      params: {
        api_key: 'DEMO_KEY'
      }
    });

    console.log(this.state.data);
  };

  render() {
    return <button onClick={this.onButtonClick}>Apod</button>;
  }
}

export default Apod;
