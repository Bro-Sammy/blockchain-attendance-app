import { BellIcon, HomeIcon, LogoutIcon, UserIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router';
import React from 'react'
import { useMoralis } from "react-moralis";

function Footer() {
  const router = useRouter();
  const {
    authenticate,
    isAuthenticated,
    user,
    authError,
    logout,
    setUserData,
  } = useMoralis();

  const checkout = ()=>{
    logout()
    return router.push('/')
  }


  return (
    <>
       <nav className="w-full bg-black fixed bottom-0">
        <ul className="flex justify-around lg:justify-center lg:gap-20 items-center w-full h-full py-2">
          <li className="flex flex-col gap-1 hover:scale-105 duration-500 items-center" onClick={()=>router.push('/student')}>
            <HomeIcon className="lg:w-8 w-6 text-yellow-500" />
            <small className="text-slate-200">Home</small>
          </li>
          <li className="flex flex-col gap-1 hover:scale-105 duration-500 items-center">
            <BellIcon className="lg:w-8 w-6 text-slate-400" />
             <small className="text-slate-200">Notification</small>
          </li>
          <li className="flex flex-col gap-1 hover:scale-105 duration-500 items-center">
            <UserIcon className="lg:w-8 w-6 text-slate-400" />
             <small className="text-slate-200">Profile</small>
          </li>
          <li className="flex flex-col gap-1 hover:scale-105 duration-500 items-center" onClick={()=>checkout()}>
            <LogoutIcon className="lg:w-8 w-6 text-slate-400" />
             <small className="text-slate-200">Logout</small>
          </li>
        </ul>
      </nav>
        
    </>
  )
}

export default Footer