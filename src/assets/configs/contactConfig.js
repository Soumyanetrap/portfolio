import { AiFillMail, AiFillPhone, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import React from 'react';

const contactConfig = [
    {
        id: "contact-1",
        type: "Email",
        value: "soumyanetrap@gmail.com",
        icon: <AiFillMail size={30} />
    },
    {
        id: "contact-2",
        type: "Phone",
        value: "+91 6290xxxxxx",
        icon: <AiFillPhone size={30} />
    },
    {
        id: "contact-3",
        type: "LinkedIn",
        value: "www.linkedin.com/in/soumyanetra-pal-9141ba209",
        icon: <AiFillLinkedin size={30} />
    },
    {
        id: "contact-4",
        type: "GitHub",
        value: "https://github.com/Soumyanetrap",
        icon: <AiFillGithub size={30} />
    }
];

export default contactConfig;