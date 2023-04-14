import HomePage from "../src/components/home/home-page";

export default function Home(props) {
  const { data } = props;
  console.log(data);

  return (
    <div>
      {/* <Header></Header> */}
      <HomePage data={data} />
      {/* <Footer></Footer> */}
    </div>
  );
}

export async function getServerSideProps() {
  const { events_categories } = await import("../data/data.json");
  console.log(events_categories);

  return {
    props: {
      data: events_categories,
    },
  };
}
