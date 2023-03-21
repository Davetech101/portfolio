import { useState, useEffect } from "react";
import Loader from "@/components/Loader";
import Form from "@/components/Form";
import Section from "@/components/Section";
import AppHead from "@/components/Head";


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
          <AppHead>
            <title>David Enomah</title>
          </AppHead>
          <Form />
        </Section>
      )}
    </>
  );
}
