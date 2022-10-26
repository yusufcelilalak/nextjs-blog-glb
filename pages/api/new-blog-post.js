import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.n2vxatk.mongodb.net/blogposts?retryWrites=true&w=majority`
    );

    const db = client.db();

    const blogPostsCollection = db.collection("blogposts");

    const result = await blogPostsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Blog Post inserted!" });
  }
}

export default handler;
