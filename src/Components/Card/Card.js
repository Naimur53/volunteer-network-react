import React from 'react';
import { useHistory } from 'react-router';

const Card = props => {
    const color = ['#BC132B', '#BC1398', '#5E13BC', '#1EB0D6'];
    const history = useHistory();
    const bg = Math.ceil(Math.random() * 3);
    console.log(bg);

    const { img, name } = props.info;
    const handleClick = () => {
        history.push(`/register/${name}`)
    }
    console.log(props.info);
    return (
        <div onClick={handleClick} className="col">
            <div className="card rounded-3 h-100">
                <img src={img} className="card-img-top" alt="..." />
                <div style={{ background: `${color[bg]}`, marginTop: '-50px' }} className="card-body  rounded-3 text-white py-4">
                    <h5 className="card-title text-capitalize text-center">{name}</h5>
                </div>
            </div>
        </div>

    );
};

export default Card;