import React from 'react';
import Timeline from '../Timeline/Timeline';
import timelineConfig from '../../assets/configs/timelineConfig';

const Home = () => {
    return (
        <section>
            <Timeline items={timelineConfig} />
        </section>
    );
}

export default Home;