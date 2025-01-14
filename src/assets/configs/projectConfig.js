
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
        image: "https://files.oaiusercontent.com/file-3orprjvhRccrN6k57apzWJ?se=2025-01-07T14%3A45%3A30Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D22b0e2be-853e-4acc-9d74-c2017c8059bb.webp&sig=c6Q03Izy4UmKfzmy1L1a5MNQ9MrP49CTJEZP%2BUJiaqo%3D",
        description: "A Website to track all your Travels and Expenses and many more. Get insights on your spending habits.",
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
        full_desc: ""
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
