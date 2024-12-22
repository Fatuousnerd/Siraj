import { useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { UserContext } from '../auth/userContext';

const Navbar = () => {
  const location = useLocation();

  useEffect(() => {
    const pathdis = location.pathname
    const pathh = document.getElementById('pathh')
    pathh.innerHTML = pathdis
  })
  const { user } = useContext(UserContext);
  // console.log(user);
  

  return (
    <>
      <div className='h-[60px] w-[100vw] bg-[--SecBgColor] flex items-center justify-between px-3 '>

        <h1 id='pathh' className='capitalize font-extrabold text-2xl'></h1>

        <div className="flex items-center gap-5 ">

          <img src={user.googlePhotoURL} alt="Profile Photo" className='w-[35px] h-[35px] rounded-[50%] ' />

          <div className="flex flex-col gap-px justify-around">
            <h1 className='capitalize font-extrabold text-2xl '>{user.name}</h1>
            <p className='capitalize font-light '>{user.role}</p>
          </div>

        </div>

      </div>
    </>
  )
}

export default Navbar