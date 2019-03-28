import React, {Component} from 'react';
import uniqueId from 'lodash/uniqueId';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class Movie extends Component {
  render() {
    const { movie: { poster, title, releaseDate, vote, overview }, onCloseMovie } = this.props;
    return (
      <div className="movie" key={ uniqueId('movie_') }>
        <div className="movie-form">
          <div className="movie-form__form-cross"><h1 onClick={onCloseMovie}>&times;</h1></div>
          <div className="movie-form__poster">
            <img className="poster__img" src={ poster } alt={title + ' poster'}/>
            <div className="poster__info">
              <h2 className="info__title">{ title }</h2>
              <h4 className="info__release">Release date: { releaseDate }</h4>
              <h5 className="info__vote">Average vote: { vote } <i className="fa fa-star"></i></h5>
              <p className="info__overview">{ overview }</p>
              <Link to="/affiche/moviepage" params={{movie: this.props.movie}}><button className="info__btn">View this movie</button></Link>
            </div>
          </div> 
        </div>
      </div>
    );
  }
}

Movie.propTypes = {
  movie: PropTypes.object,
  poster: PropTypes.string,
  title: PropTypes.string,
  releaseDate: PropTypes.string,
  closeMovie: PropTypes.func
}

export default Movie;