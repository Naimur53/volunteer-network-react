import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
const Register = () => {
    const { user } = useAuth();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { name } = useParams();
    const history = useHistory();

    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    console.log(date);


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
        notify();
        setTimeout(() => {
            history.push('/home');
        }, 3000);
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
                    <input placeholder='Description' className='w-100  border-bottom-1 border-top-0 border-start-0 border-end-0 mb-4 border-secondary border-bottom-3' {...register("description", { required: true })} />

                    <input placeholder='Event Name' className='w-100  border-bottom-1 border-top-0 border-start-0 border-end-0 mb-4 border-secondary border-bottom-3' defaultValue={name} {...register("event", { required: true })} />
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>This field is required</span>}
                    <br />

                    <input className='btn btn-primary text-white text-center w-100 rounded-0' value='Registration' type="submit" />
                </form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Register;