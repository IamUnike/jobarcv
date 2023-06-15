const MainInput = ({profileData, setProfileData, handleInputChange, photo, setPhoto}) => {
    return ( 
        <div className="cv-input">
            <ProfileInput profileData={profileData} setProfileData={setProfileData} handleInputChange={handleInputChange} photo={photo} setPhoto={setPhoto} />
     
            <EmploymentInput employments={employments} setEmployments={setEmployments} addEmployment={addEmployment} removeEmployment={removeEmployment} handleEmploymentChange={handleEmploymentChange} handleRoleChange={handleRoleChange} />

            <EducationInput education={education} setEducation={setEducation} addEducation={addEducation} handleEducationChange={handleEducationChange} removeEducation={removeEducation} />

            <Skills skillSetInput={skillSetInput} setSkillSetInput={setSkillSetInput} handleSkillChange={handleSkillChange} addSkill={addSkill} removeSkill={removeSkill} />
        </div>

     );
}
 
export default MainInput;