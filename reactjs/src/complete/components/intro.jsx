function Intro (props) {
  const { aboutMe, age, description, welcomeMessage, goal } = props;

  return (
    <section className="intro">
      <p>{aboutMe}</p>
      <p>I am {age} years old, which is {age * 7} in dog years.</p>
      <p>{description}</p>
      <p>{welcomeMessage}</p>
      <p>{goal}</p>
    </section>
  )
};

export default Intro;