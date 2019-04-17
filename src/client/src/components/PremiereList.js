import React, {Component} from 'react';
import Poster from './Poster';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadMovies } from '../store/actions';
import uniqueId from 'lodash/uniqueId';

class PremiereList extends Component {
  
  state = {}

  componentDidMount() {
    this.showMovies();
  }

  showMovies() { 
    const { movies } = this.props;
    const movieRows = movies.map( movie => {
      movie.poster = 'https://image.tmdb.org/t/p/w185' + movie.poster_path;
      movie.releaseDate = movie.release_date;
      movie.vote = movie.vote_average;
      return <Poster key={ uniqueId('movie_') } movie={ movie }/>;
    })
    for (var i=0; i<3; i++) {
      movieRows.splice(3, movieRows.length);
    }
    this.setState ({
      movieRows: movieRows
    })
  }

  render() {
    const { movieRows } = this.state

    return (
      <div className="posters">
        { movieRows }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.error,
    isLoading: state.loading,
    movies: state.movies
  };
}

const mapActionsToProps = dispatch => {
  return {
    loadMovies: bindActionCreators(loadMovies, dispatch)
  };
}

export default connect(mapStateToProps, mapActionsToProps)(PremiereList);