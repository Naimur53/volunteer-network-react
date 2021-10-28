import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
const Home = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(result => setData(result));
    }, [])
    console.log(data);
    return (
        <div className='container'>

            <div class="row row-cols-1 row-cols-md-3 g-4">
                {
                    data.map(singleData => <Card info={singleData}></Card>)
                }
            </div>

        </div>
    );
}

export default Home;