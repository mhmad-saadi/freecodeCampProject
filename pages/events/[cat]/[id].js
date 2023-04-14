import Image from "next/image";
import { useRef } from "react";
import { useRouter } from "next/router";

const EventPage = ({ data }) => {
  const email = useRef();
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const value = email.current.value;
    const eventid = router?.query.id;

    try {
      const response = await fetch("/api/email-registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: value, eventId: eventid }),
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
    } catch (e) {
      console.log("ERROR " + e);
    }
  };

  return (
    <div className="event_single_page">
      <Image src={data.image} alt={data.title} width={700} height={500} />
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <form onSubmit={onSubmit} className="email_registration">
        <label>Get Registered for this week</label>
        <input
          ref={email}
          id="emal"
          name="email"
          placeholder="please enter your email"
          type="email"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default EventPage;

export async function getStaticPaths() {
  const { allEvents } = await import("../../../data/data.json");

  const allPaths = allEvents.map((ev) => {
    return {
      params: {
        id: ev.id,
        cat: ev.city,
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  console.log("HELLOFROM " + context);
  const { allEvents } = await import("../../../data/data.json");
  const id = context.params.id;
  const eventData = allEvents.find((fl) => fl.id === id);

  return {
    props: { data: eventData },
  };
}
