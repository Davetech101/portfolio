import { useState, useEffect } from "react";
import Loader from "@/components/Loader";
import AboutMe from "@/components/AboutMe";
import Section from "@/components/Section";

export default function About() {
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
        <Section>
          <AboutMe />
        </Section>
      )}
    </>
  );
}
