function starRating(number) {
  let stars = '';
  for (let index = 1; index <= number; index++) {
    stars += '⭐';
  }
  return stars;
}

export default function Hobbies (props) {
  const {items} = props;
  const renderHobbies = items.map(hobby => {
    const {id, title, passion, description} = hobby;

    return (
      <div className="feature hobby" key={id}>
        <p><b>{title}</b> {starRating(passion)}</p>
        <p>{description}</p>
      </div>
    );
  });

  let initialRating = 0;
  const totalRating = items.reduce((acc, curr) => acc + curr.passion, initialRating);

  return (
    <>
      <h2>Hobbies</h2>
      <section className="hobbies">
        {renderHobbies}
        <span>Total passion: {totalRating} ⭐</span><br/>
      </section>
    </>
  );
}