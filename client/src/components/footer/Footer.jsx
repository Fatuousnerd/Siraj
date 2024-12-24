import './footer.scss';
import { Instagram, Mail, Phone, Telegram, WhatsApp, X, YouTube } from '@mui/icons-material';

const Footer = () => {
    return (
        <>
            <div className='footer'>
                
                <div className="text">
                    <h1>
                    <span>Join Us</span> in <span>Making a Difference</span> Today.
                    </h1>
                </div>
                
                <div className="socials">
                    <ul>
                        <li><a href="https://www.instagram.com/sirajcharity/" target='_blank'><Instagram/></a></li>
                        <li><a href=""><X/></a></li>
                        <li><a href="mailto:sirajcharityfoundation@gmail.com"><Mail/></a></li>
                        <li><a href=""><YouTube/></a></li>
                        <li><a href=""><WhatsApp/></a></li>
                    </ul>
                </div>
                
            </div>
        </>
    )
}

export default Footer