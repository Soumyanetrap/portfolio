import React from 'react'

const timelineConfig = {

    greeting:
        <h1 className="heading">
            Hi! I'm <strong className="main-name"> Soumyanetra Pal</strong>
        </h1>,
    titles: [
        "A Data Scientist",
        "A Machine Learning Specialist",
        "A Backend Developer",
        "An Indian"
    ],
    about: {
        start: "I've been working for over nine years on data science projects. " +
            "I'm excited by learning new things, contributing to the data science community," +
            " and spreading the word of data!",
        exit: "I'm fluent at Python, SQL databases, and more, " +
            "with a deep interest in machine learning."
    },
    workTimeline: [
        {
            id: "work-6",
            title: "Data Scientist",
            company: "Netradyne Technology India Pvt Ltd",
            description: "Worked on IMU Data Analysis and Machine Learning. Worked on Filter Designing for better feature extraction.",
            date: "2024-Present",
            tags: ["Data Science", "Signal Processing"]
        },
        {
            id: "work-5",
            title: "Solution Consultant (Intern)",
            company: "Sahaj.AI",
            description: "Designed and Trained DL models for Intent Recognition and Named Entity Recognition. Worked on Speech.",
            date: "2023-2024",
            tags: ["AI", "Deep Learning", "LLMs", "Audio Processing"]
        },
        {
            id: "work-4",
            title: "M.Tech in Artificial Intelligence and Machine Learning",
            company: "Indian Institute of Technology, Hyderabad",
            description: "Trained in Artificial Intelligence and Data Science. Secured 8.9 CGPA. Worked on projects involving LLMs to Simplify and Summarize legal data. Worked on Audio Understandable AI.",
            date: "2022-2024",
            tags: ["AI", "ML", "Deep Learning", "NLP", "LLMs", "Audio Processing"]
        },
        {
            id: "work-3",
            title: "Tech Intern",
            company: "Adben Industries Pvt Ltd",
            description: "Worked on designing and implementing electronic circuits for clients.",
            date: "2022",
            tags: ["C", "IOT", "Circuit Design", "Firmware Design"]
        },
        {
            id: "work-2",
            title: "B.Tech in Electronics and Communication",
            company: "St. Thomas' College of Engineering and Technology",
            description: "Trained in Digital Electronics, Microprocessors. Secured 9.48 CGPA. Worked on multiple projects involving Circuit Design, Firmware Design, IOT and FullStack Website Designing",
            date: "2018-2022",
            tags: ["Electronics", "IOT", "Circuit Design", "React", "C", "Python", "Java"]
        },
        {
            id: "work-1",
            title: "Class 12",
            company: "K. E. Carmel School",
            description: "Secured 92%",
            date: "2018",
            tags: ["ICSE"]
        },
        {
            id: "work-0",
            title: "Class 10",
            company: "K. E. Carmel School",
            description: "Secured 93%",
            date: "2016",
            tags: ["ICSE"]
        }
    ]
}


export default timelineConfig