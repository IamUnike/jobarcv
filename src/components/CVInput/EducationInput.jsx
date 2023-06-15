
const EducationInput = ({education, setEducation, addEducation, removeEducation, handleEducationChange}) => {
  
  return (
    <form className="education-input" data-aos='fade-up' data-aos-duration='700'>
      <h3>Educational Qualifications</h3>

      {education.map((edu, educationIndex) => (
        <div className="each-education" key={educationIndex}>
          <input
            type="text"
            placeholder="Name of institution..."
            value={edu.institution}
            onChange={(e) =>
              handleEducationChange(
                educationIndex,
                'institution',
                e.target.value
              )
            }
          />

          <input
            type="text"
            placeholder="Degree and Course of study: for instance, MSc. Cybersecurity"
            value={edu.course}
            onChange={(e) =>
              handleEducationChange(educationIndex, 'course', e.target.value)
            }
          />

          <input
            type="text"
            placeholder="City"
            value={edu.city}
            onChange={(e) =>
              handleEducationChange(educationIndex, 'city', e.target.value)
            }
          />

          <input
            type="text"
            placeholder="Country"
            value={edu.country}
            onChange={(e) =>
              handleEducationChange(educationIndex, 'country', e.target.value)
            }
          />

          <input
            type="text"
            placeholder="Start date (Month, Year) "
            value={edu.schoolStart}
            onChange={(e) =>
              handleEducationChange(educationIndex, 'schoolStart', e.target.value)
            }
          />

          <input
            type="text"
            placeholder="End date (Month, Year) "
            value={edu.schoolEnd}
            onChange={(e) =>
              handleEducationChange(educationIndex, 'schoolEnd', e.target.value)
            }
          />

          <div className="action-btns">
            {education.length > 1 && (
              <button
                className="remove"
                onClick={() => removeEducation(educationIndex)}
              >
                Remove
              </button>
            )}

            <button className="add" onClick={addEducation}>
              Add
            </button>
          </div>
        </div>
      ))}
    </form>
  );
};

export default EducationInput;
