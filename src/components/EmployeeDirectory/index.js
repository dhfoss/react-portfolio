import React from 'react';
import employees from '../../images/employeeDirectory.jpg';
import { Parallax } from 'react-parallax';

const inlineStyle = {
    margin: '120px',
    textAlign: 'center',
    fontSize: '300%',
    color: 'black',
    fontWeight: '500'
}

const EmployeeDirectory = () => {
    return (
        <div> 
            <a className='disabled-link' id="employeeDirectory" href='https://dhfoss.github.io/employee-directory/' target='_blank'>
                <Parallax
                bgImage={employees}
                strength={-300}
                bgImageAlt="Employee Directory"
                >
                    <div style={inlineStyle}>
                        Employee Directory
                    </div>
                </Parallax>
            </a>
            <div className='container container-fluid'>
                <h2 className='mt-2'>A ReactJS app for sorting and filtering employee data from Random User Generator API</h2>
                <h3> <a className='external__link' href='https://dhfoss.github.io/employee-directory/' target='_blank'>Employee Directory</a> || <a href='https://github.com/dhfoss/employee-directory' className='external__link' target='_blank'>Repository</a></h3>
            </div>
        </div>
    )
}

export default EmployeeDirectory;