
//   import React, { useState } from 'react';
//   const Profile = () => {
//   const [profile, setProfile] = useState('');
//   const handleFileInputChange = (e) => {
  
//    setProfile(URL.createObjectURL(e.target.files[0]));
//   };

//   return (
//    <div className="profile">
//     <h2>Welcome! Let's create your profile</h2>
//     <h5>Let others get to know you better! You can do these later.</h5>
//     <h3>Add An Avatar</h3>
   
//     <input type="file" onChange={handleFileInputChange} />
//     {profile && <img src={profile} alt="Profile Avatar" style={{ width: '100px', height: '100px', borderRadius: '70%', float: 'Left', marginRight: '10px' }} />}
//     <h5>Or choose one of our defaults:</h5>
  
  
      
//       <label className='Location'>
//         <h3>Add your Location:</h3>
//         <input type="text" className="Location" name="location" />
//       </label>
//       <a href="#"> <button class="btn1">Button</button> </a> 
     

    
  
//    </div>
//   );
//  };

//  export default Profile;

import React, { useState } from 'react';

const Profile = () => {
  const [profile, setProfile] = useState('');

  const handleFileInputChange = (e) => {
    setProfile(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="profile">
      <h2>Welcome! Let's create your profile</h2>
      <h5>Let others get to know you better! You can do these later.</h5>
      <h3>Add An Avatar</h3>

      <input type="file" onChange={handleFileInputChange} />
      {profile && (
        <img
          src={profile}
          alt="Profile Avatar"
          style={{
            width: '150px',
            height: '150px',
            borderRadius: '70%',
            float: 'left',
            marginRight: '10px',
          
           
          }}
        />
      )}
      <h5> Or choose one of our defaults:</h5>

      <label className='Location'>
        <h5>Add your Location:</h5>
        <input type="text" className="Location" name="location" />
      </label>
      <button className="btn1">Button</button>
    </div>
  );
};

export default Profile;

 