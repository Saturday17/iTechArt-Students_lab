import React, {Component} from 'react';
import Article from './Article';
import articles from './films';
import $ from 'jquery';

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
              const movie = <Article article={article} key={article.id} />;
              movieRows.push(movie);
          }) 
          this.setState()
        }, 
        error: (xhr, status, err) => { 
            console.error('faild!'); 
        } 
    }) 
  }
  render() {
    return (
      <div className="price-tags">
        { 
          articles.map(article => <Article article={article} key={article.id} />) 
        }
      </div>
    );
  }
}

export default AfficheList;