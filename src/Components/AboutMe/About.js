import React from 'react';
import Information from './Information/Information';
import Skills from './Skills/Skill';
import Certifications from './Certifications/Certifications'


class About extends React.Component{
   render() {
      return (
         <div className="mt-5" id="about">
            <Information/>
            <Skills />
            <Certifications />
         </div>
      )
   }
}

export default About