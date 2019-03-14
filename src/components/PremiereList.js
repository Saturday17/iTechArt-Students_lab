import React, {Component} from 'react';
import Article from './Article';
import $ from 'jquery';
import uniqueId from 'lodash.uniqueid';

class PremiereList extends Component {
  
  state = {}
  
  componentDidMount() {
    this.performSearch();
  }

  performSearch() { 
    console.log('Perform search using moviedb');
    const urlString = 'https://api.themoviedb.org/3/movie/popular?api_key=0db50d1e81184cc04e761a3e55b0ee62&language=en-US&page=1';
    $.ajax({ 
        url: urlString,
        success: searchResults => { 
          console.log("success!");
          const movies = searchResults.results;
          var movieRows = [];
          movies.forEach( movie => {
            movie.poster_src = 'https://image.tmdb.org/t/p/w185' + movie.poster_path;
            var movieRow = <Article key={ uniqueId('movie_') } movie={ movie }/>;
            movieRows.push(movieRow);
            for (var i=0; i<3; i++) {
              movieRows.splice(3, movieRows.length);
            }
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

export default PremiereList;