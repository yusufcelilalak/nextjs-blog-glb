import styles from "./PostDetails.module.css";

const PostDetails = ({ post }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img className={styles.image} src={post.image} alt="blog-post" />
      </div>

      <div className={styles.post}>
        <div className={styles.title}>
          <h2>{post.title}</h2>
        </div>
        <p className={styles.text}>{post.text}</p>
      </div>
    </div>
  );
};

export default PostDetails;
