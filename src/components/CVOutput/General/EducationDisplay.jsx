const EducationDisplay = ({education}) => {
    return (
        <section className="education-section">
            <h3> Education </h3>

            {education.map((edu, index) => (
                <div key={index}>
                    <h4 className="university"> {edu.institution}, {edu.city}, {edu.country} </h4>

                    <p className="degree">{edu.course}</p>
    
                    <i className="duration"> {edu.schoolStart} - {edu.schoolEnd}  </i>
                </div>
            ))}
        </section>

      );
}
 
export default EducationDisplay;