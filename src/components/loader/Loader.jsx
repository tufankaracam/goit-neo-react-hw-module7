import styles from "./loader.module.css";
import PuffLoader from 'react-spinners/PuffLoader';

export default function Loader() {
  return <div className={styles.container}><PuffLoader />Loading</div>;
}
