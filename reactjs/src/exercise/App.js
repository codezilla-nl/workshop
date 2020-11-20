import './App.css';
import intro from './data/intro.json';
import details from './data/details.json';
import work from './data/work.json';
import education from './data/education.json';
import hobbies from './data/hobbies.json';

function getWork(items) {
  return items.map((job, index) => {
  const {id, role, company, location, skills, period} = job;
      return (
        <div className="job" key={id}>
          <p>{role}</p>
          <p>{company}</p>
          <p>{location}</p>
          <p>{skills}</p>
          <p>{period}</p>
        </div>
      );
  });
}

// "id": 0,
// "role": "",
// "company": "",
// "location": "",
// "skills": ["HTML","CSS3","JS","ReactJS"],
// "period": "YYYY-MM - YYYY-MM"
function getEducation(items) {
  return items.map((job, index) => {
      return (<p key={index}>{job.period}</p>);
  });
}
function getHobbies(items) {
  return items.map((job, index) => {
      return (<p key={index}>{job.period}</p>);
  });
}
// const name = 'Rory';
// const element = <h1> Hello World {name} </h1>;

// const Element = () => {
//   return (<h1> Hello World </h1>);
// };
// <Element/>
function App() {
  return (
    <div className="app">
      <header>
        <h2>React Workshop</h2>
        <nav>
          <ul>
            <li><a href="#details" className="link">Details</a></li>
            <li><a href="#work" className="link">Work</a></li>
            <li><a href="#education" className="link">Education</a></li>
            <li><a href="#hobbies" className="link">Hobbies</a></li>
          </ul>
        </nav>
      </header>

      <h2>Welcome to my online portfolio</h2>
      <section className="intro">
        {/* Hint: Use paragraph tags <p> */}

        <p>{ intro.aboutMe }</p>
        <p>{ intro.description }</p>
        <p>{ intro.welcomeMessage }</p>
        <p>{ intro.goal }</p>
      </section>

      <h2>Some more things about me</h2>
      <section className="details">
        <p>I live at { details.address} in the cool town of { details.city }</p>
        <p>If you need help, you can often call me at <a href={`tel:${details.phoneNumber}`}>{details.phoneNumber}</a> or send an e-mail to <a href={`mailto:${details.emailAddress}`}>{ details.emailAddress }</a></p>
        <p>Ever seen lorem ipsum? { details.story11 } </p>
        <p>{ details.story2 } </p>
      </section>

      <h2>Work experience</h2>
      <section className="work">
        { getWork(work.items) }
      </section>

      <h2>Education</h2>
      <section className="education">
        {
          education.items.map((school, index) => {
            return (
              <>
              <p>{school.period}</p>
              <p>{school.period}</p>
              <p>{school.period}</p>
              <p>{school.period}</p>
              </>
            )
          })
        }
      </section>
      <h2>Hobbies</h2>
      <section className="hobbies">
        {
          hobbies.items.map((hobby, index) => {
            return (<p key={index}>{hobby.period}</p>)
          })
        }
      </section>
    </div>
  );
}

export default App;
