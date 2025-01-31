import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Reliability from "./components/Reliability";
import Footer from "./components/Footer";
import WebPresence from "./components/WebPresence";
import Insights from "./components/Insights";
import Monitering from "./components/Monitering";

const Home = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col min-h-screen bg-background">
        <main className="flex-1">
          <Hero />
          <Features />
          <WebPresence/>
          <Insights />
          <Monitering />
          <Pricing />
          <Reliability />
        </main>
      </div>
      <Footer/>
    </>
  );
};

export default Home;
