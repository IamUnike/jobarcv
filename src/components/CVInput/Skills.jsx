const Skills = ({skillSetInput, handleSkillChange, addSkill, removeSkill}) => {

    return (
      <form className="skill-input" data-aos='fade-up' data-aos-duration='500'>
        <h3>Your Skills</h3>
  
        {/* Map over the skillSetInput array to render input fields for each skill */}
        {skillSetInput.map((skill, index) => (
          <div className="each-input" key={skill.id}>
            {/* Render an input field for the skill */}
            <input
              type="text"
              id={`skill-${index}`}
              placeholder={`skill-${index+1}`}
              value={skill.skill}
              onChange={(e) => handleSkillChange(index, e.target.value)}
            />
  
            <div className="action-btns">
              {skillSetInput.length > 1 && (
                <button className="remove" onClick={() => removeSkill(skill.id)}>
                  Remove
                </button>
              )}

                <button className="add" onClick={addSkill}>
                  Add
                </button>
            </div>

          </div>
        ))}
      </form>
      
    );
  };

export default Skills