import Head from "next/head";
import PageTitle from "@/components/pageTitle/pageTitle";

export default async function AboutUs() {
  return (
    <>
      <Head>
        <title>About Us</title>
      </Head>
      {/* Render the Builder page */}
      <h1>About Us</h1>
      <div>
        <p>
          Hey, we're really great!
        </p>
      </div>
    </>
  );
}