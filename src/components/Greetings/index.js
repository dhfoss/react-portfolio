import React, { useEffect, useState } from 'react';
import { Parallax } from 'react-parallax';
import macaw from '../../images/macaw.jpg';

const Greetings = () => {
    const [greeting, setGreeting] = useState('Hello');

    useEffect(() => {
        const currentHour = new Date().getHours();
        if (currentHour < 4 || currentHour > 17) {
            setGreeting('Good Evening');
        } else if (currentHour >= 4 && currentHour < 12) {
            setGreeting('Good Morning');
        } else if (currentHour >= 12 && currentHour <= 17) {
            setGreeting('Good Afternoon')
        }
    }, []);

    return (
        <Parallax
        bgImage={macaw}
        strength={100}
        bgImageAlt={'Sky'}
        >
            <div className='container' style={{margin: '200px'}}>
                <h1>{greeting}!</h1>
                <h2>My name is <span>Daniel Hawthorne-Foss</span></h2>
                <h3>Welcome to my portfolio</h3>
            </div>
        </Parallax>
    )
}

export default Greetings;