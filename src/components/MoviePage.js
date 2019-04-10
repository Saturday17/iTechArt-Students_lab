import React, {Component} from 'react';
import uniqueId from 'lodash/uniqueId';
import axios from 'axios';
import Spinner from './Spinner';
import OrderMenu from './OrderMenu';
import CinemaHall from './CinemaHall';

class MoviePage extends Component {

  state = {
    movie: {},
    isShownSpinner: true,
    isOpenHall: false
  }

  componentDidMount() {
    this.loadMovie();
  }

  handleOpenHall = () => {
    this.setState({
      isOpenHall: true
    })
  }

  handleCloseHall = () => {
    this.setState({
      isOpenHall: false
    })
  }

  loadMovie() {
    const id = this.props.match.params.movie;
    axios.get(`http://api.themoviedb.org/3/movie/${id}?api_key=0db50d1e81184cc04e761a3e55b0ee62&language=en-US&page=1`)
      .then( res => {
        const movie = res.data;
        this.setState({
          movie: movie
        }, () => this.showMovie());
      })
      .catch( error => {
        this.setState({
          movie: error,
          isShownSpinner: false
        });
      })
  }

  showMovie() {
    const { movie } = this.state;
    movie.poster = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;
    movie.releaseDate = movie.release_date;
    movie.vote = movie.vote_average;
    movie.genres = movie.genres.map( genre => {
      return genre.name;
    });
    movie.productionCountry = movie.production_countries.map( country => {
      return country.name;
    })
    this.setState({
      movie: movie,
      isShownSpinner: false
    });
  }

  render() {
    const { movie: { poster, title, releaseDate, overview, vote, genres, runtime, productionCountry }, isShownSpinner, isOpenHall } = this.state;
    return(
      <>
        <div className="movie-page" key={ uniqueId('movie_') }>
          <div className="movie-container">
          { isShownSpinner === true ? <Spinner /> : 
            <div className="movie-container__movie">
              <img className="movie__img" src={ poster } alt={title + ' poster'}/>
              <div className="movie__info">
                <h2 className="info__title">{ title }</h2>
                <h5 className="info__genres">Genres: { genres.join(', ') }</h5>
                <h5 className="info__duration">Film duration: { runtime } minutes</h5>
                <p className="info__overview">{ overview }</p>
                <h4 className="info__release">Release date: { releaseDate }</h4>
                <h5 className="info__vote">Average vote: { vote } <i className="fa fa-star"></i></h5>
                <h5 className="info__production">Production country: { productionCountry }</h5>
                <div className="order-menu">
                  <OrderMenu openHall={ this.handleOpenHall } />
                </div>
              </div>
            </div> 
          }
          </div>
        </div>
        { isOpenHall && <CinemaHall closeHall={ this.handleCloseHall }/> }
      </>
    );
  }
}


export default MoviePage;