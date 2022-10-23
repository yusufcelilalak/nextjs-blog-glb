import { Button, TextField } from "@mui/material";
import styles from "./BlogForm.module.css";

const BlogForm = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <TextField
          className={styles.inputs}
          id="outlined-basic"
          label="Title"
          variant="outlined"
          InputLabelProps={{ className: styles["input-labels"] }}
        />
        <TextField
          className={styles.inputs}
          id="outlined-basic"
          label="Image"
          variant="outlined"
          InputLabelProps={{ className: styles["input-labels"] }}
        />
        <TextField
          className={styles.inputs}
          id="outlined-textarea"
          label="Blog Text"
          placeholder="Write something..."
          InputLabelProps={{ className: styles["input-labels"] }}
          rows={6}
          multiline
        />
        <Button className={styles.button} variant="contained">
          Add New Post
        </Button>
      </form>
    </div>
  );
};

export default BlogForm;
