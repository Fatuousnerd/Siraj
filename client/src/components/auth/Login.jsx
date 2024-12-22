import React from 'react'
import Oauth from './Oauth'
import { Link } from 'react-router-dom'
import ThemeToggle from "../../utils/ThemeTogggle"
const Login = () => {
    return (
        <>
            <div className='flex min-h-screen w-full'>

                <div className="hidden lg:flex flex-1 items-center justify-center px-12">

                    <div className="max-w-md space-y-6 text-center text-primary-foreground">

                        <h1 className="text-4xl font-extrabold tracking-tight">
                            Admin Login
                        </h1>
                        <ThemeToggle />
                    </div>

                </div>

                <div className="flex flex-col flex-1 items-center justify-center px-4 py-12 sm:px-6 lg:px-8 gap-3">

                    <Oauth />

                    <hr className='w-full h-[2px] bg-blue-500 border-0' />

                    <div className="pr-10 text-center">
                        <Link to="../" className='uppercase font-extrabold text-2xl'>Not an Admin? <span>Go Back Home</span></Link>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Login