import React from 'react';
import './style.css'


class Contact extends React.Component{

   state = {
      firstName: "",
      lastName: "",
      subject: "",
      phone: "",
      email: "",
      massage: ""
   }

   render() {

      let { firstName, lastName, subject, phone, email, massage } = this.state

      return (
         <div className="" id="contact">
            <div className="container py-5">
               <div className="py-5 text-center">
                  <h2>CONTACT ME</h2>
                  <h5>Contact Me If You Have Any Questions or Others Enquiry</h5>
               </div>
               <div className="row">
                  <div className="col-md-8 mt-md-0 mt-3">
                     <div className="card">
                        <div className="card-body">
                           <h5 className="text-center py-3">Please fill out this form to contact me</h5>
                           <form 
                              action="https://formspree.io/faroquehasnat@gmail.com"
                              method="POST"
                           >
                              <div className="form-row">
                                 <div className="form-group col-6">
                                    <label htmlFor="firstName">First Name:</label>
                                    <input 
                                       type="text" 
                                       className="form-control form-control-sm"
                                       id="firstName"
                                       placeholder="First Name:"
                                       value={firstName}
                                    />
                                 </div>
                                 <div className="form-group col-6">
                                    <label htmlFor="lastName">Last Name:</label>
                                    <input 
                                       type="text" 
                                       className="form-control form-control-sm"
                                       id="lastName"
                                       placeholder="Last Name:"
                                       value={lastName}
                                    />
                                 </div>
                                 <div className="form-group col-6">
                                    <label htmlFor="email">Email:</label>
                                    <input 
                                       type="email" 
                                       className="form-control form-control-sm"
                                       id="email"
                                       placeholder="Email:"
                                       value={email}
                                    />
                                 </div>
                                 <div className="form-group col-6">
                                    <label htmlFor="phone">Phone:</label>
                                    <input 
                                       type="number" 
                                       className="form-control form-control-sm"
                                       id="phone"
                                       placeholder="Phone:"
                                       value={phone}
                                    />
                                 </div>
                                 <div className="form-group col-12">
                                    <label htmlFor="subject">Subject:</label>
                                    <input 
                                       type="text" 
                                       className="form-control form-control-sm"
                                       id="subject"
                                       placeholder="Subject:"
                                       value={subject}
                                    />
                                 </div>
                                 <div className="form-group col-12">
                                    <label htmlFor="massage">Massage:</label>
                                    <textarea 
                                       type="text" 
                                       rows="5"
                                       className="form-control form-control-sm"
                                       id="massage"
                                       placeholder="Massage:"
                                       value={massage}
                                    />
                                 </div>
                                 <input 
                                    type="button" 
                                    className="btn btn-dark btn-block"
                                    value="Submit"
                                 />
                              </div>
                           </form>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-4 mt-md-0 mt-3">
                     <div className="card">
                        <div className="card-body">
                           <h5>Get In Touch</h5>
                           <p>Chowmuhani South Bazar, Goodam Road, Behind of Asroom.</p>
                           <h5>Address</h5>
                           <p>Din Islam's House, Chowmuhani-3821, Begumgonj, Noakhali, Bangladesh</p>
                           <h5>Email</h5>
                           <p><a href="https://mail.google.com/mail/u/0/?tab=wm1#inbox?compose=GTvVlcSDbtzQnbcXkbcGPzDFRQTZbCGkvThBPtxMBlBpVtTmxXqLzGpNnVbnthxfMkMLTkRJxZNvh" target="blank">faroquehasnat@gamil.com</a></p>
                           <h5>Phone</h5>
                           <p className="mb-2">01633116496</p>
                           <p>01831070268</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}

export default Contact