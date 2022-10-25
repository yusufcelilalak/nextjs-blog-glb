import BlogPost from "./BlogPost";
import styles from "./PostsLayout.module.css";

const DATA = [
  {
    title: "First Day",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu lobortis arcu, in sagittis nunc. Nunc nibh ante, sodales non nulla et, eleifend gravida nisl. Donec imperdiet non odio ut cursus. Aenean suscipit, neque at pellentesque euismod, lacus ante scelerisque elit, tempor pharetra sem lectus iaculis turpis. Suspendisse consequat efficitur iaculis. Donec id arcu id mauris ultrices placerat. Morbi eleifend nibh vitae commodo euismod. Proin quis leo eget eros scelerisque aliquet. Aenean tempus mauris eu metus mollis, ut pretium turpis accumsan. Duis nibh quam, efficitur sed fermentum id, facilisis nec est. Quisque convallis augue sed congue lacinia. Ut volutpat vitae diam a lobortis.",
    image:
      "https://sdelanounas.ru/i/a/w/1/aW1nLWZvdGtpLnlhbmRleC5ydS9nZXQvNjAwMi8zMDM0ODE1Mi4xYjUvMF84NjhkNV80YjA2ZjViOV9vcmlnP19faWQ9NTk2NzI=.jpg",
  },
  {
    title: "Second Day",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aismod, lacus ante scelerisque elit,  scelerisque aliquet. Aenean tempus mauris eu metus mollis, ut pretium turpis accumsan. Duis nibh quam, efficitur sed fermentum id, facilisis nec est. Quisque convallis augue sed congue lacinia. Ut volutpat vitae diam a lobortis.",
    image:
      "https://sdelanounas.ru/i/a/w/1/aW1nLWZvdGtpLnlhbmRleC5ydS9nZXQvNjAwMi8zMDM0ODE1Mi4xYjUvMF84NjhkNV80YjA2ZjViOV9vcmlnP19faWQ9NTk2NzI=.jpg",
  },
  {
    title: "Third Day",
    text: "Let non odio ut cursus. Aenean suscipit, neque at pellentesque euismod, lacus ante scelerisque elit, tempor pharetra sem lectus iaculis turpis. Suspendisse consequat efficitur iaorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu lobortis arcu, in sagittis nunc. Nunc nibh ante, sodales non nulla et, eleifend gravida nisl. Donec imperdculis. Donec id arcu id mauris ultrices placerat. Morbi eleifend.",
    image:
      "https://sdelanounas.ru/i/a/w/1/aW1nLWZvdGtpLnlhbmRleC5ydS9nZXQvNjAwMi8zMDM0ODE1Mi4xYjUvMF84NjhkNV80YjA2ZjViOV9vcmlnP19faWQ9NTk2NzI=.jpg",
  },
  {
    title: "Fourth Day",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bue euismod, lacus ante scelerisque elit, tempor pharetra sem lectus iaculis turpis. Suspendisse consequat efficitur iaculis. Donec id arcu id mauris ultrices placerat. Morbi eleifend.",
    image:
      "https://sdelanounas.ru/i/a/w/1/aW1nLWZvdGtpLnlhbmRleC5ydS9nZXQvNjAwMi8zMDM0ODE1Mi4xYjUvMF84NjhkNV80YjA2ZjViOV9vcmlnP19faWQ9NTk2NzI=.jpg",
  },
  {
    title: "Fifth Day",
    text: "Leuismod, lacus ante scelerisque elit, tempor pharetra sem lectus iaculis turpis. Suspendisse consequat efficitur iaculis. Donec id arcu id mauris ultrices placerat. Morbi eleifend.",
    image:
      "https://sdelanounas.ru/i/a/w/1/aW1nLWZvdGtpLnlhbmRleC5ydS9nZXQvNjAwMi8zMDM0ODE1Mi4xYjUvMF84NjhkNV80YjA2ZjViOV9vcmlnP19faWQ9NTk2NzI=.jpg",
  },
];

const PostsLayout = () => {
  return (
    <div className={styles.layout}>
      {DATA.map((post) => {
        return <BlogPost post={post} />;
      })}
    </div>
  );
};

export default PostsLayout;
