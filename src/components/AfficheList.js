import React, {Component} from 'react';
import Article from './Article';
import axios from 'axios';
import uniqueId from 'lodash/uniqueId';

class AfficheList extends Component {

  state = {}

  componentDidMount() {
    this.performSearch();
  }

  performSearch(searchWord) { 
    console.log('Perform search using moviedb');
    const urlString = 'https://api.themoviedb.org/3/search/movie?api_key=0db50d1e81184cc04e761a3e55b0ee62&query=' + searchWord;
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
  searchChangeHandler = e => {
    const searchWord = e.target.value;
    this.performSearch(searchWord)
  }

  render() {
    const { movieRows } = this.state
    return (
      <>
        <input onChange={this.searchChangeHandler} placeholder="Search"/>
        <div className="price-tags">
          { movieRows }
        </div>
      </>
    );
  }
}


export default AfficheList;