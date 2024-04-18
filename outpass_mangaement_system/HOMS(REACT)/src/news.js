// news.js
import React, { useState, useEffect } from 'react';
import "./color.css";



const News = () => {


    const [eventsdata, setEventesData] = useState([]);


    //     const refreshPage = (e) => {
    //     location.reload();
    //   };


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
            // console.log(data);
        } catch (error) {
            console.error('Error:', error.message);
            // Handle error
        }

    };



    //  const deleteOutpass = async (id) => {
    //     try {
    //       const response = await fetch(`http://localhost:5000/outpasses/${id}`, {
    //         method: 'DELETE',
    //       });
    //       if (!response.ok) {
    //         throw new Error('Failed to delete outpass');
    //       }
    //       setOutpasses(outpasses.filter(outpasses => outpasses.id !== id));
    //     } catch (error) {
    //       console.error('Error:', error.message);
    //       // Handle error
    //     }
    //   };




    return (
        <>


            <h2>NEWS & EVENT</h2>
            

            {eventsdata.map((eventsdata) => (
                <div id='newscard' key={eventsdata._id} >

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

export default News;
