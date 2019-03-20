import React, {Component} from 'react';
import uniqueId from 'lodash/uniqueId';
import PropTypes from 'prop-types';

class Poster extends Component {

  viewMovie = e => {
    e.preventDefault();
    const url = "https://www.themoviedb.org/movie/" + this.props.movie.id;
    window.location.href = url;
  }

  render() {
    const { movie: { poster, title, releaseDate } } = this.props;
    return (
      <div className="poster" key={ uniqueId('movie_') }>
        <img className="poster__img" onClick={this.viewMovie} src={ poster } alt={title + ' poster'}/>
        <h2 className="poster__title">{ title }</h2>
        <h4 className="poster__release">{ releaseDate }<sub>release</sub></h4>
        <button className="poster__btn" onClick={this.viewMovie}>select a film</button>
      </div>
    );
  }
}

Poster.propTypes = {
  movie: PropTypes.object,
  poster: PropTypes.string,
  title: PropTypes.string,
  releaseDate: PropTypes.string
}

export default Poster;