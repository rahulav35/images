import Router, { useRouter } from "next/router";
import react from "react";
import styles from "../styles/Home.module.css";
import Main from "./Main";
function App() {
  const router = useRouter();
  return (
    <div className={styles.maindiv}>
      <button onClick={() => router.push("/Main")} className={styles.button}>
        ide click
      </button>
    </div>
  );
}
export default App;
