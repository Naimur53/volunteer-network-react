import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
const Home = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/events')
            .then(res => res.json())
            .then(result => setData(result));
    }, [])
    return (
        <div className='container'>

            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    data.map(singleData => <Card key={singleData._id} info={singleData}></Card>)
                }
            </div>

        </div>
    );
}

export default Home;