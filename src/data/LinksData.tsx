import { ImGithub, ImLinkedin, ImSpotify } from "react-icons/im";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";

interface LinksType {
  title: string;
  icon: any;
  link: string;
}

export const LinksData: LinksType[] = [
  {
    title: "GitHub",
    icon: <ImGithub color='#000000dc' />,
    link: "https://github.com/",
  },
  {
    title: "LinkedIn",
    icon: <ImLinkedin color='#000000dc' />,
    link: "https://www.linkedin.com/",
  },
  {
    title: "Twitter",
    icon: <FaTwitter color='#000000dc' />,
    link: "https://twitter.com/",
  },
  {
    title: "Instagram",
    icon: <SiInstagram color='#000000dc' />,
    link: "https://www.instagram.com/",
  },
  {
    title: "Facebook",
    icon: <FaFacebook color='#000000dc' />,
    link: "https://www.facebook.com/",
  },
  {
    title: "Spotify",
    icon: <ImSpotify color='#000000dc' />,
    link: "https://open.spotify.com/",
  }
];
