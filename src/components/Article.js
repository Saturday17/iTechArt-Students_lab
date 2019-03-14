import React from 'react';
import uniqueId from 'lodash/uniqueId';

function Article({ movie: { poster_src, title, release_date } }) {
    return (
      <div className="price-tag" key={ uniqueId('movie_') }>
        <img className="movie-img" src={ poster_src } alt={title + ' poster'}/>
        <h2 className="movie-title">{ title }</h2>
        <h4 className="movie-release">{ release_date }<sub>release</sub></h4>
        <button className="price-btn">select a film</button>
      </div>
    );
}

export default Article;