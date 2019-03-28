import React, {Component} from 'react';

class Cinema extends Component {
  render() {
    const { cinemas } = this.props;
    return (
      <div className="cinema">
        <h1 className="cinema__name">{cinemas.name}</h1>
        <img className="cinema__img" src={ cinemas.img } alt="cinema picture"/>
        <h3 className="cinema__address">Address: {cinemas.address}</h3>
      </div>
    );
  }
}

export default Cinema;