import React from 'react';
import Greetings from '../components/Greetings';
import './Home.css';
import headshot from '../images/dhf_headshot.png';

const Home = () => {
    return(
        <>
            <Greetings />
            <div style={{ height: '20vh' }} />

            <div className="container">
                <div className="row my-5">
                    <div className="col-md-4">
                        <img className="rounded shadow-lg" id="dhf_headshot" src={headshot} alt="Hawthorne-Foss Headshot"/>
                    </div>
                    <div className="col-md-8">
                        <h1>About Me</h1>
                        <p className="h4 mt-5 ml-5">I am a full stack web developer living in Ann Arbor, Michigan drawing on ten years of experience in 
                            music education, community outreach, and performance. I'm a passionate lifelong learner, and have 
                            a proven ability to absorb new technologies and languages. With a certificate from Michigan State 
                            University coding bootcamp, I bring creativity, attention to detail, and tenacity to any project, 
                            collaborative or solo.
                        </p>

                        <p className="h4 mt-5 ml-5 social-links">Find me on: <a className="external__link" href="https://github.com/dhfoss" target="_blank">Github</a> || <a className="external__link" href="https://www.linkedin.com/in/daniel-hawthorne-foss-4a42441b4/" target="_blank">LinkedIn</a> </p>
                        
                    </div>
                </div>
            </div>

            <div className="container">
                <h2>Technical Skills</h2>
                <p className="mt-1">Languages: JavaScript ES6+, SQL, CSS3, HTML5</p>
                <p className="mt-1">Frontend: React.js, React Hooks, JSX, Handlebars, jQuery, Bootstrap</p>
                <p className="mt-1">Backend: Node.js, Express, MongoDB, Mongoose, MySQL, Sequelize, MERN Stack Development</p>
                <p className="mt-1">Technologies: APIs, Restful API, Heroku, GIT, GitHub, Passport, Terminal, AJAX, JSON</p>
            </div>
            <div style={{ height: '10vh' }} />
            <div className="container">
                <p>And in case you were wondering, the answer is yes, I am also a professional <a className="saxophone-link" href="https://open.spotify.com/track/0Bu4U7DNL3TxXFV5zIIG8A?si=13e287e2124d48ff" target="_blank">saxophonist</a>.</p>
            </div>
            <div style={{ height: '10vh' }} />
        </>
    )
}

export default Home;