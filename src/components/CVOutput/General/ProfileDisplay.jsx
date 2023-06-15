const ProfileDisplay = ({profileData}) => {
    return ( 
        <section className="profile-section">
            <h3> Profile </h3>
            <p className="description"> {profileData.description} </p>
        </section>
     );
}
 
export default ProfileDisplay;