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
        const { filterText } = this.state;
        console.log("success!");
        const movies = searchResults.data.results;
        let movieRows = [];
        movies.forEach( movie => {
          if (movie.title.indexOf(filterText) === -1) {
            return;
          }
          movie.poster = 'https://image.tmdb.org/t/p/w185' + movie.poster_path;
          movie.releaseDate = movie.release_date;
          movieRows.push(<Poster movie={movie} key={uniqueId('movie_')}/>)
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
    let movieRows = [];
    if (filterText !== '') {
      movies.map( movie => {
        if (movie.title.indexOf(filterText) === -1) {
          return;
        }
        movie.poster = 'https://image.tmdb.org/t/p/w185' + movie.poster_path;
        movie.releaseDate = movie.release_date;
        movieRows.push(<Poster movie={movie} key={uniqueId('movie_')}/>)
      })
    } else {
      movies.map( movie => {
        movie.poster = 'https://image.tmdb.org/t/p/w185' + movie.poster_path;
        movie.releaseDate = movie.release_date;
        movieRows.push(<Poster key={ uniqueId('movie_') } movie={ movie }/>);
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
    
    const { movieRows, filterText } = this.state;

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