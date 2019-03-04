import React, {Component} from 'react';

class Arrowdown extends Component {

  render(){
    return (
      <a href="#table" className="main-arrow">
        <div className="arrow-down" id="arrow-down">
            <svg height="100%" viewBox="0 0 24 24" width="100%"><path d="M7.41,8.59L12,13.17l4.59-4.58L18,10l-6,6l-6-6L7.41,8.59z" fill="#fff"></path></svg>
        </div>
      </a>
    );
  }

}

export default Arrowdown
