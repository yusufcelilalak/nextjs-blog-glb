import BlogPost from "./BlogPost";
import styles from "./PostsLayout.module.css";

const PostsLayout = (props) => {
  return (
    <div className={styles.layout}>
      {props.posts.map((post) => {
        return <BlogPost post={post} />;
      })}
    </div>
  );
};

export default PostsLayout;
