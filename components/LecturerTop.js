import { LocationMarkerIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import React from 'react'
import { useMoralis } from "react-moralis";

const LecturerTop = () => {
  const {
    authenticate,
    isAuthenticated,
    user,
    authError,
    logout,
    setUserData,
  } = useMoralis();
  return (
    <>
    <div className="flex justify-between items-center px-4 pt-4 lg:pt-8 lg:p-10 bg-black">
        <div className="flex items-center flex-row gap-3 text-slate-300 w-full h-fit p-2 flex-1">
          <div className="w-10 lg:w-10">
            <Image
              src={"/glogo.png"}
              layout="responsive"
              width={512}
              height={512}
              alt="logo"
              blurDataURL="/glogo.png"
              placeholder="blur"
              className="object-cover rounded-full"
            />
          </div>
          <span className="">
            <h3 className="font-bold">GIMPASOT</h3>
            <small className="text-sm whitespace-nowrap font-extralight">
              {new Date().toDateString()}
            </small>
          </span>
        </div>

        <div className="flex-1 w-full flex justify-end items-center gap-2">
          <span className="p-1 text-sm bg-yellow-300 h-fit w-fit font-bold text-slate-900 flex items-center rounded-lg truncate">
            <LocationMarkerIcon className="ww-5 h-5 text-red-800" /> F118
          </span>
          <div className="w-10 lg:w-10">
            <Image
              src={
                "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
              }
              layout="responsive"
              width={512}
              height={512}
              alt="logo"
              blurDataURL="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
              placeholder="blur"
              className="object-cover rounded-full"
            />
          </div>
        </div>


      </div>
    </>
  )
}

export default LecturerTop