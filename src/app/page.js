import About from "@/Components/About";
import Contact from "@/Components/Contact";
import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";
import Skills from "@/Components/Skills";



export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "80px" }}>
        <Hero />
        <About />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
