import React, {Component} from 'react';
import Article from './Article';
import articles from './films';
import $ from 'jquery';
import uniqueId from 'lodash.uniqueid';

class AfficheList extends Component {
  performSearch() { 
    console.log('Perform search using moviedb');
    const urlString = 'https://api.themoviedb.org/3/search/movie?api_key=0db50d1e81184cc04e761a3e55b0ee62&language=en-US&query=marvel&page=1&include_adult=false'; 
    $.ajax({ 
        url: urlString, 
        success: searchResults => { 
          console.log("success!"); 
          console.log(searchResults);
          const results = searchResults.results;
          console.log(results[0]);
          var movieRows = [];

          results.forEach( movie => {
              console.log(movie.title);
              const movieRow = <Article movie={movie} key={movie.id} />;
              movieRows.push(movieRow);
          }) 
          this.setState()
        }, 
        error: (xhr, status, err) => { 
            console.error('faild!'); 
        } 
    }) 
  }
  render() {
    this.performSearch();
    return (
      <div className="price-tags">
        { 
          articles.map(article => <Article article={article} key={uniqueId('movie_')} />) 
        }
      </div>
    );
  }
}

export default AfficheList;