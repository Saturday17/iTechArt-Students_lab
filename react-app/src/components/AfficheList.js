import React from 'react';
import Article from './Article';
import articles from './films';

function AfficheList() {
  return (
    <div className="price-tags">
      { 
        articles.map(article => <Article article={article} />) 
      }
    </div>
  );
}

export default AfficheList;