import Head from "next/head";
import Layout from "../../components/Layout";

const Posts = () => {
  return (
    <>
      <Head>
        <title>Posts</title>
        <meta name="description" content="Displaying all posts." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <h1>Posts Page!</h1>
      </Layout>
    </>
  );
};

export default Posts;
