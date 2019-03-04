import React, {Component} from 'react';
import Menu from './Menu';

class Affiche extends Component {
  render() {
    return(
      <>
        <Menu />
        <div className="table" id="table">
          <div className="table-header">
            <h2>Select a Film</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, nobis.</p>
          </div>
          <div className="price-tags">
            <div className="price-tag">
              <img src="./img/dragon.jpg" alt="img"/>
              <span>How to Train Your Dragon: The Hidden World</span>
              <h4>110<sub>minutes</sub></h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse aliquam, ducimus reiciendis enim mollitia provident nostrum quidem beatae quo hic eaque? Quia voluptatem tempore, illo voluptatibus laborum architecto aperiam sequi.</p>
              <button className="price-btn">select a film</button>
            </div>
            <div className="price-tag">
              <img src="./img/alita.jpg" alt="img"/>
              <span>Alita: Battle Angel</span>
              <h4>130<sub>minutes</sub></h4>
              <p>Sit inventore exercitationem in facilis unde voluptatibus optio reprehenderit excepturi, deleniti dignissimos id, commodi, nobis omnis numquam rerum aut eaque, consequuntur. Autem possimus, fugit ut voluptatum delectus ab, nihil unde.</p>
              <button className="price-btn">select a film</button>
            </div>
            <div className="price-tag">
              <img src="./img/greenBook.jpg" alt="img"/>
              <span>Green Book</span>
              <h4>135<sub>minutes</sub></h4>
              <p>Dolorem ducimus voluptatum praesentium! Quibusdam doloremque, qui amet nemo ipsam sint distinctio, culpa in magni quo, hic sapiente! Blanditiis dolor quibusdam provident officiis veritatis accusamus sapiente deleniti cupiditate repellat temporibus.</p>
              <button className="price-btn">select a film</button>
            </div>
            <div className="price-tag">
              <img src="./img/vice.jpg" alt="img"/>
              <span>Vice</span>
              <h4>140<sub>minutes</sub></h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse aliquam, ducimus reiciendis enim mollitia provident nostrum quidem beatae quo hic eaque? Quia voluptatem tempore, illo voluptatibus laborum architecto aperiam sequi.</p>
              <button className="price-btn">select a film</button>
            </div>
            <div className="price-tag">
              <img src="./img/sevenDinners.jpg" alt="img"/>
              <span>Seven dinners</span>
              <h4>100<sub>minutes</sub></h4>
              <p>Sit inventore exercitationem in facilis unde voluptatibus optio reprehenderit excepturi, deleniti dignissimos id, commodi, nobis omnis numquam rerum aut eaque, consequuntur. Autem possimus, fugit ut voluptatum delectus ab, nihil unde.</p>
              <button className="price-btn">select a film</button>
            </div>
            <div className="price-tag">
              <img src="./img/dis.jpg" alt="img"/>
              <span>Disappearance</span>
              <h4>110<sub>minutes</sub></h4>
              <p>Dolorem ducimus voluptatum praesentium! Quibusdam doloremque, qui amet nemo ipsam sint distinctio, culpa in magni quo, hic sapiente! Blanditiis dolor quibusdam provident officiis veritatis accusamus sapiente deleniti cupiditate repellat temporibus.</p>
              <button className="price-btn">select a film</button>
            </div>
            <div className="price-tag">
              <img src="./img/speakerphone.jpg" alt="img"/>
              <span>Speakerphone</span>
              <h4>100<sub>minutes</sub></h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse aliquam, ducimus reiciendis enim mollitia provident nostrum quidem beatae quo hic eaque? Quia voluptatem tempore, illo voluptatibus laborum architecto aperiam sequi.</p>
              <button className="price-btn">select a film</button>
            </div>
            <div className="price-tag">
              <img src="./img/lego.jpg" alt="img"/>
              <span>Lego Movie 2</span>
              <h4>115<sub>minutes</sub></h4>
              <p>Sit inventore exercitationem in facilis unde voluptatibus optio reprehenderit excepturi, deleniti dignissimos id, commodi, nobis omnis numquam rerum aut eaque, consequuntur. Autem possimus, fugit ut voluptatum delectus ab, nihil unde.</p>
              <button className="price-btn">select a film</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Affiche;