import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios';
import { Spinner } from 'react-bootstrap';
const Register = () => {
    const { user } = useAuth();
    const { _id } = useParams();
    const history = useHistory();
    const [event, setEvent] = useState({});
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    useEffect(() => {
        fetch(`http://localhost:5000/events/${_id}`)
            .then(res => res.json())
            .then(result => setEvent(result));
    }, [])

    const notify = () => {
        toast.success(<div>successfully Register
            <br /> <small>Going to home</small>
        </div>, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000,
        });
    };

    const onSubmit = data => {
        console.log(data);
        data["img"] = event.img;
        axios.post('http://localhost:5000/register', data).then(res => console.log(res));
        axios.update('http://localhost:5000/register', date).then(res => console.log(res));
        console.log(event);

        notify();
        setTimeout(() => {
            history.push('/home');
        }, 3000);
    }
    if (!event.name) {
        return <div className="w-100 text-center"><Spinner className='text-center' animation="border" variant="primary" /></div>
    }
    return (
        <div className='container d-flex justify-content-center'>
            <div>
                <div className=' w-50 mb-5'>
                    <img className="img-fluid " src="https://i.ibb.co/PDSK3FR/Group-1329.png" alt="" />
                </div>
                <form className='shadow p-5' onSubmit={handleSubmit(onSubmit)}>
                    {/* register your input into the hook by invoking the "register" function */}
                    <input placeholder='Full Name' className='w-100  border-bottom-1 border-top-0 border-start-0 border-end-0 mb-4 border-secondary border-bottom-3' defaultValue={user.displayName} {...register("name")} />
                    <br />
                    <input placeholder='Email' className='w-100  border-bottom-1 border-top-0 border-start-0 border-end-0 mb-4 border-secondary border-bottom-3' defaultValue={user.email} {...register("email")} />
                    <br />
                    <input type='date' className='w-100  border-bottom-1 border-top-0 border-start-0 border-end-0 mb-4 border-secondary border-bottom-3' defaultValue={date} {...register("date")} />
                    <br />
                    {/* include validation with required or other standard HTML validation rules */}
                    <input defaultValue='I Will try my best' placeholder='Description' className='w-100  border-bottom-1 border-top-0 border-start-0 border-end-0 mb-4 border-secondary border-bottom-3' {...register("description", { required: true })} />

                    <input placeholder='Event Name' className='w-100  border-bottom-1 border-top-0 border-start-0 border-end-0 mb-4 border-secondary border-bottom-3' defaultValue={event.name} {...register("event", { required: true })} />
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>This field is required</span>}
                    <br />

                    <input disabled={event.name ? false : true} className='btn btn-primary text-white text-center w-100 rounded-0' value='Registration' type="submit" />
                </form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Register;