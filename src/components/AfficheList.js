import React, {Component} from 'react';
import Poster from './Poster';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showMovieRows } from '../store/actions';
import uniqueId from 'lodash/uniqueId';
import SearchBar from './SearchBar';
import Spinner from './Spinner'
import PropTypes from 'prop-types';

class AfficheList extends Component {

  state = {
    filterText: ''
  }

  componentDidMount() {
    this.loadMovies();
    this.props.showMovieRows()
  }

  loadMovies() {
    axios.post('https://api.themoviedb.org/3/movie/now_playing?api_key=0db50d1e81184cc04e761a3e55b0ee62&language=en-US&page=1')
      .then(searchResults => { 
        console.log("success!");
        const movies = searchResults.data.results;
        const movieRows = movies.map( movie => {
          movie.poster = 'https://image.tmdb.org/t/p/w185' + movie.poster_path;
          movie.releaseDate = movie.release_date;
          movie.vote = movie.vote_average;
          return <Poster movie={movie} key={uniqueId('movie_')}/>;
        })
        this.setState ({
          movies: movies,
          movieRows: movieRows
        })
      })
      .catch(() => { 
        console.error('faild!'); 
      })
  }

  findMovies() {
    const { movies, filterText } = this.state;
    if (filterText !== '') {
      var movieRows = movies.map( movie => {
        if (movie.title.toUpperCase().indexOf(filterText.toUpperCase()) === -1) {
          return;
        }
        movie.poster = 'https://image.tmdb.org/t/p/w185' + movie.poster_path;
        movie.releaseDate = movie.release_date;
        return <Poster movie={movie} key={uniqueId('movie_')} />;
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
  showMovieRows: PropTypes.func
}

const putStateToProps = state => {
  return {
      isShownSpinner: state.isShownSpinner
  };
}

const putActionsToProps = dispatch => {
  return {
    showMovieRows: bindActionCreators(showMovieRows, dispatch)
  };
}

export default connect(putStateToProps, putActionsToProps)(AfficheList);