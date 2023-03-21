import { useState, useEffect } from "react";
import Loader from "@/components/Loader";
import AboutMe from "@/components/AboutMe";
import Section from "@/components/Section";
import Head from "next/head";


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
          <Head>
            <title>David Enomah</title>
          </Head>
          <AboutMe />
        </Section>
      )}
    </>
  );
}
