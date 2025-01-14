import {
    SiPython,
    SiPostgresql,
    SiReact,
    SiJavascript,
    SiCss3,
    SiHtml5
} from "react-icons/si";
import {FaGitAlt, FaJava} from "react-icons/fa";

import React from "react";

const skillsConfig = {
    mainSkills: [
        {
            id: "skills-0",
            className: "skill-icon",
            icon: <SiPython size={50}/>,
            text: "Python"
        },
        {
            id: "skills-13",
            className: "skill-icon",
            icon: <SiReact size={50}/>,
            text: "React"
        },
        {
            id: "skills-1",
            className: "skill-icon",
            icon: <SiPostgresql size={50}/>,
            text: "Postgres"
        },
        {
            id: "skills-5",
            className: "skill-icon",
            icon: <FaGitAlt size={50}/>,
            text: "Git"
        }
    ],
    complementarySkills: [
        {
            id: "skills-6",
            className: "skill-icon",
            icon: <FaJava size={50}/>,
            text: "Java"
        },
        {
            id: "skills-10",
            className: "skill-icon",
            icon: <SiJavascript size={50}/>,
            text: "JS"
        },
        {
            id: "skills-11",
            className: "skill-icon",
            icon: <SiCss3 size={50}/>,
            text: "CSS 3"
        },
        {
            id: "skills-12",
            className: "skill-icon",
            icon: <SiHtml5 size={50}/>,
            text: "HTML 5"
        }
        ,
    ]
}

export default skillsConfig