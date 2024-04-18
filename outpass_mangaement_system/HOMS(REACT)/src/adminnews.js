// Adminnews.js
import React, { useState, useEffect } from 'react';
import "./color.css";



const Adminnews = () => {


    const [eventsdata, setEventesData] = useState([]);


    const refreshPage = (e) => {
        location.reload();
    };


    useEffect(() => {
        fetchEvents();

    }, []);

    const fetchEvents = async () => {
        try {
            const response = await fetch('http://localhost:5000/news');
            if (!response.ok) {
                throw new Error('Failed to fetch events');
            }
            const data = await response.json();

            setEventesData(data);
            console.log(data);
        } catch (error) {
            console.error('Error:', error.message);
            // Handle error
        }

    };



    const deleteEvent = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/news/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to delete events');
            }
            setEventesData(eventsdata.filter(eventsdata => eventsdata.id !== id));
        } catch (error) {
            console.error('Error:', error.message);
            // Handle error
        }
    };




    return (
        <>


            <h2>NEWS & EVENT</h2>
            <button onClick={refreshPage} id='rebtn'>Refresh</button>
            {eventsdata.map((eventsdata) => (
                <div id='newscard' key={eventsdata.id} >
                    <button className='eventdel' onClick={() => deleteEvent(eventsdata._id)}>Delete</button>

                    <section className='dateal'>
                        <div className='montcad'>
                            <strong >{eventsdata.day}</strong><br />
                        </div>
                        <strong className='datecad'>{eventsdata.date}</strong>
                    </section>
                    <p className='newstit'> {eventsdata.title} </p> <br />
                    <p className='newssubtit'> {eventsdata.alte}  </p> <br />

                </div>
            ))}



        </>

    );
};

export default Adminnews;
