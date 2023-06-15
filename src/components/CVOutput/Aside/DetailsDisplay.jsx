const DetailsDisplay = ({profileData}) => {
    return ( 
        <section className="details-section">
            <h3> Details </h3>

            <div>
                
                <div className="details-cont">
                    <i className="fa fa-phone"></i>
                    <p className="details">{profileData.phone}</p>
                </div> 

                <div className="details-cont">
                    <i className="fa fa-envelope"></i>
                    <p className="details">{profileData.email}</p>
                </div> 

                <div className="details-cont">
                    <i className="fa fa-map-marker"></i>
                    <p className="details address">{profileData.address}</p>
                </div> 

            </div>
        </section>

     );
}
 
export default DetailsDisplay;