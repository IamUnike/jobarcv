
const BioDisplay = ({profileData, photo}) => {
    return ( 
        <section className="bio-section">
            <div className="image-area">
                <img src={photo} alt="the user avatar" loading='lazy' />
            </div>
            
            <h3> {profileData.fullName} </h3>

            <p> {profileData.profession} </p> 
            <hr style={{width: '80%', margin: '10px auto 0', color: 'lightgray', opacity: '0.5'}} />
        </section>

     );
}
export default BioDisplay;