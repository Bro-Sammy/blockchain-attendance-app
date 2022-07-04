import { AcademicCapIcon, BookOpenIcon, LogoutIcon, MenuAlt3Icon, MenuAlt4Icon, UserGroupIcon, ViewGridIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import {useState} from 'react'
import {useMoralis} from "react-moralis"

function SideBar() {
    const {logout} = useMoralis()
    const [toggle, setToggle] = useState(false);

  return (
    <>
        <div className="hidden lg:flex flex-col w-44 items-center bg-slate-900">
          <div className="bg-slate-200 w-full py-4 px-3 text-center">
            <div className="font-black text-2xl flex items-center w-full justify-center">
              <img className="w-9 h-8" src="/ethicon.png" /> dApp
            </div>
          </div>

          <nav className="mt-14 font-semibold">
            <ul className="flex flex-col gap-10 items-start">
              <Link href={"/admin"}>
                <a>
                  <li className='flex text-slate-200 items-center justify-center gap-2'><ViewGridIcon className='w-6 h-6 text-yellow-600'/> Dashboard</li>
                </a>
              </Link>
              <Link href={"/admin/student_admin"}>
                <a>
                  <li className='flex text-slate-200 items-center justify-center gap-2'><UserGroupIcon className='w-6 h-6 text-yellow-600'/>Students</li>
                </a>
              </Link>
              <Link href={"/admin/lecturer_admin"}>
                <a>
                  <li className='flex text-slate-200 items-center justify-center gap-2'><AcademicCapIcon className='w-6 h-6 text-yellow-600'/>Lectures</li>
                </a>
              </Link>
              <Link href={"/admin/courses"}>
                <a>
                  <li className='flex text-slate-200 items-center justify-center gap-2'><BookOpenIcon className='w-6 h-6 text-yellow-600'/>Courses</li>
                </a>
              </Link>
              <Link href={"/"}>
                <a>
                  <li onClick={()=>logout()} className='flex text-slate-200 items-center justify-center gap-2'><LogoutIcon className='w-6 h-6 text-yellow-600'/>logout</li>
                </a>
              </Link>
            </ul>
          </nav>
        </div>

        {/* Small Screen */} 
        <span className={`lg:hidden fixed top-6 left-0 z-30`} onClick={()=>setToggle(!toggle)}><MenuAlt3Icon className='stroke-1 w-8 h-8 text-yellow-600'/></span>
        <div onClick={()=>setToggle(!toggle)}
            className={`lg:hidden fixed top-0 left-0 z-30 w-full bg-slate-900/50 h-screen ease-in-out duration-500 delay-150 ${
              toggle ? "-translate-x-0" : "-translate-x-full"
            }`}
          >
           
        {toggle && <div className="lg:hidden flex-col w-40 h-screen items-center bg-slate-900">
          <div className="bg-slate-200 w-full py-4 px-3 text-center">
            <div className="font-black text-2xl flex items-center w-full justify-center">
              <img className="w-9 h-8" src="/ethicon.png" /> dApp
            </div>
          </div>

          <nav className="mt-14 font-semibold px-6">
            <ul className="flex flex-col gap-10 items-start">
              <Link href={"/admin"}>
                <a>
                  <li className='flex text-slate-200 items-center justify-center gap-2'><ViewGridIcon className='w-6 h-6 text-yellow-600'/> Dashboard</li>
                </a>
              </Link>
              <Link href={"/admin/student_admin"}>
                <a>
                  <li className='flex text-slate-200 items-center justify-center gap-2'><UserGroupIcon className='w-6 h-6 text-yellow-600'/>Students</li>
                </a>
              </Link>
              <Link href={"/admin/lecturer_admin"}>
                <a>
                  <li className='flex text-slate-200 items-center justify-center gap-2'><AcademicCapIcon className='w-6 h-6 text-yellow-600'/>Lectures</li>
                </a>
              </Link>
              <Link href={"/admin/courses"}>
                <a>
                  <li className='flex text-slate-200 items-center justify-center gap-2'><BookOpenIcon className='w-6 h-6 text-yellow-600'/>Courses</li>
                </a>
              </Link>
              <Link href={"/"}>
                <a>
                  <li onClick={()=>logout()} className='flex text-slate-200 items-center justify-center gap-2'><LogoutIcon className='w-6 h-6 text-yellow-600'/>logout</li>
                </a>
              </Link>
            </ul>
          </nav>
        </div>}
        </div>
    </>
  )
}

export default SideBar