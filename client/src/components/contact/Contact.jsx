import './contact.scss'
import Navbar from '../navbar/Navbar'
import { Instagram, Mail, Phone, Telegram, WhatsApp, X, YouTube } from '@mui/icons-material';
import { Tooltip } from '@mui/material';

const Contact = () => {
    return (
        <>
            <Navbar />
            <div className='contact'>

                <div className="title">
                    <h1>Contact Us</h1>
                </div>
                <div className="wrapper">

                    <div className="info">

                        <div className="content">
                            <p>Contacts</p>

                            <Tooltip title="E-Mail" placement='right'>
                                <a href="mailto:sirajcharityfoundation@gmail.com">
                                    <Mail /> sirajcharityfoundation@gmail.com
                                </a>
                            </Tooltip>

                            <Tooltip title="Telephone" placement='right'>
                                <a href="tel:">
                                    <Phone /> 0701020304
                                </a>
                            </Tooltip>

                        </div>

                        <div className="content">
                            <p>Socials</p>

                            <Tooltip title="Instagram" placement='right'>
                                <a href="https://www.instagram.com/sirajcharity/" target='_blank'>
                                    <Instagram /> @sirajcharity
                                </a>
                            </Tooltip>

                            <Tooltip title="X/Twitter" placement='right'>
                                <a href="">
                                    <X /> @twitter
                                </a>
                            </Tooltip>
                            
                            <Tooltip title="YouTube" placement='right'>
                                <a href="">
                                    <YouTube /> @youtube
                                </a>
                            </Tooltip>

                        </div>

                    </div>
                    <Tooltip title="Coming Soon">

                        <div className="form" disabled>
                            <form action="" disabled>

                                <div className="holder">
                                    <label htmlFor="name">Name*</label>
                                    <input type="text" name="name" placeholder="John Doe" />
                                </div>

                                <div className='holder'>
                                    <label htmlFor="mail">Email*</label>
                                    <input type="mail" name="mail" placeholder="mail@example.com" />
                                </div>

                                <div className='holder'>
                                    <label htmlFor="message">Message</label>
                                    <textarea name="message" placeholder="Message..." rows={10}></textarea>
                                </div>

                                <button type="submit" disabled>Send</button>
                            </form>

                        </div>
                    </Tooltip>
                </div>

            </div >
        </>
    )
}

export default Contact