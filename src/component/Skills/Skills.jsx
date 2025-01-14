import React from 'react';
import { Box, Typography } from '@mui/material';
import SkillsItems from './SkillItems';
import skillsConfig from '../../assets/configs/skillConfig';
import './Skills.css';

const Skills = () => {
    return (
        <section id="skills" className="skills">
            <Box sx={{ width: '90%', textAlign: 'center', py: 4, backgroundColor: '#f0f0f0', borderRadius: '15px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', mb: 6 }}>
                <Typography variant="h3" component="h1" sx={{ color: '#263238', py: 2, fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } }}>
                    <strong>Main Skills & Tools</strong>
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                    <SkillsItems config={skillsConfig.mainSkills} />
                </Box>
            </Box>

            <Box sx={{ width: '90%', textAlign: 'center', py: 4, backgroundColor: '#f0f0f0', borderRadius: '15px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
                <Typography variant="h3" component="h1" sx={{ color: '#263238', py: 2, fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } }}>
                    <strong>Complementary Skills & Tools</strong>
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                    <SkillsItems config={skillsConfig.complementarySkills} />
                </Box>
            </Box>
        </section>
    );
};

export default Skills;