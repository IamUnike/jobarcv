const EachEmployment = ({employments, addEmployment, removeEmployment, handleEmploymentChange, handleRoleChange}) => {
    return ( 
        <>
            {employments.map((employment, employmentIndex) => (
              <div className="each-employment" key={employmentIndex}>
                <input
                  type="text"
                  placeholder="Company name..."
                  value={employment.company}
                  onChange={(e) =>
                    handleEmploymentChange(
                      employmentIndex,
                      'company',
                      e.target.value
                    )
                  }
                />

                <input
                  type="text"
                  placeholder="Job title"
                  value={employment.jobTitle}
                  onChange={(e) =>
                    handleEmploymentChange(
                      employmentIndex,
                      'jobTitle',
                      e.target.value
                    )
                  }
                />

                <input
                  type="text"
                  placeholder="City"
                  value={employment.companyCity}
                  onChange={(e) =>
                    handleEmploymentChange(
                      employmentIndex,
                      'companyCity',
                      e.target.value
                    )
                  }
                />

                <input
                  type="text"
                  placeholder="Country"
                  value={employment.companyCountry}
                  onChange={(e) =>
                    handleEmploymentChange(
                      employmentIndex,
                      'companyCountry',
                      e.target.value
                    )
                  }
                />

                <input
                  type="text"
                  placeholder="Start date (Month, Year) "
                  value={employment.jobStart}
                  onChange={(e) =>
                    handleEmploymentChange(
                      employmentIndex,
                      'jobStart',
                      e.target.value
                    )
                  }
                />

                <input
                  type="text"
                  placeholder="End date (Month, Year) "
                  value={employment.jobEnd}
                  onChange={(e) =>
                    handleEmploymentChange(employmentIndex, 'jobEnd', e.target.value)
                  }
                />

                {employment.roles.map((role, roleIndex) => (
                  <input
                    type="text"
                    placeholder={`Role ${roleIndex + 1} at company`}
                    value={role}
                    key={roleIndex}
                    onChange={(e) =>
                      handleRoleChange(employmentIndex, roleIndex, e.target.value)
                    }
                  />
                ))}

                <div className="action-btns">
                  {employments.length > 1 && (
                    <button className="remove" onClick={() => removeEmployment(employmentIndex)}> Remove </button>
                  )}

                  <button className="add" onClick={addEmployment}> Add </button>
                </div>

              </div>
      ))}

        </>
     );
}
 
export default EachEmployment;