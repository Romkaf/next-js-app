import Heading from "../components/Heading";
import styles from "../styles/404.module.scss";

const Error = () => {

    return (
        <div className={styles.wrapper}>
            <div>
                <Heading text="Error 404" />
                <Heading tag="h2" text="Page not found" />
            </div>
        </div>
    )
};

export default Error;