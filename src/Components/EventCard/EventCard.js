import axios from 'axios';
import React from 'react';

const EventCard = props => {
    const { event, description, date, img, _id } = props.info;

    return (
        <div className='col'>
            <div className="card h-100 mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{event}</h5>
                            <p className="card-text">{description}</p>
                            <p className="card-text"><small className="text-muted">{date}</small></p>
                            <button onClick={() => props.handleClick(_id)} className="btn btn-danger">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventCard;