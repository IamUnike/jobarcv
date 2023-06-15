const SkillDisplay = ({skillSetOutput, skillSetInput}) => {
    return ( 
        <section className="skills-section">
                <h3> Skills </h3>

                {skillSetOutput.map((skillOuput, index) => (
                    <div key={skillSetInput[index].id}>
                        <li> {skillSetInput[index].skill} </li>
                    </div>
                ))}  
            </section>
     );
}
 
export default SkillDisplay;