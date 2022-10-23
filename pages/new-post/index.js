import Head from "next/head";
import BlogForm from "../../components/BlogForm";
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
        <BlogForm />
      </Layout>
    </>
  );
};

export default NewPost;
