import Heading from "./Heading";
import { FC } from "react";
import { IPost } from "../interfaces/Post";

export interface IPostProps {
  post: IPost;
}

const PostInfo: FC<IPostProps> = ({ post }) => {
  const { title, body } = post || {};

  if (!post) {
    return <Heading tag="h3" text="Empty post" />;
  }

  return (
    <>
      <Heading tag="h3" text={title} />
      <p>{body}</p>
    </>
  );
};

export default PostInfo;
