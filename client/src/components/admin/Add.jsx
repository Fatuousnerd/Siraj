import React, { useState } from 'react'
import Sidebar from './Sidebar'
import { Category } from './Data.jsx'
import axios from "axios";
import { useLocation, useNavigate } from 'react-router-dom';

const Add = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        pic: null,
        campaignName: "",
        category: "",
        description: "",
        campaignLink: "",
        current: 0,
        target: 0,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value, // For files, use `files[0]`
        });

    };

    // const msg = document.getElementById('id');
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("pic", formData.pic);
        data.append("campaignName", formData.campaignName);
        data.append("category", formData.category);
        data.append("description", formData.description);
        data.append("campaignLink", formData.campaignLink);
        data.append("current", formData.current);
        data.append("target", formData.target);
        console.log(formData);

        try {
            const res = await axios.post("https://siraj-3mds.onrender.com/api/campaign", data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            console.log("Campaign added successfully!");
            navigate("/admin/campaign")
        } catch (err) {
            console.error(err);
            console.log("Failed to add campaign!!!");
        }
        
    };

    return (
        <>
            <div className='flex flex-row'>
                <Sidebar />
                <form onSubmit={handleSubmit} className='flex flex-col gap-5 w-[calc(100vw-260px)] relative p-10'>
                    <input type="file" name="pic" onChange={handleChange} className="cursor-pointer rounded-[5px] p-2 border-0 outline-0 bg-[--SecBgColor] focus:border-solid focus:border-[--MainTextColor] focus:border-[1px] " />
                    <input type="text" name="campaignName" placeholder="Campaign Name" onChange={handleChange} className="rounded-[5px] p-2 border-0 outline-0 bg-[--SecBgColor] focus:border-solid focus:border-[--MainTextColor] focus:border-[1px] " />
                    <select name="category" onChange={handleChange} className="rounded-[5px] p-2 border-0 outline-0 bg-[--SecBgColor] focus:border-solid focus:border-[--MainTextColor] focus:border-[1px] ">
                        {Category.map((item) => (
                            <option key={item.id} value={item}>
                                {item}
                            </option>
                        ))}
                    </select>
                    <textarea name="description" rows={5} placeholder="Campaign Description" onChange={handleChange} className="rounded-[5px] p-2 border-0 outline-0 bg-[--SecBgColor] focus:border-solid focus:border-[--MainTextColor] focus:border-[1px] "></textarea>
                    <input type="url" name="campaignLink" placeholder="Campaign Link" onChange={handleChange} className="rounded-[5px] p-2 border-0 outline-0 bg-[--SecBgColor] focus:border-solid focus:border-[--MainTextColor] focus:border-[1px] " />
                    <div className="flex justify-around gap-2">
                        <input type="number" name="sale" placeholder="Current" onChange={handleChange} className="w-full rounded-[5px] p-2 border-0 outline-0 bg-[--SecBgColor] focus:border-solid focus:border-[--MainTextColor] focus:border-[1px] " />
                        <input type="number" name="price" placeholder="Target" onChange={handleChange} className="w-full rounded-[5px] p-2 border-0 outline-0 bg-[--SecBgColor] focus:border-solid focus:border-[--MainTextColor] focus:border-[1px] " />
                    </div>
                    <button type="submit" className="rounded-[5px] p-2 border-[1px] border-solid border-transparent outline-0 bg-[--HTextColor] hover:border-solid hover:border-[--SecTextColor] hover:text-current hover:border-[2px] ease duration-75">Add Campaign</button>
                    <small className='text-center' id='msg'></small>
                </form>
            </div>
        </>
    )
}

export default Add