import Sidebar from './Sidebar'
import Navbar from './Navbar'

const Admin = () => {
    
    return (
        <>
            <div className='flex flex-row'>
                <Sidebar />
                <Navbar />
                <div className="flex"></div>
            </div>
        </>
    )
}

export default Admin