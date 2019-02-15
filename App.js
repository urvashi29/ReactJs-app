import React, { Component } from 'react';
import CardOne from './cardOne';
import CardTwo from './cardTwo';
class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <h1 className='div-class'>Hi, I am React App!</h1>
        <button className='button-app'>Switch Users</button>
        <CardOne name='Urvashi' age='20' />
        <CardTwo name='Rastogi' age='20' profession="Photographer" />
      </div>
    );
  }
}
export default App;//doubt
