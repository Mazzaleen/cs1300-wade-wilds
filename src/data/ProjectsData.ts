
// import laundryimg from "src/assets/bakery.png";

interface ProjectsType {
  title: string
  description: string
  image: string
  GitHub: string
  hosted: string
}


export const ProjectsData: ProjectsType[] = [
  {
    title: 'SLAI AI',
    description: `Utilized Figma tools to redesign interactive User Interface for Slai, a startup that provides AI solutions for the insurance industry`,
    image: 'src/assets/SLAI.png',
    GitHub: '',
    hosted: 'https://www.figma.com/proto/oIdJCkKCWP12fRjjfAyN9U/Slai-Hifi-Mockup?node-id=239%3A149&starting-point-node-id=239%3A149',
  },

  {
    title: 'Fragantica',
    description: `Utilized Figma, HTML, CSS, and JavaScript to redesign Fragantica's website`,
    image: 'src/assets/fragantica.png',
    GitHub: 'https://github.com/8mzln8/Responsive-Redesign',
    hosted: 'https://8mzln8.github.io/Responsive-Redesign/index.html',
  },

  {
    title: 'Improving Laundry @ Brown',
    description: `Utilized HTM:5, CSS, and JavaScript to redesign the Brown Laundry Machine Interface`,
    image: "src/assets/bakery.png",
    GitHub: 'https://github.com/8mzln8/CSCI1300-Personas-Storyboarding',
    hosted: `https://8mzln8.github.io/CSCI1300-Personas-Storyboarding/`,
  },

  {
    title: 'Cinder: Tinder for CS Classes',
    description: `Utilized Figma, Adobe and Flutter to design a Tinder-like app for students to find computer science classes at Brown`,
    image: 'assets/Cinder.png',
    GitHub: '',
    hosted: 'https://www.figma.com/proto/fPEXAQZC55DWDLeRb2bE0U/Tinder-for-CS-Classes?node-id=1%3A3&starting-point-node-id=1%3A3',
  },

  {
    title: 'UX Research: Nested Bakery',
    description: `Designed Two interactive User Interfaces for Nested Bakery, For A/B testing purposes. Github link contains A, while hosted link contains B.`,
    image: 'assets/bakery.png',
    GitHub: 'https://www.figma.com/file/UOeTy0nUEqm8wPXHhsC30E/The-Nested-Bakery-Home-Page-Template-(Redesign-A)?node-id=0%3A1&t=t5GRK70BX92yQTbp-0',
    hosted: `https://www.figma.com/file/RJX6NcRxm4h9tXWzD5Bxoi/The-Nested-Bakery-Home-Page-Template-(Redesign-B)?t=t5GRK70BX92yQTbp-1`,
  },
  {
    title: 'Panda',
    description: `Single-Player/Multi-Player turn based Card-Game inspired by PANDA GAMES LTD. Utilized React,Java and Bootstrap to Host`,
    image: 'assets/panda.png',
    GitHub: 'https://github.com/Mazzaleen/Panda-Card-Game',
    hosted: `https://www.figma.com/file/y6FxyVlCW27pOOFsfNyEGB/Panda?t=t5GRK70BX92yQTbp-0`,
  },
  {
    title: 'Pokemon Markeplace',
    description: `Utilized HTML, CSS, JS and Typescript to create a shopping cart for Pokemon`,
    image: 'assets/pokemon.png',
    GitHub: 'https://github.com/Mazzaleen/ts-cs1300-deployment',
    hosted: `https://mazzaleen.github.io/ts-cs1300-deployment/`,
  }
];
