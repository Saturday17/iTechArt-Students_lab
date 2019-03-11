import React from 'react';
import Article from './Article';
import articles from './films';

function PremiereList() {
  return (
    <div className="price-tags">
      <Article article={articles[0]} key={articles.id} />
      <Article article={articles[1]} key={articles.id} />
      <Article article={articles[2]} key={articles.id} />
    </div>
  );
}

export default PremiereList;