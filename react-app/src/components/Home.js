import React, { Component } from 'react';
import '../index.css';
import '../media.css';
import Slider from './Slider';
import Arrowdown from './Arrowdown';
import Table from './Table';
import Textinfo from './Textinfo';
import Calltoaction from './Calltoaction';
import Authorization from './Authorization';
import Registration from './Registration';

class Home extends Component {
  render() {
    return (
      <>
        <div className="main" id="main">
          <Slider />
          <Arrowdown />
        </div>
        <Table />
        <Textinfo />
        <Calltoaction />
        <Authorization />
        <Registration />
      </>
    );
  }
}

export default Home;