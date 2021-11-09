import { FC } from "react";

interface IHeading {
  tag?: string;
  text: string;
}

const Heading: FC<IHeading> = ({ tag, text }) => {
  const Tag = tag || "h1";
  return <Tag>{text}</Tag>;
};

export default Heading;
