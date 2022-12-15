
// import slai from "src/assets/SLAI.png";
// import frag from "src/assets/fragantica.png";
// import laundry from "src/assets/laundry.png";
// import cinder from "src/assets/cinder.png";
// import bakery from "src/assets/bakery.png";
// import panda from "src/assets/panda.png";
// import pokemon from "src/assets/pokemon.png";

// const slai ="src/assets/SLAI.png";
// const frag = "src/assets/fragantica.png";
// const laundry = "src/assets/laundry.png";
// const cinder = "src/assets/cinder.png";
// const bakery = "src/assets/bakery.png";
// const panda = "src/assets/panda.png";
// const pokemon = "src/assets/pokemon.png";

const slai = "https://media.tenor.com/-ZgulzSdAosAAAAd/robot-pixel-art.gif"
const frag = "https://media.tenor.com/i7wxBWmnHBgAAAAM/spraying-perfume-piu-piu.gif"

const laundry = "https://media4.giphy.com/media/EvNfyRC5HMVzi/giphy.gif";
const cinder = "https://media4.giphy.com/media/26mkhMYkitO7DoJuU/giphy.gif";
const bakery = "https://i.gifer.com/origin/2a/2a000e7d1441180a6b22a47b489c0b53.gif";
const panda = "https://i.pinimg.com/originals/57/3c/da/573cdaf5205bebaac51ca29273dd5514.gif";
const pokemon = "https://64.media.tumblr.com/2601ae27b5ba321ca288a938eec42483/tumblr_pjyf3o3kQx1xcy6bso1_500.gif";



interface ProjectsType {
  title: string
  description: string
  image : string
  // image: Object
  GitHub: string
  hosted: string
}


export const ProjectsData: ProjectsType[] = [
  {
    title: 'SLAI AI',
    description: `An Interactive UI for Slai, an AI Insurance Startup.`,
    image: slai,
    GitHub: '',
    hosted: 'https://www.figma.com/proto/oIdJCkKCWP12fRjjfAyN9U/Slai-Hifi-Mockup?node-id=239%3A149&starting-point-node-id=239%3A149',
  },

  {
    title: 'Fragantica',
    description: `Interactive redesign of Fragantica.com using Figma/HTML/CSS.`,
    image: frag,
    GitHub: 'https://github.com/8mzln8/Responsive-Redesign',
    hosted: 'https://8mzln8.github.io/Responsive-Redesign/index.html',
  },

  {
    title: 'Improving Laundry @ Brown',
    description: `Laundry fucking sucks @ Brown, here are my solutions!`,
    image: laundry,
    GitHub: 'https://github.com/8mzln8/CSCI1300-Personas-Storyboarding',
    hosted: `https://8mzln8.github.io/CSCI1300-Personas-Storyboarding/`,
  },

  {
    title: 'C(T)inder',
    description: `Utilized Figma, Adobe and Flutter to design a Tinder-like app for CS Classes`,
    image: cinder,
    GitHub: '',
    hosted: 'https://www.figma.com/proto/fPEXAQZC55DWDLeRb2bE0U/Tinder-for-CS-Classes?node-id=1%3A3&starting-point-node-id=1%3A3',
  },

  {
    title: 'Nested Bakery',
    description: `Designed Two UIs for UX research. Github link contains A, while hosted link contains B.`,
    image: bakery,
    GitHub: 'https://www.figma.com/file/UOeTy0nUEqm8wPXHhsC30E/The-Nested-Bakery-Home-Page-Template-(Redesign-A)?node-id=0%3A1&t=t5GRK70BX92yQTbp-0',
    hosted: `https://www.figma.com/file/RJX6NcRxm4h9tXWzD5Bxoi/The-Nested-Bakery-Home-Page-Template-(Redesign-B)?t=t5GRK70BX92yQTbp-1`,
  },
  {
    title: 'Panda',
    description: `Multiplayer card game inspired by PANDA GAMES LTD. Utilized React,Java and Bootstrap to host.`,
    image: panda,
    GitHub: 'https://github.com/Mazzaleen/Panda-Card-Game',
    hosted: `https://www.figma.com/file/y6FxyVlCW27pOOFsfNyEGB/Panda?t=t5GRK70BX92yQTbp-0`,
  },

  {
    title: 'Pokemon Markeplace',
    description: `Utilized TS,Material UI & React to create Pokemon Marketplace.`,
    image: pokemon,
    GitHub: 'https://github.com/Mazzaleen/ts-cs1300-deployment',
    hosted: `https://mazzaleen.github.io/ts-cs1300-deployment/`,
  }
];
