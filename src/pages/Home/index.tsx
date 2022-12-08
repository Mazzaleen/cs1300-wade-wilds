

import { AboutData } from "../../data/AboutData";
import { LinksData } from "../../data/LinksData";
import styles from "./home.module.scss";
import profilePic from "../../assets/profile.gif";

const Zoom = require("react-reveal/Zoom");
const welcomeText = `Tis I, Captain ${AboutData.firstName}  ${AboutData.lastName}`;

const Home = () => {
  return (
    <div className={styles.home}>
      <Zoom cascade>
        <img src={profilePic} alt='Profile' className={styles.image} />
        <h2 className={styles.title}>{welcomeText}</h2>
      </Zoom>
      <Zoom cascade>
        <h1 className={styles.about}>{AboutData.about1}</h1>
        <h1 className={styles.about}>{AboutData.about2}</h1>
        <h4 className={styles.about}>{AboutData.about3}</h4>
        <h6 className={styles.about_next}>{AboutData.about4}</h6>
        <div className={styles.links}>
          {LinksData.map((item) => (
            <a
              href={item.link}
              target='_blank'
              rel='noreferrer'
              key={item.title}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </Zoom>
    </div>
  );
};

export default Home;
