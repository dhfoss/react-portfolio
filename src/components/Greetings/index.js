import React, { useEffect, useState } from 'react';

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
        <div className='container'>
            <h1>{greeting}!</h1>
            <h2>My name is Daniel Hawthorne-Foss</h2>
            <h3>Welcome to my portfolio</h3>
        </div>
    )
}

export default Greetings;