import Heading from "../../components/Heading";
import Layout from "../../components/Layout";
import Link from "next/link";
import styles from "../../styles/list.module.scss";

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.API_HOST}/users`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { users: data },
  };
};

const Users = ({ users }) => (
  <Layout title="Users">
    <Heading text="Users" />
    <ul className={styles.list}>
      {users &&
        users.map(({ id, name }) => (
          <li className={styles.list_item} key={id}>
            <Link href={`users/${id}`}>
              <a className={styles.list_link}>{name}</a>
            </Link>
          </li>
        ))}
    </ul>
  </Layout>
);

export default Users;
