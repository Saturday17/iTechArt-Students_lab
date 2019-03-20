import React, {Component} from 'react';
import Poster from './Poster';
import axios from 'axios';
import uniqueId from 'lodash/uniqueId';

class PremiereList extends Component {
  
  componentDidMount() {
    this.findMovies();
  }

  findMovies() { 
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=0db50d1e81184cc04e761a3e55b0ee62&language=en-US&page=1')
      .then(searchResults => {
        const movies = searchResults.data.results;
        var movieRows = [];
        movies.map( movie => {
          movie.poster = 'https://image.tmdb.org/t/p/w185' + movie.poster_path;
          movie.releaseDate = movie.release_date;
          var movieRow = <Poster key={ uniqueId('movie_') } movie={ movie }/>;
          movieRows.push(movieRow);
          for (var i=0; i<3; i++) {
            movieRows.splice(3, movieRows.length);
          }
        })
        this.setState ({
          movieRows: movieRows
        })
      })
      .catch(() => { 
        console.error('faild!'); 
      })
  }

  render() {
    const { movieRows } = this.state

    return (
      <div className="posters">
        { movieRows }
      </div>
    );
  }
}

export default PremiereList;