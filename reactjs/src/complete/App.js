import './App.css';
import intro from './data/intro.json';
import details from './data/details.json';
import work from './data/work.json';
import education from './data/education.json';
import hobbies from './data/hobbies.json';

function getWork(items) {
  return items.map((job, index) => {
      const {id, role, company, location, skills, period} = job;
      const allCapsCompany = company.toUpperCase();

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

function getEducation(items) {
  return items.map((school, index) => {
    const {id, degree, institute, location, certificate, period} = school;
    return (
      <div className="feature school" key={id}>
        <p>Degree: {degree}</p>
        <p>Institute: {institute}</p>
        <p>Located at: {location}</p>
        <p>Received a certificate: {certificate ? '👍' : '👎'}</p>
        <p>Period: {period}</p>
      </div>
    )
  });
}

// Custom React Element
const Hobbies = (props) => {
  const {hobbies} = props;
  const renderHobbies = hobbies.items.map((hobby, index) => {
    const {id, title, passion} = hobby;

    return (
      <div className="feature hobby" key={id}>
        <p>{title} {passion}/5</p>
      </div>
    );
  });

  let initialRating = 0;
  const totalRating = hobbies.items.reduce((acc, curr) => acc + curr.passion, initialRating);

  return (
    <>
      <h2>Hobbies</h2>
      <section className="hobbies">
        <p>Total passion: {totalRating}</p>
        { renderHobbies }
      </section>
    </>
  );
}

function App() {
  return (
    <div className="app">
      <header>
        <h2>Welcome to my online portfolio</h2>
      </header>

      <section className="intro">
        {/* Hint: Use paragraph tags <p> */}

        <p>{ intro.aboutMe }</p>
        <p>{ intro.description }</p>
        <p>{ intro.welcomeMessage }</p>
        <p>{ intro.goal }</p>
      </section>

      <h2>Some more things about me</h2>
      <section id="details" className="details">
        <p>I live at { details.address} in the cool town of { details.city }</p>
        <p>If you need help, you can often call me at <a href={`tel:${details.phoneNumber}`}>{details.phoneNumber}</a> or send an e-mail to <a href={`mailto:${details.emailAddress}`}>{ details.emailAddress }</a></p>
        <p>Ever seen lorem ipsum? { details.story11 } </p>
        <p>{ details.story2 } </p>
      </section>

      <h2>Work experience</h2>
      <section id="work" className="work">
        { getWork(work.items) }
      </section>

      <h2>Education</h2>
      <section id="education" className="education">
        { getEducation(education.items) }
      </section>

      <Hobbies hobbies={hobbies} />
    </div>
  );
}

export default App;
