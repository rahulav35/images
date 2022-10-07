import react, { useEffect, useState } from "react";
import newpage from "../styles/Main.module.css";
import User from "../components/User";
function Main() {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((responce) => {
        return responce.json();
      })
      .then((app) => setArray(app));
  }, []);

  const [array, setArray] = useState([]);

  return (
    <div className={newpage.newpagediv}>
      {array.map((singledata) => {
        console.log(singledata);
        return (
          <User
            albumId={singledata.albumId}
            id={singledata.id}
            title={singledata.title}
            url={singledata.url}
          />
        );
      })}
    </div>
  );
}
export default Main;
