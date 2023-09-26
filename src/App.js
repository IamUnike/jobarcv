import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import CVInput from "./components/CVinput";
import CVOutput from "./components/CVoutput";

import { useRef } from 'react';
import { useReactToPrint } from "react-to-print";
import defaultPhoto from './assets/profile-icon.png'

import { useState } from 'react'


function App() {
  //for animation on scroll
      useEffect(() => {
        AOS.init()
    }, [])


    
// initial and state values for profile information
  const [profileData, setProfileData] = useState({
    fullName: '',
    profession: '',
    phone: '',
    email: '',
    address: '',
    description: '',
  });

  const [photo, setPhoto] = useState(defaultPhoto)

  
  const handleInputChange = (field, value) => {
    setProfileData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };


// initial and state values for employment information
    const [employments, setEmployments] = useState([
      {
        company: '',
        jobTitle: '',
        companyCity: '',
        companyCountry: '',
        jobStart: '',
        jobEnd: '',
        roles: ['', ''],
      },
    ]);

    const addEmployment = (event) => {
      event.preventDefault()
      
      setEmployments((prevEmployments) => [
        ...prevEmployments,
        {
          company: '',
          jobTitle: '',
          companyCity: '',
          companyCountry: '',
          jobStart: '',
          jobEnd: '',
          roles: ['', ''],
        },
      ]);
    };
  
    const removeEmployment = (index) => {
      setEmployments((prevEmployments) =>
        prevEmployments.filter((employment, i) => i !== index)
      );
    };
  
    const handleEmploymentChange = (index, field, value) => {
      setEmployments((prevEmployments) => {
        const updatedEmployments = [...prevEmployments];
        updatedEmployments[index][field] = value;
        return updatedEmployments;
      });
    };
  
    const handleRoleChange = (employmentIndex, roleIndex, value) => {
      setEmployments((prevEmployments) => {
        const updatedEmployments = [...prevEmployments];
        updatedEmployments[employmentIndex].roles[roleIndex] = value;
        return updatedEmployments;
      });
    };




//initial and state values for education input
    const [education, setEducation] = useState([
      {
        institution: '',
        course: '',
        city: '',
        country: '',
        schoolStart: '',
        schoolEnd: '',
      },
    ]);
  
    const addEducation = (event) => {
      event.preventDefault();
  
      setEducation((prevEducation) => [
        ...prevEducation,
        {
          institution: '',
          course: '',
          city: '',
          country: '',
          schoolStart: '',
          schoolEnd: '',
        },
      ]);
    };
  
    const removeEducation = (index) => {
      setEducation((prevEducation) =>
        prevEducation.filter((edu, i) => i !== index)
      );
    };
  
    const handleEducationChange = (index, field, value) => {
      setEducation((prevEducation) => {
        const updatedEducation = [...prevEducation];
        updatedEducation[index][field] = value;
        return updatedEducation;
      });
    };

    
// initial and state values for skill input
    const [skillSetInput, setSkillSetInput] = useState([
        {
          skill: '',
          id: Date.now(),
        },
      ]);
      let index = 0

// initial and state values for skill output
      const [skillSetOutput, setSkillSetOutput] = useState([
        {
          skill: skillSetInput[index].skill,
          id: skillSetInput[index].id,
        },
      ]);

//add a new skill input and output
    const addSkill = (event) => {
      event.preventDefault();
    
      const newSkill = {
        skill: '',
        id: Date.now(),
      };
      setSkillSetInput(prevSkillSetInput => [...prevSkillSetInput, newSkill]);
      setSkillSetOutput(prevSkillSetOutput => [...prevSkillSetOutput, newSkill]);
    };
  
// Function to remove an input field for a skill
    const removeSkill = (id) => {
      const updatedSkillSetInput = skillSetInput.filter(skill => {
        return skill.id !== id
      }) 
      setSkillSetInput(updatedSkillSetInput);
      
      // Update the skillSetOutput state based on the updated skillSetInput
        const updatedSkillSetOutput = updatedSkillSetInput.map(skill => ({
          skill: skill.skill,
          id: skill.id,
        }));
        setSkillSetOutput(updatedSkillSetOutput);
    };

//this function handles a change in skill
    const handleSkillChange = (index, value) => {
      // Create a copy of the skillSetInput array
      const updatedSkillSetInput = [...skillSetInput];
      // Update the skill value at the specified index
      updatedSkillSetInput[index].skill = value;
      // Update the state with the new skillSetInput array
      setSkillSetInput(updatedSkillSetInput);
    };

      //in charge of printing pdf
    const componentRef = useRef()
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
      documentTitle: `${profileData.fullName} Resume`,
    })

    //handling bg and text color
    const [bgColor, setBgColor] = useState('rgb(93,4,4)')
    const [textColor, setTextColor] = useState('white')

    
  return (
    <div className="cv-app">
       <Navbar/>

       <Routes>
          <Route path="/" element={ <Home /> } ></Route>
          <Route path="cvcreate" element={ <CVInput profileData={profileData} setProfileData={setProfileData} handleInputChange={handleInputChange} photo={photo} setPhoto={setPhoto} employments={employments} setEmployments={setEmployments} addEmployment={addEmployment} removeEmployment={removeEmployment} handleEmploymentChange={handleEmploymentChange} handleRoleChange={handleRoleChange} education={education} setEducation={setEducation} addEducation={addEducation} handleEducationChange={handleEducationChange} removeEducation={removeEducation} skillSetInput={skillSetInput} setSkillSetInput={setSkillSetInput} handleSkillChange={handleSkillChange} addSkill={addSkill} removeSkill={removeSkill} bgColor={bgColor} setBgColor={setBgColor} textColor={textColor} setTextColor={setTextColor}  /> } ></Route>
          <Route path="cvcreate/cvoutput" element={ <CVOutput profileData={profileData} setProfileData={setProfileData} handleInputChange={handleInputChange} skillSetOutput={skillSetOutput}  skillSetInput={skillSetInput} handleSkillChange={handleSkillChange} setSkillSetOutput={setSkillSetOutput} removeSkill={removeSkill} photo={photo} bgColor={bgColor} textColor={textColor} employments={employments} education={education} componentRef={componentRef} handlePrint={handlePrint} /> } ></Route>
       </Routes>
      
    </div>
  );
}

export default App;
