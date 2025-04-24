import tes from '../../assets/agit.png'
import javascript from "../../assets/javascript.png";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import typescript from "../../assets/typescript.png";
import reactjs from "../../assets/reactjs.png";
import redux from "../../assets/redux.png";
import tailwind from "../../assets/tailwind.png";
import nodejs from "../../assets/nodejs.png";
import mongodb from "../../assets/mongodb.png";
import threejs from "../../assets/threejs.svg";
import git from "../../assets/git.png";
import figma from "../../assets/figma.png";  
import ecgo from '../../assets/asset-ecgo.png'
import firebase from '../../assets/firebase.png'
import postgres from '../../assets/postgres.png'
import pokedex from "../../assets/pokedex.png"
import black from "../../assets/black.png"

export const technologies = [
    {
        name: "HTML 5",
        icon: html,
      },
      {
        name: "CSS 3",
        icon: css,
      },
      {
        name: "JavaScript",
        icon: javascript,
      },
      {
        name: "TypeScript",
        icon: typescript,
      },
      {
        name: "React JS",
        icon: reactjs,
      },
      {
        name: "Redux Toolkit",
        icon: redux,
      },
      {
        name: "Tailwind CSS",
        icon: tailwind,
      },
      {
        name: "Node JS",
        icon: nodejs,
      },
      {
        name: "MongoDB",
        icon: mongodb,
      },
      {
        name: "Three JS",
        icon: threejs,
      },
      {
        name: "git",
        icon: git,
      },
      {
        name: "figma",
        icon: figma,
      },
     
  ];

  export const projects = [
    {
      id: 1,
      title: "ECGO EVMOTO",
      des: "A company website including company profile, product showcase, promotion, and ecommerce for buying the product.",
      img: ecgo,
      iconLists: [reactjs, css, javascript, postgres],
      link: "https://ecgoevmoto.com",
    },
    {
      id: 2,
      title: "Pokedex",
      des: "A Pokedex app showing list of pokemons with some details and descriptions of each of the pokemons.",
      img: pokedex,
      iconLists: [reactjs, tailwind, css, javascript],
      link: "https://github.com/panducdrmwn/pokedex-project",
    },
    {
      id: 3,
      title: "Live Chat",
      des: "This is a simple app showcasing the use of Firebase to create Real-Time Chat App.\n Firebase allows us to easily retrieve data for the database in real-time.",
      img: black,
      iconLists: [reactjs, tailwind, javascript, firebase],
      link: "https://github.com/panducdrmwn/chat-app",
    },
    // {
    //   id: 4,
    //   title: "Animated Apple Iphone 3D Website",
    //   des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    //   img: "/p4.svg",
    //   iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    //   link: "/ui.apple.com",
    // },
  ];
  
  