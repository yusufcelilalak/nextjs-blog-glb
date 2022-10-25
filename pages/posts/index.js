import Head from "next/head";
import Layout from "../../components/Layout";
import PostsLayout from "../../components/PostsLayout";

const Posts = () => {
  return (
    <>
      <Head>
        <title>Posts</title>
        <meta name="description" content="Displaying all posts." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <PostsLayout />
      </Layout>
    </>
  );
};

export default Posts;
