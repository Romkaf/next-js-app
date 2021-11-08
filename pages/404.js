import Heading from "../components/Heading";
import Head from "next/head";
import styles from "../styles/404.module.scss";
import Layout from "../components/Layout";

const Error = () => (
    <Layout title="Error">
        <div className={styles.wrapper}>
            <Head>
                <title>Error</title>
            </Head>
            <div>
                <Heading text="404" />
                <Heading tag="h2" text="Something is going wrong..." />
            </div>
        </div>
    </Layout>
    )


export default Error;