import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';

const Update = () => {
    const { campaignId } = useParams(); // Get campaign ID from URL
    console.log("Campaign ID:", campaignId);

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        category: '',
        link: '',
        current: '',
        target: '',
        pic: '',
    });
    const [isLoading, setIsLoading] = useState(true);

    // Fetch campaign data
    useEffect(() => {
        const fetchTemplate = async () => {
            try {
                const response = await fetch(`https://siraj-3mds.onrender.com/api/campaign/${campaignId}`);
                const data = await response.json();
                
                setFormData({
                    name: data.campaignName || '',
                    description: data.description || '',
                    category: data.category || '',
                    link: data.campaignLink || '',
                    current: data.current || '',
                    target: data.target || '',
                    pic: data.pic || '',
                });
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching campaign:', error);
                setIsLoading(false);
            }
        };

        fetchTemplate();
    }, [campaignId]);

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch(`https://siraj-3mds.onrender.com/api/campaign/${campaignId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            
            const result = await response.json();
    
            if (response.ok) {
                console.log('Campaign updated successfully');
                navigate('/admin/campaign'); // Redirect back to the campaign list
            } else {
                console.log('Failed to update campaign');
            }
        } catch (error) {
            console.error('Error updating campaign:', error);
            console.log('Error updating campaign');
        }
    };
    

    if (isLoading) return <p>Loading campaign...</p>;

    return (
        <>
            <div className="flex flex-row">
                <Sidebar />
                <form onSubmit={handleSubmit} className='flex flex-col gap-5 w-[calc(100vw-260px)] relative p-10'>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder='Campaign Name'
                        className='rounded-[5px] p-2 border-0 outline-0 bg-[--SecBgColor] focus:border-solid focus:border-[--MainTextColor] focus:border-[1px]'
                    />
                    <input
                        type="text"
                        name="link"
                        value={formData.link}
                        onChange={handleChange}
                        placeholder='Campaign Link'
                        className='rounded-[5px] p-2 border-0 outline-0 bg-[--SecBgColor] focus:border-solid focus:border-[--MainTextColor] focus:border-[1px]'
                    />
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows={5}
                        placeholder='Campaign Description'
                        className='rounded-[5px] p-2 border-0 outline-0 bg-[--SecBgColor] focus:border-solid focus:border-[--MainTextColor] focus:border-[1px]'
                    />
                    <input
                        type="text"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        placeholder='Category'
                        className='rounded-[5px] p-2 border-0 outline-0 bg-[--SecBgColor] focus:border-solid focus:border-[--MainTextColor] focus:border-[1px]'
                    />
                    <input
                        type="number"
                        name="current"
                        value={formData.current}
                        onChange={handleChange}
                        placeholder='Current'
                        className='rounded-[5px] p-2 border-0 outline-0 bg-[--SecBgColor] focus:border-solid focus:border-[--MainTextColor] focus:border-[1px]'
                    />
                    <input
                        type="number"
                        name="target"
                        value={formData.target}
                        onChange={handleChange}
                        placeholder='Target'
                        className='rounded-[5px] p-2 border-0 outline-0 bg-[--SecBgColor] focus:border-solid focus:border-[--MainTextColor] focus:border-[1px]'
                    />
                    <input
                        type="file"
                        name="pic"
                        onChange={handleChange}
                        className='cursor-pointer rounded-[5px] p-2 border-0 outline-0 bg-[--SecBgColor] focus:border-solid focus:border-[--MainTextColor] focus:border-[1px]'
                    />
                    <button
                        type="submit"
                        className='rounded-[5px] p-2 border-[1px] border-solid border-transparent outline-0 bg-[--HTextColor] hover:border-solid hover:border-[--SecTextColor] hover:text-current hover:border-[2px] ease duration-75'
                    >
                        Update Campaign
                    </button>
                </form>
            </div>
        </>
    );
};

export default Update;
