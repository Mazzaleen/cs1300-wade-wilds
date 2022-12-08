import { FaReact, FaNodeJs, FaHtml5, FaSass } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiRedux,
  SiCss3,
  SiNextdotjs,
  SiTypescript,
  SiPostman,
  SiBootstrap,
  SiMaterialui,
  SiPwa,
  SiElectron,
  SiPython,
  SiJava,
  SiTensorflow,
  SiFirebase,
  SiMongodb,
  SiMysql,
  SiGradle,
  SiDocker,
  SiMocha,
} from "react-icons/si";
import { AiFillAndroid } from "react-icons/ai";
import { ImCalculator, ImGit } from "react-icons/im";

interface SkillsType {
  name: string;
  icon: any;
  link: string;
}

export const SkillsData: SkillsType[] = [

  {
    name: "Java",
    icon: <SiJava color='#000000dc' />,
    link: "https://www.java.com/en/",
  },
  {
    name: "JavaScript",
    icon: <IoLogoJavascript color='#000000dc' />,
    link: "https://www.javascript.com/",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript color='#000000dc' />,
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "HTML",
    icon: <FaHtml5 color='#000000dc' />,
    link: "https://www.w3schools.com/html/",
  },
  {
    name: "CSS",
    icon: <SiCss3 color='#000000dc' />,
    link: "https://www.w3schools.com/css/",
  },
  {
    name: "React",
    icon: <FaReact color='#000000dc' />,
    link: "https://reactjs.org/",
  },
  {
    name: "Bootstrap",
    icon: <SiBootstrap color='#000000dc' />,
    link: "https://getbootstrap.com/",
  },

  {
    name: "Material-Ui",
    icon: <SiMaterialui color='#000000dc' />,
    link: "https://mui.com/",
  },

  {
    name: "Python",
    icon: <SiPython color='#000000dc' />,
    link: "https://www.python.org/",
  },
  {
    name: "Tensorflow",
    icon: <SiTensorflow color='#000000dc' />,
    link: "https://www.tensorflow.org/",
  },

  {
    name: "Next.js",
    icon: <SiNextdotjs color='#000000dc' />,
    link: "https://nextjs.org/",
  },
  {
    name: "Redux",
    icon: <SiRedux color='#000000dc' />,
    link: "https://redux.js.org/",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs color='#000000dc' />,
    link: "https://nodejs.org/",
  },
  {
    name: "Android",
    icon: <AiFillAndroid color='#000000dc' />,
    link: "https://developer.android.com/",
  },

  {
    name: "SASS",
    icon: <FaSass color='#000000dc' />,
    link: "https://sass-lang.com/",
  },
  {
    name: "C++",
    icon: <ImCalculator color='#000000dc' />,
    link: "https://www.cplusplus.com/",
  },

  {
    name: "Git",
    icon: <ImGit color='#000000dc' />,
    link: "https://git-scm.com/",
  },
  {
    name: "Postman",
    icon: <SiPostman color='#000000dc' />,
    link: "https://www.postman.com/",
  },
  {
    name: "PWA",
    icon: <SiPwa color='#000000dc' />,
    link: "https://web.dev/progressive-web-apps/",
  },
  {
    name: "Electron",
    icon: <SiElectron color='#000000dc' />,
    link: "https://www.electronjs.org/",
  },
  {
    name: "Firebase",
    icon: <SiFirebase color='#000000dc' />,
    link: "https://firebase.google.com/",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb color='#000000dc' />,
    link: "https://www.mongodb.com/",
  },
  {
    name: "MySQL",
    icon: <SiMysql color='#000000dc' />,
    link: "https://www.mysql.com/",
  },
  {
    name: "GraphQL",
    icon: <SiGradle color='#000000dc' />,
    link: "https://graphql.org/",
  },
  {
    name: "Docker",
    icon: <SiDocker color='#000000dc' />,
    link: "https://www.docker.com/",
  },
  {
    name: "Gradle",
    icon: <SiMocha color='#000000dc' />,
    link: "https://gradle.org/",
  }

];
