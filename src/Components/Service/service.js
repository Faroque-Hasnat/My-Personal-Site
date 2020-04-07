import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode, faCode, faSearchPlus, faMobileAlt, faFileAlt } from '@fortawesome/free-solid-svg-icons'
import { faWordpressSimple } from '@fortawesome/free-brands-svg-icons'

const ServiceItem = () => {
   return (
      <div className="" id="services">
      <div className="py-5 m-y-5 text-center align-center"  id="back2-image">
         <div className="dark-overlay">
         <div className="pt-5 container mt-3 text-center">
            <div className="row py-5 text-light">
               <div className="col text-center">
                  <h2 className="text-light">SERVICES</h2>
                  <h5 className=" text-light">Some of my main services are listed below. I provide different kind of services</h5>
               </div>
            </div>
            <div className="row text-center">
               <div className="col-md-4 col-6"  id="service-box">
                  <div className="mt-3 pt-3">
                     <div className="service-icon mb-5">
                        <span><FontAwesomeIcon className="icon" icon={faLaptopCode} /></span>
                     </div>
                     <div className="text-light">
                        <h4 className="text-light">WEB DESIGN</h4>
                        <p className="lead">Qualified web designs and attractive effects which catches visitor's Eye.</p>
                        <a href="https://www.fiverr.com/hasnat257256?up_rollout=true" className="btn btn-outline-info" target="blank">Click Here</a>
                     </div>
                  </div>
               </div>
               <div className="col-md-4 col-6"  id="service-box">
                  <div className="mt-3 pt-3">
                     <div className="service-icon mb-5">
                        <span><FontAwesomeIcon className="icon" icon={faCode} /></span>
                     </div>
                     <div className="text-light">
                        <h4 className="text-light">WEB DEVELOPMENT</h4>
                        <p className="lead">Clean and fresh issue free code to make your website dynamic perfectly.</p>
                        <a href="https://www.fiverr.com/hasnat257256?up_rollout=true" className="btn btn-outline-info" target="blank">Click Here</a>
                     </div>
                  </div>
               </div>
               <div className="col-md-4 col-6"  id="service-box">
                  <div className="mt-3 pt-3">
                     <div className="service-icon mb-5">
                        <span><FontAwesomeIcon className="icon" icon={faSearchPlus} /></span>
                     </div>
                     <div className="text-light">
                        <h4 className=" text-light">SEO</h4>
                        <p className="lead">Search Engine Optimization to make website high ranked and bring expected traffics on websites.</p>
                        <a href="https://www.fiverr.com/hasnat257256?up_rollout=true" className="btn btn-outline-info" target="blank">Click Here</a>
                     </div>
                  </div>
               </div>
               
               <div className="col-md-4 col-6"  id="service-box">
                  <div className="mt-3 pt-3">
                     <div className="service-icon mb-5">
                        <span><FontAwesomeIcon className="icon" icon={faMobileAlt} /></span>
                     </div>
                     <div className="text-light">
                        <h4 className="text-light">RESPONSIVE DESIGN</h4>
                        <p className="lead">Responsive Design which will be working almost all browsers and screens, Mobile, TaB, PC etc</p>
                        <a href="https://www.fiverr.com/hasnat257256?up_rollout=true" className="btn btn-outline-info" target="blank">Click Here</a>
                     </div>
                  </div>
               </div>
               
               <div className="col-md-4 col-6"  id="service-box">
                  <div className="mt-3 pt-3">
                     <div className="service-icon mb-5">
                        <span><FontAwesomeIcon className="icon" icon={faWordpressSimple} /></span>
                     </div>
                     <div className="text-light">
                        <h4 className="text-light">WORDPRESS</h4>
                        <p className="lead">Wordpress, Magento, E-Commerce, Prestashop Theme Development & Customization.</p>
                        <a href="https://www.fiverr.com/hasnat257256?up_rollout=true" className="btn btn-outline-info" target="blank">Click Here</a>
                     </div>
                  </div>
               </div>
               
               <div className="col-md-4 col-6"  id="service-box">
                  <div className="mt-3 pt-3">
                     <div className="service-icon mb-5">
                        <span><FontAwesomeIcon className="icon" icon={faFileAlt} /></span>
                     </div>
                     <div className="text-light">
                        <h4 className="text-light">WEB RESEARCH</h4>
                        <p className="lead">Admin Support, Microsoft Word, Excel, Powerpoint Slide, Internet marketing, Cpa marketing, Data mining etc etc.</p>
                        <a href="https://www.fiverr.com/hasnat257256?up_rollout=true" className="btn btn-outline-info" target="blank">Click Here</a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         </div>
      </div>
      </div>
   )
}

export default ServiceItem