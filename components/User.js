import react from "react";
import secondpage from "../styles/User.module.css";
function User({ albumId, id, title, url }) {
  return (
    <div className={secondpage.userdiv}>
      <h1 className={secondpage.albumId}> {albumId}</h1>
      <h2 className={secondpage.id}>{id}</h2>
      <h3 className={secondpage.title}>{title}</h3>
      <img className={secondpage.image} src={url} alt="" />
    </div>
  );
}
export default User;
