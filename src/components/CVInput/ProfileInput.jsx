import getPhotoUrl from "get-photo-url";
import { useState } from "react";

const ProfileInput = ({profileData, handleInputChange, setPhoto, photo}) => {
  const [photoNotify, setPhotoNotify] = useState(false)

  const updatePhoto = async () => {
      const newPhoto = await getPhotoUrl('#photoInput')
      setPhoto(newPhoto)
      setPhotoNotify(true)
  }

  
    return (
      <form className="profile-input" data-aos='fade-up' data-aos-duration='500'>
        <h3>Profile Information</h3>
  
        <input
          type="text"
          id="fullname"
          placeholder="Enter your fullname..."
          value={profileData.fullName}
          onChange={(e) => handleInputChange("fullName", e.target.value)}
        />
  
        <input
          type="text"
          id="profession"
          placeholder="Your profession"
          value={profileData.profession}
          onChange={(e) => handleInputChange("profession", e.target.value)}
        />
  
        <input
          type="number"
          id="phone"
          placeholder="Phone number"
          value={profileData.phone}
          onChange={(e) => handleInputChange("phone", e.target.value)}
        />
  
        <input
          type="email"
          id="email"
          placeholder="Enter your email address"
          value={profileData.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
        />

        <input
          type="text"
          id="address"
          placeholder="Enter your city and country of residence"
          value={profileData.address}
          onChange={(e) => handleInputChange("address", e.target.value)}
        />
  
        <textarea
          name=""
          id="description"
          cols="30"
          rows="5"
          placeholder="Enter a short description about what you do"
          value={profileData.description}
          onChange={(e) => handleInputChange("description", e.target.value)}
        ></textarea>

        <div className="photo-cont">
          <input type="file" id="photoInput" name="photo" accept="image/*" style={{display:'none'}} />
          <label htmlFor="photoInput"  onClick={updatePhoto}>
            <div title="Click to add your profile photo" role="button" className="addPhotoBtn"> Add Photo </div>
          </label>

          {photoNotify && <p className="photo-notify">Photo added succesfully... </p> }
        </div>
        
      </form>
    );
  };
  
  export default ProfileInput;
  