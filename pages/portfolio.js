import { useState, useEffect } from "react";
import Loader from "@/components/Loader";
import Projects from "@/components/Projects";

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
          <Projects />
        </section>
      )}
    </>
  );
}
