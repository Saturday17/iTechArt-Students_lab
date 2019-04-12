import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class Movie extends Component {
  render() {
    const { movie: { poster, title, releaseDate, vote, overview, id }, onCloseMovie } = this.props;
    return (
      <div className="movie" key={ id }>
        <div className="movie-form">
          <div className="movie-form__close-btn"><h1 onClick={ onCloseMovie }>&times;</h1></div>
          <div className="poster">
          <Link to={`affiche/moviepage/${this.props.movie.id}`}><img className="poster-img" src={ poster } alt={title + ' poster'}/></Link>
            <div className="poster-info">
              <h2 className="poster-info__title">{ title }</h2>
              <h4 className="poster-info__release">Release date: { releaseDate }</h4>
              <h5 className="poster-info__vote">Average vote: { vote } <i className="fa fa-star"></i></h5>
              <p className="poster-info__overview">{ overview }</p>
              <Link to={`affiche/moviepage/${this.props.movie.id}`}><button className="info__btn">View this movie</button></Link>
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
  onCloseMovie: PropTypes.func
}

export default Movie;