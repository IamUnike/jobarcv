import Aside from "./Aside";
import General from "./General";

const MainOutput = ({profileData, setProfileData, handleInputChange, skillSetOutput, skillSetInput, handleSkillChange, setSkillSetOutput, removeSkill, employments, education, photo}) => {
    return ( 
        <div className="cv-output">
                <Aside profileData={profileData} setProfileData={setProfileData} handleInputChange={handleInputChange} skillSetOutput={skillSetOutput}  skillSetInput={skillSetInput} handleSkillChange={handleSkillChange} setSkillSetOutput={setSkillSetOutput} removeSkill={removeSkill} photo={photo} />

                <General employments={employments} education={education} profileData={profileData} />
        </div>
     );
}
 
export default MainOutput;