import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import EventCard from '../EventCard/EventCard';

const Events = () => {
    const { user } = useAuth();
    const [events, setEvents] = useState([]);
    useEffect(() => {
        if (user.email) {
            axios.post('http://localhost:5000/userEvent', user)
                .then(res => setEvents(res.data));
        }

    }, [user])
    const handleClick = _id => {
        axios.delete(`http://localhost:5000/events/${_id}`)
            .then(res => {
                console.log(res);
                if (res.data?.deletedCount) {
                    const remaining = events.filter(data => data._id !== _id)
                    console.log(remaining);
                    setEvents(remaining)

                }
            })
    }
    console.log(events);

    return (
        <div className='container'>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {
                    events.map(data => <EventCard key={data._id} info={data} handleClick={handleClick}></EventCard>)
                }
            </div>

        </div>
    );
};

export default Events;