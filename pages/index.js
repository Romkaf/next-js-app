import Heading from "../components/Heading";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.scss";

const Home = () => (
  <Layout title="Home">
    <div className={styles.wrapper}>
      <Heading text="NextJS App" />
    </div>
  </Layout>
);

export default Home;
