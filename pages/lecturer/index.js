import { CalendarIcon, CheckIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React from "react";
import LecturerTop from "../../components/LecturerTop";
import { useMoralis } from "react-moralis";

function Dashboard() {
  const {
    authenticate,
    isAuthenticated,
    user,
    authError,
    logout,
    setUserData,
  } = useMoralis();


  return (
    <div className="h-screen">
      <LecturerTop />
      <main className="px-10 mt-8">
        <div className="rounded-lg bg-slate-900 border-l border-yellow-900 w-full h-30 py-2 flex justify-evenly items-center mb-10">
          <div className="flex flex-col justify-center items-center gap-2">
            <span className="px-2 bg-yellow-500 text-sm font-bold rounded-full">
              Upcoming
            </span>
            <h3 className="font-semibold text-xl text-slate-50">SOT204</h3>
          </div>
          <div className="flex flex-col justify-center items-center gap-1">
            <h3 className="font-semibold text-3xl text-slate-50">80</h3>
            <small className="px-1 bg-slate-500/70 text-blue-200 text-sm font-bold rounded-full">
              Total Students
            </small>
          </div>
          <div>
            <div className="w-14">
              <Image
                src={"/schedule.png"}
                layout="responsive"
                width={512}
                height={512}
                alt="logo"
                blurDataURL="/schedule.png"
                placeholder="blur"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* current class */}
        <div className="rounded-2xl bg-slate-900 border-l border-yellow-900 shadow-md lg:w-1/2">
          <div className="flex font-semibold gap-2 items-center text-slate-200 px-4 py-3 w-full mb-2">
            <CalendarIcon className="w-4 h-4 text-slate-300 bg-orange-600 rounded" />
            Session
          </div>
          <div className="mx-3 rounded-xl px-4 pb-4 bg-slate-800/80">
            <div className="flex justify-between items-center w-full py-4 mb-2">
              <span>
                <h3 className="font-bold text-slate-300 text-xl">
                  System Analysis
                </h3>
                <small className="text-sm text-slate-400">10min time</small>
              </span>
              <div className="gap-1 text-slate-200 flex-col flex">
                <hr />
                SOT102
              </div>
            </div>

            <div className="flex justify-between items-center">
              <span className="flex gap-2">
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
                <h2 className="text-slate-400 flex flex-col">
                  <small>lecturer</small>
                  <span>Dr. Emmanuel Djaba</span>
                </h2>
              </span>

              <button className="bg-green-600 font-bold hover:bg-green-700 shadow-lg w-fit h-fit hover:text-slate-100 text-slate-200 p-2 rounded-full "  onClick={()=>authenticate}>
                Start Class
              </button>
            </div>
          </div>
          <div className="flex h-32 w-full justify-center items-center gap-20">
            <div className="flex flex-col justify-center items-center gap-1">
              <h3 className="font-semibold text-4xl text-slate-50">50</h3>
              <small className="px-1 bg-slate-500/70 text-blue-200 text-sm font-bold rounded-full">
                Class Total
              </small>
            </div>
            <div className="flex flex-col justify-center items-center gap-1">
              <h3 className="font-semibold text-4xl text-slate-50">15</h3>
              <small className="px-1 bg-slate-500/70 text-blue-200 text-sm font-bold rounded-full">
                Present
              </small>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
