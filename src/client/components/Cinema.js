import React, {Component} from 'react';

class Cinema extends Component {
  render() {
    const { cinema: { name, img, address } } = this.props;
    return (
      <div className="cinema">
        <h1 className="cinema__name">{ name }</h1>
        <img className="cinema__img" src={ img } alt="cinema picture"/>
        <h3 className="cinema__address">Address: { address }</h3>
      </div>
    );
  }
}

export default Cinema;