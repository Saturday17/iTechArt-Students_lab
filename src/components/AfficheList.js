import React, {Component} from 'react';
import Article from './Article';
import $ from 'jquery';
import uniqueId from 'lodash.uniqueid';

class AfficheList extends Component {

  constructor(props) {
    super(props);
    this.state = {}

    this.performSearch('avengers');
  }

  performSearch(searchWord) { 
    console.log('Perform search using moviedb');
    const urlString = 'https://api.themoviedb.org/3/search/movie?api_key=0db50d1e81184cc04e761a3e55b0ee62&query=' + searchWord;
    $.ajax({ 
        url: urlString,
        success: searchResults => { 
          console.log("success!");
          const movies = searchResults.results;
          var movieRows = [];
          movies.forEach( movie => {
            movie.poster_src = 'https://image.tmdb.org/t/p/w185' + movie.poster_path;
            console.log(movie);
            var movieRow = <Article key={ uniqueId('movie_') } movie={ movie }/>;
            movieRows.push(movieRow);
          })
          this.setState({
            rows: movieRows
          })
        }, 
        error: (xhr, status, err) => { 
            console.error('faild!'); 
        } 
    }) 
  }

  searchChangeHandler = e => {
    console.log(e.target.value);
    const searchWord = e.target.value;
    this.performSearch(searchWord)
  }

  render() {
    const { rows } = this.state
    return (
      <>
        <input onChange={this.searchChangeHandler} placeholder="Search"/>
        <div className="price-tags">
          { rows }
        </div>
      </>
    );
  }
}

export default AfficheList;