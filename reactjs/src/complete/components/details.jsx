export default function Details(props) {
  const { address, emailAddress, city, phoneNumber, story, secondStory } = props;

  return (
    <section id="details" className="details">
      <p>I live at {address} in the cool town of {city}</p>
      <p>If you need help, you can often call me at <a href={`tel:${phoneNumber}`}>{phoneNumber}</a> or send an e-mail to <a href={`mailto:${emailAddress}`}>{emailAddress}</a></p>
      <p>Ever seen lorem ipsum? {story} </p>
      <p>{secondStory} </p>
    </section>
  );
}
