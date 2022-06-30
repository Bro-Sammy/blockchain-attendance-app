import { useEffect, useState } from "react";
import {
  BellIcon,
  CalendarIcon,
  CheckIcon,
  ClockIcon,
  HomeIcon,
  LocationMarkerIcon,
  LogoutIcon,
  UserIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import Image from "next/image";
import TopBar from "../../components/TopBar";
import { useMoralis } from "react-moralis";
import Footer from "../../components/Footer";

function Dashboard() {
  const [lat, setLat] = useState();
  const [lng, setLng] = useState();
  const {
    authenticate,
    isAuthenticated,
    user,
    authError,
    logout,
    setUserData,
  } = useMoralis();

  const gl = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
        console.log(position);
      });
    }
  };

  useEffect(() => {
    gl();
  }, []);

  return (
    <>
      <TopBar />

      <main className="px-2 md:px-20 h-screen mb-10">
        <div className="p-2 mb-5">
          <small className="text-slate-500">Good Morning</small>
          <h2 className="font-bold text-white">Hi, Samuel Amoah</h2>
        </div>

        {/* current class */}
        <div className="rounded-2xl bg-slate-900 border-l border-yellow-900 shadow-md lg:w-1/2">
          <div className="flex font-semibold gap-2 items-center text-slate-200 px-4 py-3 w-full mb-2">
            <CalendarIcon className="w-4 h-4 text-slate-300 bg-orange-600 rounded" />
            Current Session
          </div>
          <div className="mx-3 rounded-xl px-4 pb-4 bg-slate-800/80">
            <div className="flex justify-between items-center w-full py-4 mb-2">
              <span>
                <h3 className="font-bold text-slate-300 text-xl">
                  System Analysis
                </h3>
                <small className="text-sm text-slate-400">10min ago</small>
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

              <button className="bg-green-600 hover:bg-green-700 shadow-lg w-fit h-fit hover:text-slate-100 text-slate-200 p-2 rounded-full ">
                <CheckIcon className="w-8" />
              </button>
            </div>
          </div>
        </div>
        

        {/* <b className="flex p-4 bg-green-700 text-sm text-white w-fit rounded">
          {" "}
          <LocationMarkerIcon className="w-5" /> You can now mark attendance{" "}
          {lat}
        </b> */}

        {/* Todays classes */}

        <h3 className="text-lg text-slate-500 font-bold mt-8 mb-3 w-full pl-4">
          Today's Schedule
        </h3>

        <div className="flex flex-row gap-6 overflow-scroll scrollbar-none p-2">
          <div className="rounded-2xl p-6 bg-slate-900 border-l border-yellow-900  shadow-md w-56 h-fit">
            <div className="flex flex-col gap-3">
              <button className="p-2 bg-slate-200/20 rounded-lg w-fit">
                <ViewGridIcon className="w-8 h-8 text-emerald-500" />
              </button>
              <div className="flex flex-col">
                <h3 className="font-bold text-slate-400 text-lg whitespace-nowrap">
                  System Analysis
                </h3>
                <p className="text-sm text-slate-400 whitespace-nowrap">
                  8:00AM - 11:00AM GMT
                </p>
              </div>
            </div>
            <p className="mt-8 bg-cyan-400/20 shadow w-full text-cyan-600 flex justify-center font-semibold p-4 rounded-xl">
              Ongoing
            </p>
          </div>

          <div className="rounded-2xl p-6 bg-slate-900 border-l border-yellow-900  shadow-md w-56 h-fit">
            <div className="flex flex-col gap-3">
              <button className="p-2 bg-slate-200/10 rounded-lg w-fit">
                <ClockIcon className="w-8 h-8 text-orange-400" />
              </button>
              <div className="flex flex-col">
                <h3 className="font-bold text-slate-400 text-lg whitespace-nowrap">
                  OOP 2
                </h3>
                <p className="text-sm text-slate-400 whitespace-nowrap">
                  12:00PM - 3:00PM GMT
                </p>
              </div>
            </div>
            <p className="mt-8 bg-orange-400/20 shadow w-full text-orange-500 flex justify-center font-semibold p-4 rounded-xl">
              Next Class
            </p>
          </div>
          <div className="rounded-2xl p-6 bg-slate-900 border-l border-yellow-900  shadow-md w-56 h-fit">
            <div className="flex flex-col gap-3">
              <button className="p-2 bg-slate-200/10 rounded-lg w-fit">
                <ClockIcon className="w-8 h-8 text-orange-400" />
              </button>
              <div className="flex flex-col">
                <h3 className="font-bold text-slate-400 text-lg whitespace-nowrap">
                  Web Development
                </h3>
                <p className="text-sm text-slate-400 whitespace-nowrap">
                  5:00PM - 8:00PM GMT
                </p>
              </div>
            </div>
            <p className="mt-8 bg-orange-400/20 shadow w-full text-orange-500 flex justify-center font-semibold p-4 rounded-xl">
              Next Class
            </p>
          </div>
          <div className="rounded-2xl p-6 bg-slate-900 border-l border-yellow-900  shadow-md w-56 h-fit">
            <div className="flex flex-col gap-3">
              <button className="p-2 bg-slate-200/10 rounded-lg w-fit">
                <ClockIcon className="w-8 h-8 text-orange-400" />
              </button>
              <div className="flex flex-col">
                <h3 className="font-bold text-slate-400 text-lg whitespace-nowrap">
                  Economics
                </h3>
                <p className="text-sm text-slate-400 whitespace-nowrap">
                  5:00PM - 8:00PM GMT
                </p>
              </div>
            </div>
            <p className="mt-8 bg-orange-400/20 shadow w-full text-orange-500 flex justify-center font-semibold p-4 rounded-xl">
              Next Class
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Dashboard;

export async function getServerSideProps() {
  return {
    props: {},
  };
}
