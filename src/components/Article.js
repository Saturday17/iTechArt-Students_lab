import React from 'react';


function Article({ article: { name, time, description } }) {
    return (
      <div className="price-tag">
        <img src="./img/dragon.jpg" alt="img"/>
        <span>{ name }</span>
        <h4>{ time }<sub>minutes</sub></h4>
        <p>{ description }</p>
        <button className="price-btn">select a film</button>
      </div>
    );
}

export default Article;