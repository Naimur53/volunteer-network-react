import React, { useEffect, useState } from 'react';
import axios from 'axios';
const ManageUser = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/userEvents')
            .then(res => res.json())
            .then(result => setUsers(result));
    }, []);
    let allSingleUser = [];
    users.forEach(data => {
        // !allSingleUser.filter(d => d.email !== data.email).includes(data.email)
        const s = data.email
        const f = allSingleUser.filter(ix => ix.email === s);
        console.log('f', f);
        if (f.length <= 0) {
            allSingleUser = [...allSingleUser, data];
            console.log('hi');
        }
    });
    console.log('all', allSingleUser);
    // const handleDelete = email => {
    //     axios.delete(`http://localhost:5000/user/${email}`).then(res => console.log(res))
    // }
    // console.log(users);
    return (
        <div className='container'>
            <table className='table'>
                <thead>
                    <tr className='table-primary'>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allSingleUser.map(data =>
                            <tr >
                                <th scope="col">{data.name}</th>
                                <th scope="col">{data.email}</th>
                                <th scope="col">{data.date}</th>
                            </tr>)
                    }
                </tbody>
            </table>

        </div>
    );
};

export default ManageUser;