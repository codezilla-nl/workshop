import './App.css';

// Data
import intro from './data/intro.json';
import details from './data/details.json';
import work from './data/work.json';
import education from './data/education.json';
import hobbies from './data/hobbies.json';

// Components
import Intro from './components/intro';
import Details from './components/details';
import Work from './components/work';
import Education from './components/education';
import Hobbies from './components/hobbies';
// import {LikeButton} from './components/likeButton';

// function starRating(number) {
//   let stars = '';
//   for (let index = 1; index <= number; index++) {
//     stars += '⭐';
//   }
//   return stars;
// }

// function convertToUpperCase(company = '') {
//   return company.toUpperCase();
// }

// function getWork(items) {
//   return items.map((job, index) => {
//       const {id, role, company, location, skills, period} = job;
//       const allCapsCompany = convertToUpperCase(company);

//       return (
//         <div className="feature job" key={id}>
//           <p><b>Role</b>: {role}</p>
//           <p>Company: {allCapsCompany}</p>
//           <p>Location: {location}</p>
//           <p>Skills: {skills}</p>
//           <p>Period: {period}</p>
//         </div>
//       )
//   });
// }

// function getEducation(items) {
//   return items.map((school, index) => {
//     const {id, degree, institute, location, certificate, period} = school;
//     return (
//       <div className="feature school" key={id}>
//         <p>Degree: {degree}</p>
//         <p>Institute: {institute}</p>
//         <p>Located at: {location}</p>
//         <p>Received a certificate: {certificate ? '👍' : '👎'}</p>
//         <p>Period: {period}</p>
//       </div>
//     )
//   });
// }

// function Intro (props) {
//   const { aboutMe, age, description, welcomeMessage, goal } = props;

//   return (
//     <section className="intro">
//       <p>{aboutMe}</p>
//       <p>I am {age} years old, which is {age * 7} in dog years.</p>
//       <p>{description}</p>
//       <p>{welcomeMessage}</p>
//       <p>{goal}</p>
//     </section>
//   )
// };

// // Custom React Element
// function Hobbies (props) {
//   const {listOfHobbies} = props;
//   const renderHobbies = listOfHobbies.items.map((hobby, index) => {
//     const {id, title, passion, description} = hobby;

//     return (
//       <div className="feature hobby" key={id}>
//         <p><b>{title}</b> {starRating(passion)}</p>
//         <p>{description}</p>
//       </div>
//     );
//   });

//   let initialRating = 0;
//   const totalRating = hobbies.items.reduce((acc, curr) => acc + curr.passion, initialRating);

//   return (
//     <>
//       <h2>Hobbies</h2>
//       <section className="hobbies">
//         {renderHobbies}
//         <span>Total passion: {totalRating} ⭐</span><br/>
//       </section>
//     </>
//   );
// }

function App() {
    return (
    <div className="app">
      <header>
        <h2>Welcome to my online portfolio</h2>
      </header>
      {/* <LikeButton /> */}
      <Intro
        aboutMe={intro.aboutMe}
        age={intro.age}
        description={intro.description}
        welcomeMessage={intro.welcomeMessage}
        goal={intro.goal}
      />

      <h2>Some more things about me</h2>
      <Details
        city={details.city}
        emailAddress={details.emailAddress}
        address={details.address}
        phoneNumber={details.phoneNumber}
        story={details.story1}
        secondStory={details.story2}
      />

      <h2>Work experience</h2>
      {/* <section id="work" className="work">
        {getWork(work.items)}
      </section> */}
      <section id="work" className="work">
        <Work
          items={work.items}
        />
      </section>

      <h2>Education</h2>
      {/* <section id="education" className="education">
        {getEducation(education.items)}
      </section> */}
      <section id="education" className="education">
        <Education
          items={education.items}
        />
      </section>
      <Hobbies
        items={hobbies.items}
      />
    </div>
  );
}

export default App;
