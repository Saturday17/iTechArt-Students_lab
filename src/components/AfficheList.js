import React, {Component} from 'react';
import Poster from './Poster';
import axios from 'axios';
import uniqueId from 'lodash/uniqueId';
import SearchBar from './SearchBar';

class AfficheList extends Component {

  state = {
    filterText: ''
  }

  componentDidMount() {
    this.loadMovies();
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
    return (
      <>
        <SearchBar filterText={filterText} onFilterTextChange={this.handleFilterTextChange} />
        <div className="posters">
          { movieRows }
        </div>
      </>
    );
  }
}


export default AfficheList;