export default function Education(props) {
  const { items } = props;

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
