import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExpandAlt } from '@fortawesome/free-solid-svg-icons'
import 'uikit/dist/js/uikit'
import 'uikit/dist/js/uikit-icons'
import 'uikit/dist/css/uikit.min.css'

import img1 from '../../images/money-app1.png'
import img2 from '../../images/money-app2.png'
import img3 from '../../images/house-rent.png'

import './style.css'
import Countdown from './Countdown/Countdown';

class Portfolio extends React.Component{

   state = {
      Image: [
         {class: 'full-stack', url: img1, caption: 'http://money-app-tutorial.herokuapp.com/'}, 
         {class: 'full-stack', url: img2, caption: 'http://money-app-tutorial.herokuapp.com/'}, 
         {class: 'full-stack', url: img3, caption: 'http://houserent-app.herokuapp.com/'}
      ], 
      mixCall: 'all'
   }

   changeHandler = (mixCall) => {
      this.setState({
         mixCall
      })
   }

   render() {

      let portImage = this.state.Image
      let mixCall = this.state.mixCall
      
      return (
         <div className="pt-5" id="portfolio">
            <div className="container portfolio py-5">
               <div className="text-center py-3">
                  <h2>PORTFOLIO</h2>
                  <h4>There Are Some of My Previous works</h4>
               </div>
               <div className="controls">
                  <ul>
                     <li onClick={() => this.changeHandler('all')}>All</li>
                     <li onClick={() => this.changeHandler('full-stack')}>Full-Stack</li>
                     <li onClick={() => this.changeHandler('web-design')}>Web Design</li>
                     <li onClick={() => this.changeHandler('ui-design')}>UI design</li>
                  </ul>
               </div>
               <div className="port-item" uk-lightbox="animation: fade">
                  <div className="container">
                  <div className="row">
                     {portImage.map(img => {
                        if(img.class === mixCall) {
                           return (
                              <div className="col-md-4 my-3">
                                 <div className="item">
                                    <img src={img.url} alt="img" className="img-fluid border"/>
                                    <div className="item-button">
                                       <a className="" href={img.url}
                                       data-caption={img.caption}
                                       >
                                          <FontAwesomeIcon className="portIcon" icon={faExpandAlt}/>
                                       </a>
                                    </div>
                                 </div>
                              </div>
                           )
                        } else if(mixCall === 'all') {
                           return (
                              <div className="col-md-4 my-3">
                                 <div className="item">
                                    <img src={img.url} alt="img" className="img-fluid border"/>
                                    <div className="item-button">
                                       <a className="" href={img.url}
                                       data-caption={img.caption}
                                       >
                                          <FontAwesomeIcon className="portIcon" icon={faExpandAlt}/>
                                       </a>
                                    </div>
                                 </div>
                              </div>
                           )
                        } else return null
                     })}
                  </div>
                  </div>
               </div>
            </div>
            <Countdown />
         </div>
      )
   }
}

export default Portfolio