import Hero from "@/components/Hero";
import Loader from "@/components/Loader";
import Section from "@/components/Section";

export default function Home() {
  return (
    <Section type="home">
      <Loader/>
      <Hero />
    </Section>
  );
}
