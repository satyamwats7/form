
import React from "react";
import image1 from "../Assest/image1.jpg";
import image2 from "../Assest/image2.jpg";
import image3 from "../Assest/image3.jpg";

const Design = () => {
 return (
  <>
   <div className="design">
    <h2>What brings you to Dribbble?</h2>
    <h6>Select the options that best describe you. Don't worry, you can explore other options later.</h6>

    <div className="image-container">
     <div className="image">
      <img src={image1} alt="Image 1" />
      <div className="text">I'm a designer looking to share my work</div>
      <label class="container1">
       <input type="checkbox" />
       <span class="checkmark"></span>
      </label>
     </div>
     <div className="image">
      <img src={image2} alt="Image 2" />
      <div className="text">I'm looking to hire a designer</div>
      <label class="container1">
       <input type="checkbox" />
       <span class="checkmark"></span>
      </label>
     </div>
     <div className="image">
      <img src={image3} alt="Image 3" />
      <div className="text">I'm looking for design inspiration</div>
      <label class="container1">
       <input type="checkbox" />
       <span class="checkmark"></span>
      </label>
     </div>
    </div>

    <button  className="btn">Finish</button>
   
   </div>
  </>
 );
}

export default Design;
