import Head from "next/head";
import { Banner } from "../components/banner.component";
import { Footer } from "../components/footer.component";
import { Header } from "../components/header.component";
import { LargeCard } from "../components/large.component";
import { MediumCard } from "../components/medium.card.component";
import { SmallCard } from "../components/small.card.component";

export default function Home({ exploreData, cardData }) {
  // console.log(cardData);
  return (
    <div className="">
      <Head>
        <title>Ibk Air BnB</title>
        <link rel="icon" href="/airbnb_logo.png" />
      </Head>
      <Header />
      <Banner />
      <main className="max-w-6xl mx-auto px-6 sm:px-10 ">
        <section className="pt-6 mb-3 ">
          <h2 className="text-3xl font-semibold pb-5 ">Explore Nearby</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
            {exploreData &&
              exploreData?.map((item, index) => (
                <SmallCard
                  key={index}
                  img={item.img}
                  location={item.location}
                  distance={item.distance}
                />
              ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-6 ">Live Anywhere</h2>
          <div className="flex space-x-2 overflow-scroll scrollbar-hide  ">
            {cardData &&
              cardData?.map((item, index) => (
                <MediumCard key={index} img={item.img} title={item.title} />
              ))}
          </div>
        </section>
        <section className="">
          <LargeCard
            img="https://links.papareact.com/4cj"
            title="The Greatest Outdoors"
            description="Wishlists curated by Airbnb"
            buttonText="Get Inspired"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp")
    .then((res) => res.json())
    .catch((err) => console.error(err));
  const cardData = await fetch("https://links.papareact.com/zp1")
    .then((res) => res.json())
    .catch((err) => console.error(err));
  return {
    props: {
      exploreData,
      cardData,
    },
  };
}
