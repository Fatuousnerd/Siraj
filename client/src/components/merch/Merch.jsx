import Navbar from '../navbar/Navbar';
import './merch.scss';

const Merch = () => {
    return (
        <>
            <Navbar />
            <div className='merch'>
                <iframe src="https://sirajcharity.printify.me/products" frameborder="0"></iframe>
            </div>
        </>
    )
}

export default Merch