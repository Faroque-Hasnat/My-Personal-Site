import React from 'react';
import Image from '../../../images/responsive1.png';


class Certifications extends React.Component{

   state = {
      Image: [
         {URL: 'https://www.freecodecamp.org/certification/faroquehasnat/responsive-web-design', url: Image}, 
         {URL: 'https://www.freecodecamp.org/certification/faroquehasnat/responsive-web-design', url: Image}, 
         {URL: 'https://www.freecodecamp.org/certification/faroquehasnat/responsive-web-design', url: Image}, 
         {URL: 'https://www.freecodecamp.org/certification/faroquehasnat/responsive-web-design', url: Image}
      ]
   }

   render() {
      let image = this.state.Image

      return (
         <div className="t-5 py-5 bg-secondary">
            <div className="container">
               <div className="text-center text-white py-3">
                  <h2 className="text-light">CERTIFICATIONS</h2>
                  <h5 className="text-light">There Are Some Certifications, I Achieved</h5>
               </div>
               <div className="row pb-md-3">
                  {
                     image.map(img => {
                        return (
                           <div className="col-md-3 mt-md-4 mt-2">
                              <a className="" href={img.URL} target="blank">
                                 <img src={img.url} className="img-thumbnail img-fluid" alt="Img" />
                              </a>
                           </div>
                        )
                     })
                  }
               </div>
            </div>
         </div>
      )
   }
}

export default Certifications