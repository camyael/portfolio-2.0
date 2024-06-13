import { ISkills } from "../../interfaces";

interface ISkill {
    type: string;
    skills: ISkills[]
}

const skills: ISkill[] = [
    {
        type : "Front End",
        skills : [
            {
                "img" : "reactjs.svg",
                "skill" : "React JS"
            },
            {
                "img": "next-js.svg",
                "skill": "Next JS"
            },
            {
                "img": "vite.svg",
                "skill": "Vite Js"
            },
            {
                "img" : "css.svg",
                "skill": "CSS"
            },
            {
                "img": "html.svg",
                "skill": "HTML"
            },
            {
                "img" : "sass.svg",
                "skill" : "Sass"
            },
            {
                "img" : "bootstrap.svg",
                "skill" : "Bootstrap"
            },
        ]
    },
    {
        type: "Back End",
        skills: [
            {
                "img" : "node-js.svg",
                "skill" : "Node JS"
            },
            {
                "img" : "expressjs.svg",
                "skill" : "Express JS"
            },
            {
                "img" : "mongodb.svg",
                "skill" : "MongoDB"
            },
            {
                "img" : "sqlite.svg",
                "skill" : "SQLite"
            },
            {
                "img" : "firebase.svg",
                "skill" : "Firebase"
            }
        ]
    },
    {
        type: "Lenguajes de programación",
        skills: [
            {
                "img" : "javascript.svg",
                "skill" : "JavaScript"
            },
            {
                "img" : "typescript.svg",
                "skill" : "TypeScript"
            },
        ]
    },
    {
        type: "Otros",
        skills: [
            {
                "img" : "figma.svg",
                "skill": "Figma"
            },
            {
                "img" : "photoshop.svg",
                "skill" : "Photoshop"
            },
            {
                "img" : "git.svg",
                "skill" : "Git"
            },
            {
                "img" : "github.svg",
                "skill" : "Github"
            }
        ]
    }
]

export default skills;