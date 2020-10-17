import React from 'react';
import './Calendar.css';
import {useEffect, useState} from 'react';
import FetchData from '../../FetchData';
import {Link} from 'react-router-dom';

const fetch = new FetchData();

const Calendar = () => {

    const [launches, setLaunches] =  useState([]);

    useEffect(() => {
        fetch.getLaunches().then( data => setLaunches(data));
    }, [])
    return (
        <section className="calendar">
            <div className="container">
                <ul className="calendar-list">
                    {launches.map( item => (
                        <li key={item.id} className="calendar-item">
                            <article className="launches">
                                <div className="launches-image">
                                    <img src={item.links.patch.small} alt={item.name} />
                                </div>
                                <div className="launches-content">
                                    <h2 className="launches-title">{item.name}</h2>
                                    <Link to={`/details/${item.id}`} className="button launches-details">Подробнее</Link>
                                </div>
                            </article>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Calendar;