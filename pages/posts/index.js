import Head from "next/head";
import Layout from "../../components/Layout";
import PostsLayout from "../../components/PostsLayout";
import { MongoClient } from "mongodb";

const DATA = [
  {
    id: 1,
    title: "First Day",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu lobortis arcu, in sagittis nunc. Nunc nibh ante, sodales non nulla et, eleifend gravida nisl. Donec imperdiet non odio ut cursus. Aenean suscipit, neque at pellentesque euismod, lacus ante scelerisque elit, tempor pharetra sem lectus iaculis turpis. Suspendisse consequat efficitur iaculis. Donec id arcu id mauris ultrices placerat. Morbi eleifend nibh vitae commodo euismod. Proin quis leo eget eros scelerisque aliquet. Aenean tempus mauris eu metus mollis, ut pretium turpis accumsan. Duis nibh quam, efficitur sed fermentum id, facilisis nec est. Quisque convallis augue sed congue lacinia. Ut volutpat vitae diam a lobortis.",
    image:
      "https://sdelanounas.ru/i/a/w/1/aW1nLWZvdGtpLnlhbmRleC5ydS9nZXQvNjAwMi8zMDM0ODE1Mi4xYjUvMF84NjhkNV80YjA2ZjViOV9vcmlnP19faWQ9NTk2NzI=.jpg",
  },
  {
    id: 2,
    title: "Second Day",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aismod, lacus ante scelerisque elit,  scelerisque aliquet. Aenean tempus mauris eu metus mollis, ut pretium turpis accumsan. Duis nibh quam, efficitur sed fermentum id, facilisis nec est. Quisque convallis augue sed congue lacinia. Ut volutpat vitae diam a lobortis.",
    image:
      "https://sdelanounas.ru/i/a/w/1/aW1nLWZvdGtpLnlhbmRleC5ydS9nZXQvNjAwMi8zMDM0ODE1Mi4xYjUvMF84NjhkNV80YjA2ZjViOV9vcmlnP19faWQ9NTk2NzI=.jpg",
  },
  {
    id: 3,
    title: "Third Day",
    text: "Let non odio ut cursus. Aenean suscipit, neque at pellentesque euismod, lacus ante scelerisque elit, tempor pharetra sem lectus iaculis turpis. Suspendisse consequat efficitur iaorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu lobortis arcu, in sagittis nunc. Nunc nibh ante, sodales non nulla et, eleifend gravida nisl. Donec imperdculis. Donec id arcu id mauris ultrices placerat. Morbi eleifend.",
    image:
      "https://sdelanounas.ru/i/a/w/1/aW1nLWZvdGtpLnlhbmRleC5ydS9nZXQvNjAwMi8zMDM0ODE1Mi4xYjUvMF84NjhkNV80YjA2ZjViOV9vcmlnP19faWQ9NTk2NzI=.jpg",
  },
  {
    id: 4,
    title: "Fourth Day",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bue euismod, lacus ante scelerisque elit, tempor pharetra sem lectus iaculis turpis. Suspendisse consequat efficitur iaculis. Donec id arcu id mauris ultrices placerat. Morbi eleifend.",
    image:
      "https://sdelanounas.ru/i/a/w/1/aW1nLWZvdGtpLnlhbmRleC5ydS9nZXQvNjAwMi8zMDM0ODE1Mi4xYjUvMF84NjhkNV80YjA2ZjViOV9vcmlnP19faWQ9NTk2NzI=.jpg",
  },
  {
    id: 5,
    title: "Fifth Day",
    text: "Leuismod, lacus ante scelerisque elit, tempor pharetra sem lectus iaculis turpis. Suspendisse consequat efficitur iaculis. Donec id arcu id mauris ultrices placerat. Morbi eleifend.",
    image:
      "https://sdelanounas.ru/i/a/w/1/aW1nLWZvdGtpLnlhbmRleC5ydS9nZXQvNjAwMi8zMDM0ODE1Mi4xYjUvMF84NjhkNV80YjA2ZjViOV9vcmlnP19faWQ9NTk2NzI=.jpg",
  },
];

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
