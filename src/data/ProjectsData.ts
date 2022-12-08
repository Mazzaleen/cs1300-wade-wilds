
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

const slai ="https://github.com/Mazzaleen/cs1300-wade-wilds/blob/main/src/assets/Screen%20Shot%202022-12-08%20at%202.48.49%20PM.png?raw=true";
const frag = "https://github.com/Mazzaleen/cs1300-wade-wilds/blob/main/src/assets/Screen%20Shot%202022-12-08%20at%202.51.39%20PM.png?raw=true"
const laundry = "https://github.com/Mazzaleen/cs1300-wade-wilds/blob/main/src/assets/laundry.png?raw=true";
const cinder = "https://github.com/Mazzaleen/cs1300-wade-wilds/blob/main/src/assets/cinder.png?raw=true";
const bakery = "https://github.com/Mazzaleen/cs1300-wade-wilds/blob/main/src/assets/bakery.png?raw=true";
const panda = "https://github.com/Mazzaleen/cs1300-wade-wilds/blob/main/src/assets/panda.png?raw=true";
const pokemon = "https://github.com/Mazzaleen/cs1300-wade-wilds/blob/main/src/assets/pokemon.png?raw=true";



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
    description: `Utilized Figma tools to redesign interactive User Interface for Slai, a startup that provides AI solutions for the insurance industry`,
    image: slai,
    GitHub: '',
    hosted: 'https://www.figma.com/proto/oIdJCkKCWP12fRjjfAyN9U/Slai-Hifi-Mockup?node-id=239%3A149&starting-point-node-id=239%3A149',
  },

  {
    title: 'Fragantica',
    description: `Utilized Figma, HTML, CSS, and JavaScript to redesign Fragantica's website`,
    image: frag,
    GitHub: 'https://github.com/8mzln8/Responsive-Redesign',
    hosted: 'https://8mzln8.github.io/Responsive-Redesign/index.html',
  },

  {
    title: 'Improving Laundry @ Brown',
    description: `Utilized HTM:5, CSS, and JavaScript to redesign the Brown Laundry Machine Interface`,
    image: laundry,
    GitHub: 'https://github.com/8mzln8/CSCI1300-Personas-Storyboarding',
    hosted: `https://8mzln8.github.io/CSCI1300-Personas-Storyboarding/`,
  },

  {
    title: 'Cinder: Tinder for CS Classes',
    description: `Utilized Figma, Adobe and Flutter to design a Tinder-like app for students to find computer science classes at Brown`,
    image: cinder,
    GitHub: '',
    hosted: 'https://www.figma.com/proto/fPEXAQZC55DWDLeRb2bE0U/Tinder-for-CS-Classes?node-id=1%3A3&starting-point-node-id=1%3A3',
  },

  {
    title: 'UX Research: Nested Bakery',
    description: `Designed Two interactive User Interfaces for Nested Bakery, For A/B testing purposes. Github link contains A, while hosted link contains B.`,
    image: bakery,
    GitHub: 'https://www.figma.com/file/UOeTy0nUEqm8wPXHhsC30E/The-Nested-Bakery-Home-Page-Template-(Redesign-A)?node-id=0%3A1&t=t5GRK70BX92yQTbp-0',
    hosted: `https://www.figma.com/file/RJX6NcRxm4h9tXWzD5Bxoi/The-Nested-Bakery-Home-Page-Template-(Redesign-B)?t=t5GRK70BX92yQTbp-1`,
  },
  {
    title: 'Panda',
    description: `Single-Player/Multi-Player turn based Card-Game inspired by PANDA GAMES LTD. Utilized React,Java and Bootstrap to Host`,
    image: panda,
    GitHub: 'https://github.com/Mazzaleen/Panda-Card-Game',
    hosted: `https://www.figma.com/file/y6FxyVlCW27pOOFsfNyEGB/Panda?t=t5GRK70BX92yQTbp-0`,
  },

  {
    title: 'Pokemon Markeplace',
    description: `Utilized HTML, CSS, JS and Typescript to create a shopping cart for Pokemon`,
    image: pokemon,
    GitHub: 'https://github.com/Mazzaleen/ts-cs1300-deployment',
    hosted: `https://mazzaleen.github.io/ts-cs1300-deployment/`,
  }
];
