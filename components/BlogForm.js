import { Button, TextField } from "@mui/material";
import { useRouter } from "next/router";
import { useRef } from "react";
import { format } from "date-fns";
import styles from "./BlogForm.module.css";

const BlogForm = () => {
  const titleRef = useRef();
  const imageRef = useRef();
  const textRef = useRef();

  const router = useRouter();

  const submitHandler = async (event) => {
    event.preventDefault();

    const currentDate = format(new Date(), "yyyy-MM-dd HH:mm");

    const blogPostData = {
      title: titleRef.current.value,
      image: imageRef.current.value,
      text: textRef.current.value,
      date: currentDate,
    };

    const response = await fetch("/api/new-blog-post", {
      method: "POST",
      body: JSON.stringify(blogPostData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);

    router.push("/");
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>Add New Post</div>
      <form className={styles.form} onSubmit={submitHandler}>
        <TextField
          inputRef={titleRef}
          className={styles.inputs}
          id="outlined-basic"
          label="Title"
          variant="outlined"
          InputLabelProps={{ className: styles["input-labels"] }}
          required
        />
        <TextField
          inputRef={imageRef}
          className={styles.inputs}
          id="outlined-basic"
          label="Image URL"
          variant="outlined"
          InputLabelProps={{ className: styles["input-labels"] }}
          required
        />
        <TextField
          inputRef={textRef}
          className={styles.inputs}
          id="outlined-textarea"
          label="Blog Text"
          placeholder="Write something..."
          InputLabelProps={{ className: styles["input-labels"] }}
          rows={6}
          multiline
          required
        />
        <Button className={styles.button} variant="contained" type="submit">
          Add New Post
        </Button>
      </form>
    </div>
  );
};

export default BlogForm;
