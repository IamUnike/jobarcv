import Aside from "./CVOutput/Aside";
import General from "./CVOutput/General";

const CVOutput = ({componentRef, profileData, setProfileData, handleInputChange,skillSetOutput, skillSetInput, handleSkillChange, setSkillSetOutput, removeSkill, photo, bgColor, textColor, employments, education, handlePrint}) => {

    return ( 
        <>
            <div className="cv-output" ref={componentRef} data-aos='fade-up' data-aos-duration='700'>
                <Aside profileData={profileData} setProfileData={setProfileData} handleInputChange={handleInputChange} skillSetOutput={skillSetOutput}  skillSetInput={skillSetInput} handleSkillChange={handleSkillChange} setSkillSetOutput={setSkillSetOutput} removeSkill={removeSkill} photo={photo} bgColor={bgColor} textColor={textColor} />

                <General employments={employments} education={education} profileData={profileData} />
            </div>


            <button className='download' onClick={handlePrint}> Save as PDF </button> 
        </>
     );
}
 
export default CVOutput;