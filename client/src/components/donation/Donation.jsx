import './donation.scss';
import axios from "axios";
import Carousel from "./Carousel.jsx"
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Donation = () => {
    const [campaigns, setCampaigns] = useState([]);

    useEffect(() => {
        const fetchCampaigns = async () => {
            try {
                // const response = await axios.get("http://localhost:5000/api/campaign");
                const response = await axios.get("https://siraj-3mds.onrender.com/api/campaign");
                setCampaigns(response.data); // Update state with fetched data
                console.log(campaigns);

            } catch (error) {
                console.error("Error fetching campaigns:", error);
            }
        };
        fetchCampaigns();
    }, []);

    return (
        <>
            <div className='bg-[--ContrastTextColor] lg:h-auto h-[280vh] relative top-[100px] flex flex-col px-[20px] lg:p-[50px] ' id='donate'>

                <h1 className='text-[3.5rem] font-extrabold uppercase '><span>Donate</span> through our <span>Trusted</span> partners</h1>

                <div className="h-[220vh] lg:h-[500px] z-9 flex flex-col lg:flex-row justify-center items-center gap-[30px] relative py-[10px] px-[10px] lg:px-[70px] ">

                    {campaigns.map(item => (

                        <div className="bg-[--SecBgColor] w-[300px] lg:w-[450px] h-[500px] flex flex-col justify-between pb-[15px] rounded-[5px] relative ">
                            <img src={`https://siraj-3mds.onrender.com/${item.pic}`} alt="" className='w-full h-[200px] object-cover rounded-[7.5px] ' />
                            <div className="px-[20px] w-full gap-3 flex flex-col ">
                                <h1 className='font-extrabold capitalize text-2xl '>{item.campaignName}</h1>
                                <p className='h-[100px] '>{item.description}</p>
                            </div>
                            <div className="px-[20px] flex justify-between items-center ">
                                <div>
                                    <p className='font-extrabold text-3xl'>${item.current}</p>
                                    <p className='font-light text-xl'>funded of ${item.target}</p>
                                </div>
                                {/* <p className='font-[800] text-[1.5rem] '>Target: <span>$</span>{item.target}</p> */}
                                <Link to={item.campaignLink} className='p-[7.5px] bg-[--HTextColor] border-0 outline-0 rounded-[1.5px] font-[700] text-[1.25rem] hover:text-[--MainTextColor] '>Donate</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Donation