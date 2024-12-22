import './faq.scss';
import Navbar from '../navbar/Navbar'
import Accordion from "./Accordion"

const Faq = () => {
    return (
        <>
            <Navbar />
            <div className='faq'>
                <div className="wrapper">

                    <div className="text">
                        <h1>any questions? <br /> we got you.</h1>
                        <p>
                            Welcome to our FAQ page! 
                            Here, 
                            you'll find answers to some of the most common questions about the Siraj Charity Foundation. 
                            Whether you want to know how to donate, where your contribution goes, 
                            or any other details about our mission, we've got you covered. 
                            If you don't find what you're looking for, feel free to contact us directly, 
                            and we'll be happy to assist you. Thank you for supporting our cause!
                        </p>
                        <p>
                            <a href="/contact">
                                Contact Us Instead.
                            </a>
                        </p>
                    </div>

                    <div className="acc">
                        <Accordion />
                    </div>

                </div>

            </div>
        </>
    )
}

export default Faq