import { useState, useEffect } from "react";
import Loader from "@/components/Loader";
import Form from "@/components/Form";
import Section from "@/components/Section";
import Head from "next/head";


export default function Contact() {
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
          <Form />
        </Section>
      )}
    </>
  );
}
