import React from 'react';
import Slider from './slider/slider';
import Youtube from './youtube/youtube';


class Home extends React.Component{
   render() {
      return (
         <div className="" id="home">
            <Slider />
            <Youtube />
         </div>
      )
   }
}

export default Home