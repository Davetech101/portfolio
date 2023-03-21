import { useState, useEffect } from "react";
import Loader from "@/components/Loader";
import AboutMe from "@/components/AboutMe";
import Section from "@/components/Section";
import AppHead from "@/components/Head";


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
          <AppHead>
            <title>David Enomah</title>
          </AppHead>
          <AboutMe />
        </Section>
      )}
    </>
  );
}
