import React from 'react';

import resume from '../../../images/resume/resume.pdf'

class Information extends React.Component{
   render() {
      return (
         <div className=""  id="back-image">
            <div className="dark-overlay py-5">
               <div className="container">
                  <div className="row text-center">
                     <div className="col text-light py-5">
                        <h2 className="py-2">FEW WORDS ABOUT FAROQUE HASNAT</h2>
                        <p className="lead px-md-5 mx-md-5 text-justify">
                        I am a full-stack web developer. I also have experience in graphics design. I can make web applications from sketch & love to work with modern/new technology. I have been working as a Web Developer over the last 3 years. I also present on YouTube the channel name is 'Twinkle Cats'. I am working on freelancer.com & fiverr.com. <br/><br/>My educational background is I am a student & study in BBA final year at Chowmuhani Govt. S A College. I have completed HSC exam in 2016 from Chowmuhani Govt. S A College & SSC exam in 2014 from Akhlashpur Fazil Degree Madrasha.
                        </p>
                        <a href={resume} download><button type="button" className="btn btn-info">DOWNLOAD RESUME</button></a>
                        <a href="https://www.freelancer.com/u/faroquehasnat" target="blank" className="btn btn-dark ml-2">HIRE ME</a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}

export default Information