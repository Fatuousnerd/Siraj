import './donation.scss'
import { Data } from "./Data.jsx";
import axios from 'axios';
import { useEffect, useState } from 'react';

const Single = ({ campaign }) => {
    return (
        <div className="card">
            {/* <img src={campaign.pic} alt="" /> */}
            <div className="text">
                <h1>{campaign.campaignName}</h1>
                <p>{item.description}</p>
            </div>
            <div className="more">
                <p>Target: <span>$</span>{item.value}</p>
                <button>
                    <a href={item.link} target='_blank'>Donate</a>
                </button>
            </div>
        </div>
    )
}

const Carousel = () => {
    
    return (
        <>
            <div className="carousel">
                {campaigns.map(item => (
                    <Single key={item.id} item={item} />
                ))}
            </div>
        </>
    )
}

export default Carousel