import React, {Component} from 'react';
import uniqueId from 'lodash/uniqueId';
import PropTypes from 'prop-types';

class MoviePage extends Component {
  render() {
    const { movie: { poster, title, releaseDate, overview } } = this.props;
    return(
      <>
        <div className="movie" key={ uniqueId('movie_') }>
          <div className="movie-form">
            <div className="movie-form__poster">
              <img className="poster__img" src={ poster } alt={title + ' poster'}/>
              <div className="poster__info">
                <h2 className="info__title">{ title }</h2>
                <h4 className="info__release">Release date: { releaseDate }</h4>
                <p className="info__overview">{ overview }</p>
              </div>
            </div> 
          </div>
        </div>
      </>
    );
  }
}

MoviePage.propTypes = {
  movie: PropTypes.object,
  poster: PropTypes.string,
  title: PropTypes.string,
  releaseDate: PropTypes.string
}

export default MoviePage;