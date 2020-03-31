import React from 'react';

const Youtube = () => {
   return (
      <div className="container py-5 mt-3">
         <div className="row">
            <div className="col-lg-6 rounded py-3">
               <h3 className="border-bottom border-dark pb-2"> What is modern web development?</h3>
               <p className="lead text-justify">In my opinion, “modern web development” — driven by the mobile revolution — amounts to attempting to achieve the user experience and business utility expected from native applications, but in the web browser environment. The web browser is itself an application, so you are writing an application within an application, rather than directly on top of the operating system (e.g. Android, iOS in mobile, Windows or macOS or linux in laptop). Writing an application within a browser means writing JavaScript which is the only language for which browsers provide a “runtime environment.”<br/> <br/> However, if you want to know more you can subscribe to my YouTube channel. Because there I talk about modern web technology.</p>
               <a href="https://www.youtube.com/channel/UCl5ou11lEFclCNoIFFzlYTw?sub_confirmation=1" target="blank" className="btn btn-outline-danger">SUBSCRIBE NOW</a>
            </div>
            <div className="col-lg-6 text-center mt-3 mt-md-5">
               <iframe 
                  width="100%" 
                  height="100%" 
                  minheight="350px"
                  className="box-shadow rounded"
                  title="video"
                  src="" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
               ></iframe>
            </div>
         </div>
      </div>
   )
}

export default Youtube