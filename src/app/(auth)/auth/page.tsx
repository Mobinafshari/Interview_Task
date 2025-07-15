import Login from "../_components/Login";
import styles from "../_styles/auth.module.scss";

function page() {
  return (
    <section className={styles.wrapper}>
      <Login />
    </section>
  );
}

export default page;
