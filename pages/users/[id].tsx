import Layout from "../../components/Layout";
import UserInfo from "../../components/UserInfo";
import { GetServerSideProps } from "next";
import { IUserProps } from "../../components/UserInfo";
import { FC } from "react";

const User: FC<IUserProps> = ({ user }) => (
  <Layout title="User">
    <UserInfo user={user} />
  </Layout>
);

//use SSR
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id } = ctx.params;
  const res = await fetch(`${process.env.API_HOST}/users/${id}`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { user: data },
  };
};

export default User;
