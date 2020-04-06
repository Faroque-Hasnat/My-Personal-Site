import React from 'react';
import Image from '../../../images/myPic.png';

class Skills extends React.Component{
   render() {
      return (
         <div className="container mb-5">
            <div className="row mt-md-5 pt-5">
               <div className="col-md-8">
                  <h3 className=" text-dark">My Skills</h3>
                  <h5 className=" text-dark">Have More Then 3 Years Experience</h5>
                  <div className="mt-3">
                     <div className="container">
                     <div className="row">
                        <div className="col-10">
                           <p className="lead text-left d-inline">HTML5</p>
                        </div>
                        <div className="col-2 text-right">
                           <p className="lead d-inline">95%</p>
                        </div>
                     </div>
                     </div>
                     <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" id="html"></div>
                     </div>
                  </div>
                  <div className="mt-3">
                     <div className="container">
                     <div className="row">
                        <div className="col-10">
                           <p className="lead text-left d-inline">CSS3</p>
                        </div>
                        <div className="col-2 text-right">
                           <p className="lead d-inline">95%</p>
                        </div>
                     </div>
                     </div>
                     <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" id="css"></div>
                     </div>
                  </div>
                  <div className="mt-3">
                     <div className="container">
                     <div className="row">
                        <div className="col-10">
                           <p className="lead text-left d-inline">Javascript</p>
                        </div>
                        <div className="col-2 text-right">
                           <p className="lead d-inline">85%</p>
                        </div>
                     </div>
                     </div>
                     <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" id="javascript"></div>
                     </div>
                  </div>
                  <div className="mt-3">
                     <div className="container">
                     <div className="row">
                        <div className="col-10">
                           <p className="lead text-left d-inline">Bootstrap4</p>
                        </div>
                        <div className="col-2 text-right">
                           <p className="lead d-inline">95%</p>
                        </div>
                     </div>
                     </div>
                     <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" id="bootstrap"></div>
                     </div>
                  </div>
                  <div className="mt-3">
                     <div className="container">
                     <div className="row">
                        <div className="col-10">
                           <p className="lead text-left d-inline">ReactJS</p>
                        </div>
                        <div className="col-2 text-right">
                           <p className="lead d-inline">80%</p>
                        </div>
                     </div>
                     </div>
                     <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" id="react"></div>
                     </div>
                  </div>
                  <div className="mt-3">
                     <div className="container">
                     <div className="row">
                        <div className="col-10">
                           <p className="lead text-left d-inline">NodeJS</p>
                        </div>
                        <div className="col-2 text-right">
                           <p className="lead d-inline">80%</p>
                        </div>
                     </div>
                     </div>
                     <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" id="nodejs"></div>
                     </div>
                  </div>
                  <div className="mt-3">
                     <div className="container">
                     <div className="row">
                        <div className="col-10">
                           <p className="lead text-left d-inline">Adobe Photoshop</p>
                        </div>
                        <div className="col-2 text-right">
                           <p className="lead d-inline">85%</p>
                        </div>
                     </div>
                     </div>
                     <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" id="photoshop"></div>
                     </div>
                  </div>
                  <div className="mt-3">
                     <div className="container">
                     <div className="row">
                        <div className="col-10">
                           <p className="lead text-left d-inline">Adobe Illustrator</p>
                        </div>
                        <div className="col-2 text-right">
                           <p className="lead d-inline">75%</p>
                        </div>
                     </div>
                     </div>
                     <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" id="illustrator"></div>
                     </div>
                  </div>
               </div>
               <div className="col-md-4 mt-md-3 mt-5 d-none d-md-flex">
                  <img className="img-fluid rounded" src={Image} alt="Faroque Hasnat" />
               </div>
            </div>
         </div>
      )
   }
}

export default Skills