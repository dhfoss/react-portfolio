import React from 'react';
import BurntPopkorn from '../components/BurntPopkorn';
import EmployeeDirectory from '../components/EmployeeDirectory';
import MinionMingle from '../components/MinionMingle';
import WeatherDashboard from '../components/WeatherDashboard';
import './Portfolio.css'

const Portfolio = () => {
    return (
        <>
            <div>
                <h1 className='display-1 heading'>My Projects</h1>
            </div>

            <div style={{ height: '10vh' }} />
            <BurntPopkorn />
            <div style={{ height: '25vh' }} />
            <MinionMingle />
            <div style={{ height: '25vh' }} />
            <EmployeeDirectory />
            <div style={{ height: '25vh' }} />
            <WeatherDashboard />
            <div style={{ height: '25vh' }} />
        </>
    )
}

export default Portfolio;