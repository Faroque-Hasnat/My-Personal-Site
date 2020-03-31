import React from 'react';
import CountUp from 'react-countup';

import './style.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandshake, faHeart, faMoon, faTrophy } from '@fortawesome/free-solid-svg-icons'

class Countdown extends React.Component{

   state = {
      item: [
         {icon: faHandshake, count: 250, title: 'PROJECT COMPLETED'},
         {icon: faHeart, count: 150, title: 'HAPPY CLIENTS'},
         {icon: faMoon, count: 1100, title: 'SLEEPLESS NIGHTS'},
         {icon: faTrophy, count: 15, title: 'WINNING AWARDS'}
      ]
   }

   render() {

      let counting = this.state.item

      return (
         <div className="text-center" id="countdown">
            <div className=" dark-overlay">
               <div className="container mt-md-3 py-5">
                     <div className="text-center text-light">
                        <h2>Life's Journey</h2>
                        <p className="lead">I never sleep when i'm tired, I sleep only when i'm Done!</p>
                     </div>
                  <div className="row">
                     {
                        counting.map(item => (
                           <React.Fragment>
                              <div className="col-md-3 py-2">
                                 <div className=" text-light">
                                    <div className="rounded">
                                       <div className="container">
                                          <div className=" row">
                                             <div className="col-6">
                                                <span className="countIcon">
                                                   <FontAwesomeIcon icon={item.icon} />
                                                </span>
                                             </div>
                                             <div className="col-6 p-0 py-3 text-left">
                                                <h2>
                                                   <CountUp 
                                                   start={0} 
                                                   end={item.count} 
                                                   delay={0}
                                                   duration={6}
                                                   >
                                                   {({ countUpRef }) => (
                                                      <div className="text-light">
                                                         <span className="" ref={countUpRef} />+
                                                      </div>
                                                   )}
                                                   </CountUp>
                                                </h2>
                                                <p className="h6">{ item.title }</p>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </React.Fragment>
                        ))
                     }
                  </div>
               </div>
            </div>
         </div>
      )
   }
}

export default Countdown