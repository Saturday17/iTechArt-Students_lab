import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Poster from '../components/Poster';
import uniqueId from 'lodash/uniqueId';
import { loadMovies } from '../store/actions';
import SearchBar from './SearchBar';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

class AfficheList extends Component {

  state = {
    filterText: ''
  }

  componentDidMount() {
    this.showMovies();
  }

  showMovies() {
    const { movies } = this.props;
    const movieRows = movies.map( movie => {
      movie.poster = 'https://image.tmdb.org/t/p/w185' + movie.poster_path;
      movie.releaseDate = movie.release_date;
      movie.vote = movie.vote_average;
      return <Poster movie={ movie } key={ uniqueId('movie_') }/>;
    })
    this.setState({
      movieRows: movieRows
    }, () => this.props.loadMovies());
  }

  findMovies() {
    const { filterText } = this.state;
    const { movies } = this.props;
    if (filterText !== '') {
      var movieRows = movies.map( movie => {
        if (movie.title.toUpperCase().indexOf(filterText.toUpperCase()) === -1) {
          return;
        }
        movie.poster = 'https://image.tmdb.org/t/p/w185' + movie.poster_path;
        movie.releaseDate = movie.release_date;
        return <Poster movie={ movie } key={ uniqueId('movie_') } />;
      })
    } else {
      movieRows = movies.map( movie => {
        movie.poster = 'https://image.tmdb.org/t/p/w185' + movie.poster_path;
        movie.releaseDate = movie.release_date;
        return <Poster movie={ movie } key={ uniqueId('movie_') } />;
      })
    }
    this.setState ({
      movieRows: movieRows
    })
  }
 
  handleFilterTextChange = filterText => {
    this.setState ({
      filterText: filterText.target.value
    }, () => this.findMovies());
  }

  render() {
    
    const { filterText, movieRows } = this.state;
    const { isShownSpinner } = this.props;
    return (
      <>
        <SearchBar filterText={filterText} onFilterTextChange={this.handleFilterTextChange} />
        <div className="posters">
          { isShownSpinner === true ? <Spinner /> : movieRows }
        </div>
      </>
    );
  }
}

AfficheList.propTypes = {
  isShownSpinner: PropTypes.bool,
  showMovieRows: PropTypes.func,
  loadMovies: PropTypes.func,
  movies: PropTypes.array
}

const mapStateToProps = state => {
  return {
    isShownSpinner: state.isShownSpinner,
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

export default connect(mapStateToProps, mapActionsToProps)(AfficheList);