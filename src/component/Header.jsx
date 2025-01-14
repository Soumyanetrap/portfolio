import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import headerConfig from '../assets/configs/headerConfig'; // Import the config

const Header = () => {
    const [selected, setSelected] = useState('/'); // Default to home
    const [menuOpen, setMenuOpen] = useState(false); // Start with menu closed
    const navigate = useNavigate();

    // Check screen size to update menu behavior
    const handleResize = () => {
        if (window.innerWidth > 768) {
            setMenuOpen(true); // Keep the menu open on larger screens
        } else {
            setMenuOpen(false); // Close the menu on smaller screens
        }
    };

    useEffect(() => {
        handleResize(); // Set the initial state based on the screen size
        window.addEventListener('resize', handleResize); // Update when resizing the window

        // Get selected path from localStorage on mount
        const savedPath = localStorage.getItem('selectedPath');
        if (savedPath) {
            setSelected(savedPath);
            navigate(savedPath); // Navigate to the saved path if exists
        }

        return () => {
            window.removeEventListener('resize', handleResize); // Clean up event listener
        };
    }, [navigate]);

    const handleClick = (event, path) => {
        event.preventDefault();
        setSelected(path);
        localStorage.setItem('selectedPath', path); // Save the selected path in localStorage
        if (window.innerWidth <= 768) {
            setMenuOpen(false); // Close the menu only on smaller screens
        }
        navigate(path);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header>
            <h1>Soumyanetra</h1>
            {
                window.innerWidth <= 768 && <MenuIcon className="hamburger" onClick={toggleMenu} />
            }
            <nav>
                <ul style={{ display: menuOpen ? 'flex' : 'none' }}>
                    {headerConfig
                        .filter(item => item.show) // Only include items where `show` is true
                        .map(({ path, label, icon }) => (
                            <li key={path} className={selected === path ? 'selected' : ''}>
                                <span onClick={(e) => handleClick(e, path)}>
                                    {icon} {label}
                                </span>
                            </li>
                        ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
