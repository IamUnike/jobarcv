import { ChangeColorBtn, ChangeTextColorBtn } from "./CVInput/ChangeColorBtn";
import ProfileInput from "./CVInput/ProfileInput";
import EmploymentInput from "./CVInput/EmploymentInput";
import EducationInput from "./CVInput/EducationInput";
import Skills from "./CVInput/Skills";
import { Link } from "react-router-dom";

const CVInput = ({profileData, setProfileData, handleInputChange, photo, setPhoto, employments, setEmployments, addEmployment, removeEmployment, handleEmploymentChange, handleRoleChange, education, setEducation, addEducation, handleEducationChange, removeEducation, skillSetInput, setSkillSetInput, handleSkillChange, addSkill, removeSkill, bgColor, setBgColor, textColor, setTextColor}) => {
    return ( 
            <div className="cv-input" >
                
                <ProfileInput profileData={profileData} setProfileData={setProfileData} handleInputChange={handleInputChange} photo={photo} setPhoto={setPhoto} />
                
                <EmploymentInput employments={employments} setEmployments={setEmployments} addEmployment={addEmployment} removeEmployment={removeEmployment} handleEmploymentChange={handleEmploymentChange} handleRoleChange={handleRoleChange} />

                <EducationInput education={education} setEducation={setEducation} addEducation={addEducation} handleEducationChange={handleEducationChange} removeEducation={removeEducation} />

                <Skills skillSetInput={skillSetInput} setSkillSetInput={setSkillSetInput} handleSkillChange={handleSkillChange} addSkill={addSkill} removeSkill={removeSkill} />

                <div className='color-btns'>
                    <ChangeColorBtn bgColor={bgColor} setBgColor={setBgColor} /> 
                    <ChangeTextColorBtn textColor={textColor} setTextColor={setTextColor} /> 
                </div>

                <Link to='/cvcreate/cvoutput'>
                    <button className='previewBtn'> Preview CV </button>
                </Link>
              

            </div>
        
        
     );
}
 
export default CVInput;