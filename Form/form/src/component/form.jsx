// FormComponent.jsx
import React, { useState } from 'react';
import image from "../Assest/image.png";
// import './FormComponent.css';

const FormComponent = () => {
 const [formData, setFormData] = useState({
  name: '',
  username: '',
  email: '',
  password: ''
 });

 const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({
   ...formData,
   [name]: value
  });
 };

 const handleSubmit = (e) => {
   e.preventDefault();
   if (!formData.agreeToTerms) {
     alert("Please agree to the terms before creating an account.");
     return;
   }

   console.log('Form submitted:', formData);
   
   setFormData({
     name: '',
     username: '',
     email: '',
     password: '',
     agreeToTerms: false
   });

   const googleFormUrl = 'https://docs.google.com/forms/d/1WOoixvkQLufxIFjKtSWMcquoGOvH7ERHq_DrKtucjik/edit';
   window.open(googleFormUrl, '_blank');
  };
  
  

 return (
 
  <div className="form-container">
   <img src={image} alt="" className="bg"></img>
   <div class="button-container">
       <h6 onClick={() => { window.location.href = '/signin'; }}>Already a member ?</h6>
       <h6 onClick={() => { window.location.href = '/signin'; }}>Sign In</h6>


    {/* <h6>Sign In</h6> */}
   </div>

   <h2>Sign up</h2>
   <form onSubmit={handleSubmit}>
    <div className="form-row">
     <div className="form-group">
      <label htmlFor="name">Name:</label>
      <input
       type="text"
       id="name"
       name="name"
       value={formData.name}
       onChange={handleChange}
       required
      />
     </div>
     <div className="form-group">
      <label htmlFor="username">Username:</label>
      <input
       type="text"
       id="username"
       name="username"
       value={formData.username}
       onChange={handleChange}
       required
      />
     </div>
    </div>
    <div className="form-group">
     <label htmlFor="email">Email:</label>
     <input
      type="email"
      id="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      required
     />
    </div>
    <div className="form-group">
     <label htmlFor="password">Password:</label>
     <input
      type="password"
      id="password"
      name="password"
      value={formData.password}
      onChange={handleChange}
      required
     />
     
    </div>

    <label class="container">
     <input type="checkbox" />
     <p>Creating an account means you're okay with our terms of Service , Privacy Policy, andf our default Notification Settings.</p>
      <span class="checkmark"></span>
    </label>

    
       <button type="submit">Create Account </button> 


     </form>
  
   </div>

  
   

  
 );
};

export default FormComponent;
