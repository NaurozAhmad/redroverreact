import { Accommodation as IAccommodation, Resort } from "interfaces";

const Accommodation = (props: { resort: Resort | undefined}) => {
  return (
    <>
      <section>
        <h2>Accommodation</h2>
        {props.resort?.accommodations.map((accommodation: IAccommodation) => (
          <p key={accommodation.name}>
            {accommodation.name}: {accommodation.description}
          </p>
        ))}
      </section>
      <hr />
    </>
  );
};

export default Accommodation;
