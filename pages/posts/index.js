import Head from "next/head";
import Layout from "../../components/Layout";
import PostsLayout from "../../components/PostsLayout";
import { MongoClient } from "mongodb";

const Posts = (props) => {
  return (
    <>
      <Head>
        <title>Posts</title>
        <meta name="description" content="Displaying all posts." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <PostsLayout posts={props.posts} />
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.n2vxatk.mongodb.net/blogposts?retryWrites=true&w=majority`
  );

  const db = client.db();

  const blogPostsCollection = db.collection("blogposts");

  const blogPosts = await blogPostsCollection.find().toArray();

  client.close();

  return {
    props: {
      posts: blogPosts.map((blogPost) => ({
        title: blogPost.title,
        text: blogPost.text,
        image: blogPost.image,
        date: blogPost.date,
        id: blogPost._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default Posts;
