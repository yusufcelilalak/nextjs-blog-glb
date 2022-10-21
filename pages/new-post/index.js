import Head from "next/head";
import Layout from "../../components/Layout";

const NewPost = () => {
  return (
    <>
      <Head>
        <title>New Post</title>
        <meta name="description" content="Creating new blog post." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <h1>New Post Page!</h1>
      </Layout>
    </>
  );
};

export default NewPost;
