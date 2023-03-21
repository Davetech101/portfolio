import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Loader from "@/components/Loader";

export default function Home() {
  const [loading, SetLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      SetLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Section type="home">
          <Hero />
        </Section>
      )}
    </>
  );
}
