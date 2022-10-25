import Head from "next/head";
import Layout from "../../components/Layout";
import PostDetails from "../../components/PostDetails";

const Post = (props) => {
  return (
    <>
      <Head>
        <title>Posts</title>
        <meta name="description" content="Displaying all posts." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <PostDetails />
      </Layout>
    </>
  );
};

export default Post;
