import React from 'react';
import lightning from '../../images/lightning.jpg';
import { Parallax } from 'react-parallax';

const inlineStyle = {
    margin: '120px',
    textAlign: 'center',
    fontSize: '300%',
    color: 'black',
    fontWeight: '500'
  }
  



const WeatherDashboard = () => {
    return (
        <div>  
            <a className='disabled-link' id="weatherDashboard" href='https://dhfoss.github.io/Weather-Dashboard/' target='_blank'>
                <Parallax
                bgImage={lightning}
                strength={-300}
                bgImageAlt="Weather Dashboard"
                >
                    <div style={inlineStyle}>
                        Weather Dashboard
                    </div>
                </Parallax>
            </a>
            <div className='container container-fluid'>
                <h2 className='mt-2'>An app for getting the current weather, and a 5 day forecast using Open Weather Map API</h2>
                <h3> <a className='external__link' href='https://dhfoss.github.io/Weather-Dashboard/' target='_blank'>Weather Dashboard</a> || <a href='https://github.com/dhfoss/Weather-Dashboard' className='external__link' target='_blank'>Repository</a></h3>
            </div>
        </div>
    )
}

export default WeatherDashboard;