import React  from 'react'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll'


const Navbar = () => {
   return (
      <div >
      <div className="bg-dark" uk-sticky="top: 250; animation: uk-animation-slide-top; bottom: #sticky-on-scroll-up">
         <nav className="navbar navbar-expand-md navbar-dark p-md-2 container">
            <NavLink className="navbar-brand h1" to="/">FAROQUE HASNAT</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"
            >
               <span className="navbar-toggler-icon" ></span>
            </button>
            <div className="collapse navbar-collapse ml-3" id="navbarNav">
               <ul className="navbar-nav ml-auto">
               <li className="nav-item p-0 mr-2">
                     <div className="nav-link">
                        <Link 
                           className="nav-link cursor" 
                           activeClass="active"
                           to="home"
                           spy={true}
                           smooth={true}
                           hashSpy={true}
                           offset={-80}
                           duration={500}
                        >HOME</Link>
                     </div>
                  </li>
                  <li className="nav-item p-0 mr-2">
                     <div className="nav-link">
                        <Link 
                           className="nav-link cursor" 
                           activeClass="active"
                           to="about"
                           spy={true}
                           smooth={true}
                           hashSpy={true}
                           offset={-30}
                           duration={500}
                        >ABOUT</Link>
                     </div>
                  </li>
                  <li className="nav-item p-0 mr-2">
                     <div className="nav-link">
                        <Link 
                           className="nav-link cursor" 
                           activeClass="active"
                           to="services"
                           spy={true}
                           smooth={true}
                           hashSpy={true}
                           offset={-30}
                           duration={500}
                        >SERVICES</Link>
                     </div>
                  </li>
                  <li className="nav-item p-0 mr-2">
                     <div className="nav-link">
                        <Link 
                           className="nav-link cursor" 
                           activeClass="active"
                           to="portfolio"
                           spy={true}
                           smooth={true}
                           hashSpy={true}
                           offset={-30}
                           duration={500}
                        >PORTFOLIO</Link>
                     </div>
                  </li>
                  <li className="nav-item p-0 mr-2">
                     <div className="nav-link">
                        <Link 
                           className="nav-link cursor" 
                           activeClass="active"
                           to="contact"
                           spy={true}
                           smooth={true}
                           hashSpy={true}
                           offset={-30}
                           duration={500}
                        >CONTACT</Link>
                     </div>
                  </li>
                  {/* <li className="nav-item p-0 mr-2">
                     <div className="nav-link">
                        <Link 
                           className="nav-link btn btn-outline-primary" 
                           activeClass="active"
                           to="contact"
                           spy={true}
                           smooth={true}
                           hashSpy={true}
                           offset={-30}
                           duration={500}
                        >HIRE ME</Link>
                     </div>
                  </li> */}
               </ul>
            </div>
         </nav>
      </div>
      </div>
   )
}

export default Navbar