import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./BlogPost.module.css";

const BlogPost = (props) => {
  const router = useRouter();

  const showDetailsHandler = () => {
    router.push(`/posts/${props.post.id}`);
  };

  return (
    <div className={styles.post}>
      {console.log(props)}
      <img
        onClick={showDetailsHandler}
        className={styles.image}
        src={props.post.image}
        alt="blog-image"
      />
      <h2 className={styles.title}>{props.post.title}</h2>
      <div className={styles.text}>
        {props.post.text.length > 120
          ? `${props.post.text.substring(0, 120)}...`
          : props.post.text}
      </div>
    </div>
  );
};

export default BlogPost;
