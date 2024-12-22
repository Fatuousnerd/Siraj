import { Add, Remove } from "@mui/icons-material";
import { Q } from "./Q.jsx";
import React, { useState } from 'react'

const Content = ({ item }) => {
    const [accordionOpen, setAccordionOpen] = useState(false);
    return (
        <>
            <button className={accordionOpen ? "closed" : "open"} onClick={() => setAccordionOpen(!accordionOpen)}>
                <span className='titl'>{item.title}</span>
                <span>{accordionOpen ? <Remove /> : <Add />}</span>
            </button>
            <div className='hld'>
                <p className={accordionOpen ? "active" : "inactive"}>{item.answer}</p>
            </div>
        </>
    );
};

const Accordion = () => {
    return (
        <>
            <div className="accordion">
                {Q.map(item => (
                    <Content key={item.id} item={item} />
                ))}
            </div>
        </>
    )
}

export default Accordion