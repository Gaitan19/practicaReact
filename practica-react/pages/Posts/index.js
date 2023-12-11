import Head from "next/head";
import Examples from "@/components/examples";
import Navbar from "@/components/Navbar";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Examples />
    </>
  );
}
