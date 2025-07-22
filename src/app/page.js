import Header from "./component/header";
import Achivements from "./section/achivement";
import Benefits from "./section/benefits";
import Comparison from "./section/comparison";
import Growth from "./section/growth";
import Hero from "./section/Hero";
import HowItWorks from "./section/howItWorks";
import Integration from "./section/Integrations";

export default function Home() {
  return (
    <div className="lg:grid lg:grid-rows-[20px_1fr_20px] items-center lg:min-h-screen py-6 font-[family-name:var(--font-geist-sans)] overflow-hidden ">
      <Header />
      <main className="flex flex-col gap-8 lg:row-start-2 justify-center items-center ">
        <Hero />
        <Growth />
        <Comparison />
        <Benefits />
        <Achivements />
        <HowItWorks />
        <Integration />
      </main>
    </div>
  )}