
import {AiFillGithub, AiOutlineGlobal} from "react-icons/ai";
import {ImBook} from "react-icons/im";

import React from 'react'

const projectConfig = {
    website: [
    {
        id: "project-6",
        title: "Portfolio",
        links: [
            {
                name: "website",
                url: "https://all-in-1-server.onrender.com/",
                icon: <AiOutlineGlobal />,
            }
        ],
        image: "https://static.vecteezy.com/system/resources/previews/020/239/586/non_2x/hand-drawn-freelance-woman-working-on-laptop-under-coconut-tree-illustration-in-doodle-style-vector.jpg",
            description: "I am in-front of you",
        full_desc: {
            intro: `This is my portfolio highlighting my skills and few important projects.`,
            details: `Let's connect and build something awesome and impactful together.`
        },
        tags: ["React", "NoSQL", "Google Firebase", "Web Development"]
    },  
    {
        id: "project-5",
        title: "All-in-1",
        links: [
            {
                name: "website",
                url: "https://all-in-1-server.onrender.com/",
                icon: <AiOutlineGlobal />,
            }
        ],
        image: "https://st4.depositphotos.com/7341970/20675/v/450/depositphotos_206751488-stock-illustration-travel-adventure-tourism-tag-cloud.jpg",
        description: "A Website to track all your Travels and Expenses and many more. Get insights on your spending habits.",
        full_desc: {
            intro: `Tracking and Managing expenses is a tedious task. More so when you have to track different things on different platforms.`,
            details: `Here is a website which allows you to track all your expenses and travels in one place.
            Here, you can list all your travels and their expenses. Besides this, it allows you to keep a track of all the documents(tickets and bills).
            The website also provides insights on your spending habits which might help you to manage your expenses better.
            It also allows you to connect with people and plan vacations together.`
        },
        tags: ["React", "Node JS", "Statistics", "Full Stack", "Web Development", "RDBMS","PostgreSQL"]
        }],
    ai: [
    {
        id: "project-3",
        title: "Legal Document Simplification",
        links: [
            {
                name: "repo",
                url: "https://github.com/Soumyanetrap/Document-Simplification",
                icon: <AiFillGithub />
            },
            {
                name: "docs",
                url: "https://github.com/Soumyanetrap/Document-Simplification/blob/main/Group-2.pdf",
                icon: <ImBook />
            }
        ],
        image: "https://media.istockphoto.com/id/1405708483/vector/man-with-document.jpg?s=612x612&w=0&k=20&c=gYMZ2RRTj2vCJ56iroKK_rrpGZMoKRGn8Xjr15pJu54=",
        description: "Developed a model to simplify legal documents using LLMs.",
        full_desc: {
            intro: `Document Simplification is crucial for niche domains like Legal and Medical fields.`,
            details: `Developed a model to Simplify Large Legal Documents using LLMs.
            The model was trained to understand and simplify the document by keeping all relevant information intact. 
            This would help people unrelated to the field to understand the document easily.`
        },
        tags: ["DL", "NLP", "LLMs"]
    },
    {
        id: "project-2",
        title: "Spoken Language Understanding",
        links: [
            {
                name: "repo",
                url: "",
                icon: <AiFillGithub />
            },
            {
                name: "docs",
                url: "https://github.com/saaarvesh/IITH-EP4130-DataScienceAnalysis-Complete-ENDtoEND-study-of-Recommendation_System/blob/main/EP4130_PH6130_Report.pdf",
                icon: <ImBook />,
            }
        ],
        image: "https://speechzella.com/wp-content/uploads/2022/09/language-vs.-speech-1024x1024.png",
        description: "Developed a robust model to understand Spoken Language using Teacher-Student Approach.",
        full_desc: {
            intro: `Spoken Language Based Chat-Bots is the new need of the hour.`,
            details: `Developed a model to understand Spoken Language using Teacher-Student Approach.
            The model was trained to clearly understand the semantic relation in Spoken Speech and respond accordingly. Besides this, it is capable to rightly understand different styled pronunciations and pace differences.`
        },
        tags: ["DL", "Spoken Language Understanding", "NLP", "Knowledge Distillation"]
    },
    {
        id: "project-1",
        title: "Recommender System",
        links: [
            {
                name: "repo",
                url: "https://github.com/saaarvesh/IITH-EP4130-DataScienceAnalysis-Complete-ENDtoEND-study-of-Recommendation_System",
                icon: <AiFillGithub />
            },
            {
                name: "docs",
                url: "https://github.com/saaarvesh/IITH-EP4130-DataScienceAnalysis-Complete-ENDtoEND-study-of-Recommendation_System/blob/main/EP4130_PH6130_Report.pdf",
                icon: <ImBook />,
            }
        ],
        image: 'https://miro.medium.com/v2/resize:fit:649/0*xA2P_g7T4TOPRKJE.png',
        description: "Recommender System using Collaborative Filtering and Content Based Filtering.",
        full_desc: {
            intro: `This project showcases an exploration of the Netflix Challenge, 
                    where the focus is on designing and optimizing recommendation systems to
                    personalize content and enhance the user experience on the world’s leading
                    streaming platform.`,
            details: `In doing so, we explored several ways to model the data, including 
                    matrix factorization, deep learning, and hybrid models.
                    We explored Collaborative Filtering and Content-Based Filtering to
                    recommend movies to users based on their preferences and movie features.`
        },
        tags: ["ML", "Recommendation System", "Collaborative Filtering", "Content Based Filtering", "Random Forest"]
    }
    ]
}

export default projectConfig
