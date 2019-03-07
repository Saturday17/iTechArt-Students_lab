import React from 'react';
import Article from './Article';
import articles from './films';

function AfficheList() {
  return (
    <div className="price-tags">
      <Article article={ articles[0] }/>
    </div>
  );
}

export default AfficheList;