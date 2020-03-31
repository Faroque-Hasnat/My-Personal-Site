import React from 'react';


class Footer extends React.Component{
   render() {
      return (
         <div className="bg-dark" id="footer">
            <div className="container text-center text-light py-3">
               <div className="row">
                  <div className="col">
                     <p className="lead mb-0">Copyright 2020 &copy; <span className="text-primary">Faroque Hasnat</span></p>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}

export default Footer