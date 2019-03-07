import React from 'react';

function Article(props) {
    const {article} = props;
    return (
      <div className="price-tag">
        <img src="./img/dragon.jpg" alt="img"/>
        <span>{ article.name }</span>
        <h4>{ article.time }<sub>minutes</sub></h4>
        <p>{ article.description }</p>
        <button className="price-btn">select a film</button>
      </div>
    );
}

export default Article;