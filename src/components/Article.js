import React from 'react';


function Article({ movie }) {
    return (
      <div className="price-tag" key={movie.id}>
        <img src={ movie.poster_src } alt="poster"/>
        <h2>{ movie.title }</h2>
        <h4>{ movie.release_date }<sub>release</sub></h4>
        <button className="price-btn">select a film</button>
      </div>
    );
}

export default Article;