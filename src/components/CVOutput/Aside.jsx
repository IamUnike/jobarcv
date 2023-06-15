import BioDisplay from './Aside/BioDisplay';
import DetailsDisplay from './Aside/DetailsDisplay';
import SkillDisplay from './Aside/SkillDisplay';


const Aside = ({profileData, skillSetOutput, skillSetInput, photo, bgColor, textColor}) => {
    

    return ( 
        <div className="aside" style={{backgroundColor:bgColor, color:textColor}}>
            {/* the user bio section */}
            <BioDisplay profileData={profileData} photo={photo} />

            {/* user extra details section */}
            <DetailsDisplay profileData={profileData} />

            {/* user skills section */}
            <SkillDisplay skillSetOutput={skillSetOutput} skillSetInput={skillSetInput} />
        </div>
     );
}
 
export default Aside;




