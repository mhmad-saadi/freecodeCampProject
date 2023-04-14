import Image from "next/image";
import Link from "next/link";

const EventsCatPage = ({ data, pageName }) => {
  return (
    <div className="cat_events">
      <h1>Event in {pageName} </h1>
      <div className="content">
        {data.map((ev) => (
          <Link
            className="card"
            key={ev.id}
            href={`/events/${ev.city}/${ev.id}`}
          >
            <Image width={300} height={300} alt={ev.title} src={ev.image} />
            <h2>{ev.title}</h2>
            <p>{ev.description}</p>
          </Link>
        ))}

        {/* <a href="/events/london/ev1">
          <img />
          <h2>Event 1</h2>
        </a>
        <a href="/events/event1">
          <img />
          <h2>Event 2</h2>
        </a>
        <a href="/events/event1">
          <img />
          <h2>Event 3</h2>
        </a>
        <a href="/events/event1">
          <img />
          <h2>Event 4</h2>
        </a> */}
      </div>
    </div>
  );
};

export default EventsCatPage;

export async function getStaticPaths() {
  const { events_categories } = await import("../../../data/data.json");
  const allPaths = events_categories.map((ev) => {
    return {
      params: {
        cat: ev.id.toString(),
      },
    };
  });

  return {
    fallback: false,
    paths: allPaths,
  };
}

export async function getStaticProps(context) {
  const id = context?.params.cat;
  const { allEvents } = await import("../../../data/data.json");
  const data = allEvents.filter((ev) => ev.city === id);

  return {
    props: { data, pageName: id },
  };
}
