import { useState, useEffect } from "react";
import Loader from "@/components/Loader";
import Projects from "@/components/Projects";
import AppHead from "@/components/Head";


export default function Portfolio() {
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
        <section className="">
          <AppHead>
            <title>David Enomah</title>
          </AppHead>
          <Projects />
        </section>
      )}
    </>
  );
}
