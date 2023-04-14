import Link from "next/link";
import Image from "next/image";

const Home = ({ data }) => {
  return (
    <div className="home_body">
      {data.map((ev) => (
        <Link className="card" key={ev.id} href={`/events/${ev.id}`}>
          <div className="image">
            <Image width={300} height={300} alt={ev.title} src={ev.image} />
          </div>
          <div className="content">
            <h2>{ev.title}</h2>
            <p>{ev.description}</p>
          </div>
        </Link>
      ))}

      {/* height={'100%'} */}
      {/* <a href="/events/london">
      <img src="" />
      <h2>Events in london</h2>
      <p>
        It is a long established fact that a reader will be distracted by
        the readable content of a page when looking at its layout. The point
        of using Lorem Ipsum is that it has a more-or-less normal
        distribution of letters, as opposed to using 'Content here, content
        here', making it look like readable English. Many desktop publishing
        packages and web page editors now use Lorem Ipsum as their default
        model text, and a search for 'lorem ipsum' will uncover many web
        sites still in their infancy. Various versions have evolved over the
        years, sometimes by accident, sometimes on purpose (injected humour
        and the like)
      </p>
    </a>
    <a href="/events/sanfran">
      <img src="" />
      <h2>Events in San Fransico</h2>
      <p>
        It is a long established fact that a reader will be distracted by
        the readable content of a page when looking at its layout. The point
        of using Lorem Ipsum is that it has a more-or-less normal
        distribution of letters, as opposed to using 'Content here, content
        here', making it look like readable English. Many desktop publishing
        packages and web page editors now use Lorem Ipsum as their default
        model text, and a search for 'lorem ipsum' will uncover many web
        sites still in their infancy. Various versions have evolved over the
        years, sometimes by accident, sometimes on purpose (injected humour
        and the like)
      </p>
    </a>
    <a href="">
      <img src="" />
      <h2>Events in Barcelona</h2>
      <p>
        It is a long established fact that a reader will be distracted by
        the readable content of a page when looking at its layout. The point
        of using Lorem Ipsum is that it has a more-or-less normal
        distribution of letters, as opposed to using 'Content here, content
        here', making it look like readable English. Many desktop publishing
        packages and web page editors now use Lorem Ipsum as their default
        model text, and a search for 'lorem ipsum' will uncover many web
        sites still in their infancy. Various versions have evolved over the
        years, sometimes by accident, sometimes on purpose (injected humour
        and the like)
      </p>
    </a> */}
    </div>
  );
};

export default Home;
