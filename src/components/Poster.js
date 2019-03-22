import React, {Component} from 'react';
import uniqueId from 'lodash/uniqueId';
import PropTypes from 'prop-types';
import Movie from './Movie';

class Poster extends Component {

  state = {
    isOpenMovie: false
  }

  componentDidMount() {
    window.addEventListener('keydown', this.closeMovie);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeMovie);
  }

  viewMovie = e => {
    e.preventDefault();
    this.setState({
      isOpenMovie: true
    })
  }

  closeMovie = e => {
    this.setState({
      isOpenMovie: false
    });

    if(e.key === 'Escape') {
      this.setState({
        isOpenMovie: false
      })
    }
  }

  render() {
    const { movie: { poster, title, releaseDate } } = this.props;
    const { isOpenMovie } = this.state;
    return (
      <>
        <div className="poster" key={ uniqueId('movie_') }>
          <img className="poster__img" onClick={this.viewMovie} src={ poster } alt={title + ' poster'}/>
          <h2 className="poster__title">{ title }</h2>
          <h4 className="poster__release">{ releaseDate }<sub>release</sub></h4>
          <button className="poster__btn" onClick={this.viewMovie}>select a film</button>
        </div>
        { isOpenMovie && <Movie movie={this.props.movie} onCloseMovie={this.closeMovie} key={uniqueId('movie_')}/> }
      </>
    );
  }
}

Poster.propTypes = {
  movie: PropTypes.object,
  poster: PropTypes.string,
  title: PropTypes.string,
  releaseDate: PropTypes.string
}

export default Poster;