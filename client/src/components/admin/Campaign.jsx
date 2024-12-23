import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import axios from 'axios';
import { Add, Delete, Edit } from '@mui/icons-material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
// import Update from './Update';

const Campaign = () => {
    const [campaigns, setCampaigns] = useState([]);
    const [selectedTemplate, setSelectedTemplate] = useState(null);
    const navigate = useNavigate()

    useEffect(() => {
        const fetchTemplates = async () => {
            try {
                const response = await axios.get("https://siraj-3mds.onrender.com/campaign");
                setCampaigns(response.data); // Update state with fetched data
                console.log("Admin Log", campaigns);

            } catch (error) {
                console.error("Error fetching campaigns:", error);
            }
        };
        fetchTemplates();
    }, []);

    const handleEditClick = (campaignId) => {
        // Navigate to the update page with the template ID
        navigate(`/admin/campaign/${campaignId}`);
        console.log("ID: ", campaignId);
        
    };

    const handleDelete = async (campaignId) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this template?');
        if (!confirmDelete) return;

        try {
            const response = await axios.delete(`https://siraj-3mds.onrender.com/templates/${campaignId}`);
            if (response.status === 200) {
                console.log('Template deleted successfully');
                setCampaigns(campaigns.filter((campaign) => campaign._id !== campaignId)); // Update UI
            }
        } catch (error) {
            console.error('Error deleting template:', error);
            alert('Failed to delete template');
        }
    };

    return (
        <>
            <div className='flex flex-row'>
                <Sidebar />
                <div className="flex flex-col gap-5 p-5 w-[calc(100vw-260px)] relative ">
                    <Link to="/admin/add" className='flex items-center gap-3 w-[180px] p-2 hover:bg-[--SecBgColor] '><Add /> Add A Campaign</Link>
                    {campaigns.map((campaign) => (
                        <div key={campaign._id} className="flex items-center justify-between w-full min-h-[300px] bg-[--SecBgColor] p-5 gap-5 ">
                            <div className="flex flex-col gap-7">
                                <img src={`https://siraj-3mds.onrender.com/${campaign.pic}`} alt="Template Pic" className='max-h-[80px] w-full object-cover rounded-[5px]' />
                                <div className="flex flex-col justify-between max-w-[150px] ">
                                    <h1 className='font-extrabold text-3xl'>{campaign.campaignName}</h1>
                                    <p>{campaign.category}</p>
                                    <p>{campaign.campaignLink}</p>
                                </div>
                            </div>
                            <p>{campaign.description}</p>
                            <div className="flex flex-col gap-3">
                                <p>Current: ${campaign.current}</p>
                                <p>Target: ${campaign.target}</p>
                            </div>
                            <div className="flex gap-3">
                                <button onClick={() => handleEditClick(campaign._id)}><Edit /></button>
                                <button onClick={() => handleDelete(campaign._id)}><Delete /></button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Campaign