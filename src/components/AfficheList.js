import React, {Component} from 'react';
import Article from './Article';
import $ from 'jquery';
import uniqueId from 'lodash.uniqueid';

class AfficheList extends Component {

  constructor(props) {
    super(props);
    this.state = {}

    this.performSearch();
  }

  performSearch() { 
    console.log('Perform search using moviedb');
    const urlString = 'https://api.themoviedb.org/3/search/movie?api_key=0db50d1e81184cc04e761a3e55b0ee62&language=en-US&query=woman&page=1&include_adult=false'; 
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

  render() {
    const { rows } = this.state
    return (
      <div className="price-tags">
        { rows }
      </div>
    );
  }
}

export default AfficheList;