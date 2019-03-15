import React, {Component} from 'react';
import Article from './Article';
import axios from 'axios';
import uniqueId from 'lodash/uniqueId';

class AfficheList extends Component {

  state = {
    filterText: ''
  }

  componentDidMount() {
    this.showMovies()
  }

  showMovies() {
    console.log('Perform search using moviedb');
    const urlString = 'https://api.themoviedb.org/3/movie/now_playing?api_key=0db50d1e81184cc04e761a3e55b0ee62';
    axios.get(urlString)
      .then(searchResults => { 
        console.log("success!");
        const movies = searchResults.data.results;
        var movieRows = [];
        movies.forEach( movie => {
          movie.poster_src = 'https://image.tmdb.org/t/p/w185' + movie.poster_path;
          var movieRow = <Article key={ uniqueId('movie_') } movie={ movie }/>;
          movieRows.push(movieRow);
        })
        this.setState({
          movieRows: movieRows
        })
      })
      .catch((xhr, status, err) => { 
        console.error('faild!'); 
      })
  }

  performSearch(searchWord) { 
    const urlString = 'https://api.themoviedb.org/3/movie/now_playing?api_key=0db50d1e81184cc04e761a3e55b0ee62';
    axios.get(urlString)
      .then(searchResults => { 
        console.log("success!");
        const movies = searchResults.data.results;
        var movieRows = [];
        movies.forEach( movie => {
          if (searchWord == movie.title) {
            movie.poster_src = 'https://image.tmdb.org/t/p/w185' + movie.poster_path;
            var movieRow = <Article key={ uniqueId('movie_') } movie={ movie }/>;
            movieRows.push(movieRow);
          } else if (searchWord == '') {
            movie.poster_src = 'https://image.tmdb.org/t/p/w185' + movie.poster_path;
            var movieRow = <Article key={ uniqueId('movie_') } movie={ movie }/>;
            movieRows.push(movieRow);
          }
        })
        this.setState({
          movieRows: movieRows
        })
      })
      .catch((xhr, status, err) => { 
        console.error('faild!'); 
      })
  }
  searchChangeHandler = e => {
    if(e.key === 'Enter'){
      const searchWord = e.target.value;
      this.performSearch(searchWord)
    }
  }
  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }

  render() {
    const { movieRows } = this.state
    return (
      <>
        <div>
          <input onKeyDown={ this.searchChangeHandler } placeholder="Search" />
        </div>
        <div className="price-tags">
          { movieRows }
        </div>
      </>
    );
  }
}


export default AfficheList;