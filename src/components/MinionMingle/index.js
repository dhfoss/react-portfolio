import React from 'react';
import minion from '../../images/minion.jpg';
import minionMingleLogo from '../../images/minionMingleLogo.png'
import { Parallax } from 'react-parallax';

const MinionMingle = () => {
    return (
        <div>  
            <a href='https://mingle-minion.herokuapp.com/' target='_blank'>
                <Parallax
                bgImage={minion}
                strength={-300}
                bgImageAlt="Minion Mingle"
                >
                    <div style={{padding: '100px'}}>
                        <img src={minionMingleLogo} alt='Minion Mingle Logo'/>
                    </div>
                </Parallax>
            </a>
            <div className='container container-fluid'>
                <h2 className='mt-2'>A whimsical dating website using a SQL database, with private messaging and public chatrooms</h2>
                <h3> <a className='external__link' href='https://mingle-minion.herokuapp.com/' target='_blank'>Minion Mingle</a> || <a href='https://github.com/dhfoss/Dating-Website' className='external__link' target='_blank'>Repository</a></h3>
            </div>


        </div>
    )
}

export default MinionMingle;