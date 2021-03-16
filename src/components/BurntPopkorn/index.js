import React from 'react';
import popcorn from '../../images/popcorn.jpg';
import burntPopkornLogo from '../../images/burntPopkornLogo.png';
import { Parallax } from 'react-parallax';
import { Link } from 'react-router-dom';



//   const inlineStyle = {
//     background: '#fff',
//     left: '50%',
//     top: '50%',
//     position: 'absolute',
//     padding: '20px',
//     transform: 'translate(-50%, -50%)'
//   }

const BurntPopkorn = () => {
    return (
        <div className='burntPopkornContainer' id="burntPopkorn" style={{ textAlign: 'center' }}>
            <a href='https://burntpopkorn.herokuapp.com/' target='_blank'>
                <Parallax
                bgImage={popcorn}
                strength={-300}
                bgImageAlt="popcorn"
                >
                    <div className='burntPopkornLogo container' style={{padding: '100px'}}>
                        <img src={burntPopkornLogo} alt='Burnt Popkorn Logo' />
                    </div>
                </Parallax>
            </a>
            <div className='container container-fluid'>
                <h2 className='mt-2'>A MERN stack app for saving and sharing movie reviews</h2>
                <h3> <a className='external__link' href='https://burntpopkorn.herokuapp.com/' target='_blank'>Burnt PopKorn</a> || <a href='https://github.com/dhfoss/BurntPopKorn' className='external__link' target='_blank'>Repository</a></h3>
            </div>
        </div>
    )
}

export default BurntPopkorn;