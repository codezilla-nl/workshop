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
// import LikeButton from './components/likeButton';

function App() {
    return (
    <div className="app">
      <header>
        <h2>Welcome to my online portfolio</h2>
      </header>

      <Intro
        aboutMe={intro.aboutMe}
        age={intro.age}
        description={intro.description}
        welcomeMessage={intro.welcomeMessage}
        goal={intro.goal}
      />

      {/* <LikeButton
        color="blue"
      /> */}

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
      <section id="work" className="work">
        <Work
          items={work.items}
        />
      </section>

      <h2>Education</h2>
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
