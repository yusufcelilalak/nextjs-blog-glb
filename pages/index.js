import Head from "next/head";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>glb.</title>
        <meta
          name="description"
          content="glb. A new approach to the blog websites. "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <h1>Home Page!</h1>
      </Layout>
    </>
  );
}
