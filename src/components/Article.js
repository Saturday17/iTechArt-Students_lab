import React, {Component} from 'react';
import uniqueId from 'lodash/uniqueId';

class Article extends Component {

  viewMovie = e => {
    e.preventDefault();
    const url = "https://www.themoviedb.org/movie/" + this.props.movie.id;
    window.location.href = url;
  }

  render() {
    const { movie: { poster_src, title, release_date } } = this.props;
    return (
      <div className="price-tag" key={ uniqueId('movie_') }>
        <img className="movie-img" onClick={this.viewMovie} src={ poster_src } alt={title + ' poster'}/>
        <h2 className="movie-title">{ title }</h2>
        <h4 className="movie-release">{ release_date }<sub>release</sub></h4>
        <button className="price-btn" onClick={this.viewMovie}>select a film</button>
      </div>
    );
  }
}

export default Article;