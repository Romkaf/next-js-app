import PostInfo from "../../components/PostInfo";
import Layout from "../../components/Layout";
import { FC } from "react";
import { IPostProps } from "../../components/PostInfo";
import { GetStaticProps, GetStaticPaths } from "next";

const Post: FC<IPostProps> = ({ post }) => (
  <>
    <Layout title="Post">
      <PostInfo post={post} />
    </Layout>
  </>
);

//use SSG
export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`${process.env.API_HOST}/posts`);
  const data = await response.json();

  const paths = data.map(({ id }) => ({
    params: { id: id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { id } = ctx.params;
  const response = await fetch(`${process.env.API_HOST}/posts/${id}`);
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post: data },
  };
};

export default Post;
