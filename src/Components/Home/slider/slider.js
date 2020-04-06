import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookMessenger, faFacebookF, faLinkedinIn, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Slider = () => {
   return (
      <section id="home" className="bg-dark">
         <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
               <li data-slide-to="0" data-target="#myCarousel" className="active"></li>
               <li data-slide-to="1" data-target="#myCarousel"></li>
               <li data-slide-to="2" data-target="#myCarousel"></li>
            </ol>
            <div className="carousel-inner">
               <div className="carousel-item carousel-img-1 active">
                  <div className="container">
                     <div className="carousel-caption mb-3 pb-3 mb-sm-5 pb-sm-5 text-left">
                        <h2 className="display-4 text-light">Faroque Hasnat</h2>
                        <h5 className=" text-light">Web Designer & Developer</h5>
                        <a href="https://www.facebook.com/faroquehasnat" target="blank" className="btn btn-outline-light mx-1 my-3"><FontAwesomeIcon icon={faFacebookF} /></a>
                        <a href="https://www.facebook.com/messages/t/faroquehasnat" target="blank" className="btn btn-outline-light mx-1 my-3"><FontAwesomeIcon icon={faFacebookMessenger} /></a>
                        <a href="https://www.linkedin.com/in/faroque-hasnat-1766501a5/" target="blank" className="btn btn-outline-light mx-1 my-3"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                        <a href="https://github.com/Faroque-Hasnat" target="blank" className="btn btn-outline-light mx-1 my-3"><FontAwesomeIcon icon={faGithub} /></a>
                        <a href="https://www.instagram.com/faroquehasnat/" target="blank" className="btn btn-outline-light mx-1 my-3"><FontAwesomeIcon icon={faInstagram} /></a>
                     </div>
                  </div>
               </div>
               <div className="carousel-item carousel-img-2">
                  <div className="container opacity">
                     <div className="carousel-caption mb-3 pb-3 mb-sm-5 pb-sm-5">
                     <h2 className="display-4 text-light">Faroque Hasnat</h2>
                        <h5 className=" text-light">Reactjs Developer</h5>
                        <a href="https://www.facebook.com/faroquehasnat" target="blank" className="btn btn-outline-light mx-1 my-3"><FontAwesomeIcon icon={faFacebookF} /></a>
                        <a href="https://www.facebook.com/messages/t/faroquehasnat" target="blank" className="btn btn-outline-light mx-1 my-3"><FontAwesomeIcon icon={faFacebookMessenger} /></a>
                        <a href="https://www.linkedin.com/in/faroque-hasnat-1766501a5/" target="blank" className="btn btn-outline-light mx-1 my-3"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                        <a href="https://github.com/Faroque-Hasnat" target="blank" className="btn btn-outline-light mx-1 my-3"><FontAwesomeIcon icon={faGithub} /></a>
                        <a href="https://www.instagram.com/faroquehasnat/" target="blank" className="btn btn-outline-light mx-1 my-3"><FontAwesomeIcon icon={faInstagram} /></a>
                     </div>
                  </div>
               </div>
               <div className="carousel-item carousel-img-3">
                  <div className="container">
                     <div className="carousel-caption mb-3 pb-3 mb-sm-5 pb-sm-5 text-right">
                     <h2 className="display-4 text-light">Faroque Hasnat</h2>
                        <h5 className=" text-light">Nodejs Developer</h5>
                        <a href="https://www.facebook.com/faroquehasnat" target="blank" className="btn btn-outline-light mx-1 my-3"><FontAwesomeIcon icon={faFacebookF} /></a>
                        <a href="https://www.facebook.com/messages/t/faroquehasnat" target="blank" className="btn btn-outline-light mx-1 my-3"><FontAwesomeIcon icon={faFacebookMessenger} /></a>
                        <a href="https://www.linkedin.com/in/faroque-hasnat-1766501a5/" target="blank" className="btn btn-outline-light mx-1 my-3"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                        <a href="https://github.com/Faroque-Hasnat" target="blank" className="btn btn-outline-light mx-1 my-3"><FontAwesomeIcon icon={faGithub} /></a>
                        <a href="https://www.instagram.com/faroquehasnat/" target="blank" className="btn btn-outline-light mx-1 my-3"><FontAwesomeIcon icon={faInstagram} /></a>
                     </div>
                  </div>
               </div>
               <a href="#myCarousel" className="carousel-control-prev" data-slide="prev">
                  <span className="carousel-control-prev-icon"></span>
               </a>
               <a href="#myCarousel" className="carousel-control-next" data-slide="next">
                  <span className="carousel-control-next-icon"></span>
               </a>
            </div>
         </div>
      </section>
   )
}

export default Slider