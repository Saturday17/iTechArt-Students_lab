import React, {Component} from 'react';
import Article from './Article';
import axios from 'axios';
import uniqueId from 'lodash/uniqueId';
import SearchBar from './SearchBar';

class AfficheList extends Component {

  state = {
    filterText: ''
  }

  componentDidMount() {
    this.showMovies();
  }

  showMovies() {
    axios.post('https://api.themoviedb.org/3/movie/now_playing?api_key=0db50d1e81184cc04e761a3e55b0ee62&language=en-US&page=1')
      .then(searchResults => { 
        console.log("success!");
        const movies = searchResults.data.results;
        var movieRows = [];
        if (this.state.filterText != '') {
          movies.forEach( movie => {
            if (movie.title.indexOf(this.state.filterText) === -1) {
              return;
            }
            movie.poster_src = 'https://image.tmdb.org/t/p/w185' + movie.poster_path;
            movieRows.push(<Article movie={movie} key={uniqueId('movie_')}/>)
          })
        } else {
          movies.forEach( movie => {
            movie.poster_src = 'https://image.tmdb.org/t/p/w185' + movie.poster_path;
            movieRows.push(<Article key={ uniqueId('movie_') } movie={ movie }/>);
          })
        }
        this.setState({
          movieRows: movieRows
        })
      })
      .catch((xhr, status, err) => { 
        console.error('faild!'); 
      })
  }

  handleFilterTextChange = filterText => {
    this.setState({
      filterText: filterText
    });
    this.showMovies();
  }

  render() {
    
    const { movieRows, filterText } = this.state;

    return (
      <>
        <SearchBar filterText={filterText} onFilterTextChange={this.handleFilterTextChange} />
        <div className="price-tags">
          { movieRows }
        </div>
      </>
    );
  }
}


export default AfficheList;