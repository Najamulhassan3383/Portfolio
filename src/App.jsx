import "./app.scss";
import Contact from "./components/contact/Contact.jsx";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import TechList from "./components/techlist/Techlist";
const techListData = {
  title: "Tech Stack",
  items: [
    { tech_color: "#4DB33D", tech_name: "MongoDB" },
    { tech_color: "#83CD29", tech_name: "Express.js" },
    { tech_color: "#61DBFB", tech_name: "React" },
    { tech_color: "#8CC84B", tech_name: "Node.js" },
    { tech_color: "#61DAFB", tech_name: "Python" },
    { tech_color: "#4DB33D", tech_name: "LangChain" },
    { tech_color: "#83CD29", tech_name: "C/C++" },
  ],
};

const App = () => {
  return (
    <div className="overflow-hidden">
      <Cursor />
      <section id="Homepage" className=" h-screen">
        <Navbar />
        <Hero />
      </section>
      <section id="Services" className="h-screen">
        <Parallax type="services" />
      </section>
      <TechList {...techListData} />
      <section id="Portfolio" className="  h-screen">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact" className="w-4/5 h-[500px] m-auto">
        <Contact />
      </section>
    </div>
  );
};

export default App;
