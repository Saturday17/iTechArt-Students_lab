import React, {Component} from 'react';


class Chair extends Component {

  showId = () => {
    console.log(this.props)
  }

  render() {
    
    return (
      <div className="row__chair" onMouseOver={ this.showId }></div>
    );
  }
}

export default Chair;