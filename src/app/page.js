import Banner from "./components/Banner";
import CardGrid from "./components/CardGrid";
import friendsData from "../../public/data.json";

export default function Home() {
  return (
    <>
      <div className="px-10 sm:px-20 md:px-25 lg:px-45 xl:px-60 py-20 flex flex-col justify-center bg-[#f8fafc]">
        <Banner friendsData={friendsData}></Banner>
        <CardGrid friendsData={friendsData}></CardGrid>
      </div>
    </>
  );
}
