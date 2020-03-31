import React from 'react';
import ServiceItem from './Service/service';
import About from './AboutMe/About';
import Home from './Home/Home';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact';


class Main extends React.Component{
   render() {
      return (
         <div>
            <Home />
            <About />
            <ServiceItem />
            <Portfolio />
            <Contact />
         </div>
      )
   }
}

export default Main