import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Loader from "@/components/Loader";
import Head from "next/head";

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
          <Head>
            <title>David Enomah</title>
          </Head>
          <Hero />
        </Section>
      )}
    </>
  );
}
