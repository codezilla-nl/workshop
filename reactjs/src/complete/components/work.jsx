
function convertToUpperCase(company = '') {
  return company.toUpperCase();
}

export default function Work(props) {
  const { items } = props;

  return items.map(job => {
      const {id, role, company, location, skills, period} = job;
      const allCapsCompany = convertToUpperCase(company);

      return (
        <div className="feature job" key={id}>
          <p><b>Role</b>: {role}</p>
          <p>Company: {allCapsCompany}</p>
          <p>Location: {location}</p>
          <p>Skills: {skills}</p>
          <p>Period: {period}</p>
        </div>
      )
  });
}