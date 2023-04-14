import Image from "next/image";
import Link from "next/link";

const EventsPage = ({ data }) => {
  console.log("HELLO " + data);
  return (
    <div className="events_page">
     
      {data.map((ev) => (
        <Link className="card" key={ev.id} href={`/events/${ev.id}`}>
          <Image src={ev.image} alt={ev.title} width={400} height={400}></Image>
          <h2>{ev.title}</h2>
        </Link>
      ))}

      {/* <a href="">
          <img src="" />
          <h2>Events in london</h2>
        </a>
        <a href="">
          <img src="" />
          <h2>Events in San Fransico</h2>
        </a>
        <a href="">
          <img src="" />
          <h2>Events in Barcelona</h2>
        </a> */}
    </div>
  );
};

export default EventsPage;

export async function getStaticProps() {
  const { events_categories } = await import("../../data/data.json");
  return {
    props: {
      data: events_categories,
    },
  };
}
