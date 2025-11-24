import BrandNames from "@/components/Home/Brand Names/BrandNames";
import Hero from "@/components/Home/Hero/Hero";
import LatestPhones from "@/components/Home/Latest Phones/LatestPhones";
import Stats from "@/components/Home/Stats/Stats";

export default function Home() {
  return (
    <div className="mt-15 bg-base-300 px-5 md:px-20 py-10">
      <Hero></Hero>
      <div className="text-center mt-15 md:mt-20">
        <h3 className="md:text-4xl text-2xl font-bold">Everything You Need to Choose Your Perfect Phone</h3>
        <p className="md:text-xl mt-5">From the latest releases to trusted brands, explore and compare phones effortlessly.</p>
      </div>
      <Stats></Stats>
      <BrandNames></BrandNames>
      <LatestPhones></LatestPhones>
    </div>
  );
}
