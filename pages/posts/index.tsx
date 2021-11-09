import Heading from "../../components/Heading";
import Layout from "../../components/Layout";
import Link from "next/link";
import styles from "../../styles/list.module.scss";
import { FC } from "react";
import { IPost } from "../../interfaces/Post";

interface IPostProps {
  posts: IPost[];
}

const Posts: FC<IPostProps> = ({ posts }) => (
  <Layout title="Posts">
    <Heading text="Posts" />
    <ul className={styles.list}>
      {posts &&
        posts.map(({ id, title }) => (
          <li className={styles.list_item} key={id}>
            <Link href={`/posts/${id}`}>
              <a className={styles.list_link}>{title}</a>
            </Link>
          </li>
        ))}
    </ul>
  </Layout>
);

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.API_HOST}/posts`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts: data },
  };
};

export default Posts;
