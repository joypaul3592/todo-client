import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calender.css'

const Calender = () => {
    return (
        <div className=' max-w-7xl mx-auto '>
            <h1 className=' text-left ml-10 text-xl font-semibold mt-12 text-sky-700'>Calender</h1>
            <Calendar className='react-calendar' />
        </div>
    );
};

export default Calender;