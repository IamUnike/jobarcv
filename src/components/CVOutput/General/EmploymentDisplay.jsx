const EmploymentDisplay = ({employments}) => {
    return ( 
        <section className="employment-section">
                <h3> Employment History </h3>

                {employments.map((employment, index) => (
                    <div key={index}>
                        <h4 className="role">{employment.jobTitle}  </h4>
                        
                        <p> {employment.company}, {employment.companyCity}, {employment.companyCountry} </p>
                                        
                        <i className="duration">{employment.jobStart} - {employment.jobEnd} </i>

                        <ul>
                            {employment.roles.map((role, roleIndex) => (
                                <li key={roleIndex}>{role}</li>
                            ))}
                        </ul>
                    </div>
                ))}


      </section>
     );
}
 
export default EmploymentDisplay;