import ProfileDisplay from "./General/ProfileDisplay";
import EmploymentDisplay from "./General/EmploymentDisplay";
import EducationDisplay from "./General/EducationDisplay";

const General = ({employments, education, profileData}) => {
    return ( 
        <div className="general">
            {/* user profile section */}
            <ProfileDisplay profileData={profileData} />

            {/* employment history section */}
            <EmploymentDisplay employments={employments} />
            
            {/* education history section */}
            <EducationDisplay education={education} />
        </div>
     );
}

export default General;

