import React from 'react';
import { Link, hashHistory } from 'react-router';





class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div >
        <h2>This is the home page</h2>
        <div id="contentContainer">
          <p>What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>

        </div>


        <div id="myCarousel" className="carousel slide" data-ride="carousel">

          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
            <li data-target="#myCarousel" data-slide-to="3"></li>
            <li data-target="#myCarousel" data-slide-to="4"></li>
          </ol>


          <div className="carousel-inner" role="listbox">
            <div className="item active">
              <img src="http://avatarbox.net/avatars/img19/homer_jamaica_avatar_picture_18399.gif" alt="location" />
              <div className="carousel-caption">
                <h3>Location</h3>
                <p>The description of the perticular location should be here.</p>
              </div>
            </div>

            <div className="item">
              <img src="http://4.bp.blogspot.com/-QPT_vEZdYcc/VPV6jSHYbdI/AAAAAAAAAPI/sFVQx0KHfmA/s1600/54ac66dd-68de-4999-9231-bc674d21980d_Pemandangan-matahari-tenggelam-di-Ujung-Genteng.jpg" alt="location" />
              <div className="carousel-caption">
                <h3>Location</h3>
                <p>The description of the perticular location should be here.</p>
              </div>
            </div>

            <div className="item">
              <img src="http://avatarbox.net/avatars/img19/homer_jamaica_avatar_picture_18399.gif" alt="location" />
              <div className="carousel-caption">
                <h3>Location</h3>
                <p>The description of the perticular location should be here.</p>
              </div>
            </div>

            <div className="item">
              <img src="http://www.animated-gifs.eu/category_cartoons/avatars-100x100-cartoons-spongebob/0038.gif" alt="location" />
              <div className="carousel-caption">
                <h3>Location</h3>
                <p>The description of the perticular location should be here.</p>
              </div>
            </div>

            <div className="item">
              <img src="http://4.bp.blogspot.com/-QPT_vEZdYcc/VPV6jSHYbdI/AAAAAAAAAPI/sFVQx0KHfmA/s1600/54ac66dd-68de-4999-9231-bc674d21980d_Pemandangan-matahari-tenggelam-di-Ujung-Genteng.jpg" alt="location" />
              <div className="carousel-caption">
                <h3>Location</h3>
                <p>The description of the perticular location should be here.</p>
              </div>
            </div>
          </div>

          <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>




      </div>
    );
  }
}



export default Homepage;