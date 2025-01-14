// headerConfig.js
import HomeIcon from '@mui/icons-material/Home';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import GitHubIcon from '@mui/icons-material/GitHub';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import FeedbackIcon from '@mui/icons-material/Feedback';

const headerConfig = [
    {
        path: '/',
        label: 'Home',
        icon: <HomeIcon />,
        show: true, // This will be visible
    },
    {
        path: 'projects',
        label: 'Projects',
        icon: <GitHubIcon />,
        show: true, // This will be visible
    },
    {
        path: 'skills',
        label: 'Skills',
        icon: <AutoAwesomeIcon />,
        show: true, // This will be visible
    },
    {
        path: 'contact',
        label: 'Contact',
        icon: <ContactMailIcon />,
        show: true, // This will be visible
    },
    {
        path: 'testimonials',
        label: 'Testimonials',
        icon: <FormatQuoteIcon />,
        show: false, // This will be visible
    },
    {
        path: 'feedback',
        label: 'Feedback',
        icon: <FeedbackIcon />,
        show: true, // This will be visible
    }
];

export default headerConfig;
