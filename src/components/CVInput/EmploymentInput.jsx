import EachEmployment from "./EachEmployment";

const EmploymentInput = ({employments, addEmployment, removeEmployment, handleEmploymentChange, handleRoleChange}) => {

  
  return (
    <form className="employment-input" data-aos='fade-up' data-aos-duration='500'>
      <h3>Employment History</h3>

      <EachEmployment employments={employments} addEmployment={addEmployment} removeEmployment={removeEmployment} handleEmploymentChange={handleEmploymentChange} handleRoleChange={handleRoleChange} />
      
    </form>
  );
};

export default EmploymentInput;


