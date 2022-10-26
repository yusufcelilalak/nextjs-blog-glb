import Head from "next/head";
import Layout from "../../components/Layout";
import PostDetails from "../../components/PostDetails";
import { MongoClient, ObjectId } from "mongodb";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";

const Post = (props) => {
  return (
    <>
      <Head>
        <title>{props.post.title}</title>
        <meta name="description" content={props.post.text} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <PostDetails post={props.post} />
      </Layout>
    </>
  );
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.n2vxatk.mongodb.net/blogposts?retryWrites=true&w=majority`
  );

  const db = client.db();

  const blogPostsCollection = db.collection("blogposts");

  const blogPosts = await blogPostsCollection.find({}, { _id: 1 }).toArray();

  console.log(blogPosts);

  client.close();

  return {
    fallback: "blocking",
    paths: blogPosts.map((blogPost) => ({
      params: { postId: blogPost._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const postId = context.params.postId;

  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.n2vxatk.mongodb.net/blogposts?retryWrites=true&w=majority`
  );

  const db = client.db();

  const blogPostsCollection = db.collection("blogposts");

  const blogPost = await blogPostsCollection.findOne({ _id: ObjectId(postId) });

  client.close();

  return {
    props: {
      post: {
        id: blogPost._id.toString(),
        title: blogPost.title,
        text: blogPost.text,
        image: blogPost.image,
        date: blogPost.date,
      },
    },
    revalidate: 1,
  };
}

export default Post;
