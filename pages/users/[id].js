import Layout from "../../components/Layout";
import UserInfo from "../../components/UserInfo";
//use SSR
export const getServerSideProps = async (ctx) => {
  const { id } = ctx.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
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

const User = ({ user }) => (
  <Layout title="User">
    <UserInfo user={user} />
  </Layout>
);

export default User;
