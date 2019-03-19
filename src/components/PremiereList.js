import React, {Component} from 'react';
import Article from './Article';
import axios from 'axios';
import uniqueId from 'lodash/uniqueId';

class PremiereList extends Component {
  
  state = {}
  
  componentDidMount() {
    this.showMovies();
  }

  showMovies() { 
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=0db50d1e81184cc04e761a3e55b0ee62&language=en-US&page=1')
      .then(searchResults => {
        const movies = searchResults.data.results;
        var movieRows = [];
        movies.forEach( movie => {
          movie.poster_src = 'https://image.tmdb.org/t/p/w185' + movie.poster_path;
          var movieRow = <Article key={ uniqueId('movie_') } movie={ movie }/>;
          movieRows.push(movieRow);
          for (var i=0; i<3; i++) {
            movieRows.splice(3, movieRows.length);
          }
        })
        this.setState ({
          movieRows: movieRows
        })
      })
      .catch((xhr, status, err) => { 
        console.error('faild!'); 
      })
    }

  render() {
    const { movieRows } = this.state

    return (
      <div className="price-tags">
        { movieRows }
      </div>
    );
  }
}

export default PremiereList;