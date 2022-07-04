import { useState, useEffect } from "react";
import { ethers } from "ethers";
// import Attendance from "../../artifacts/contracts/Attendance.sol/Attendance.json";
import { useMoralis } from "react-moralis";
import SideBar from "../../components/SideBar";
import Link from "next/link";
import Image from "next/image";
import {
  AcademicCapIcon,
  BookOpenIcon,
  CalculatorIcon,
  UserGroupIcon,
} from "@heroicons/react/solid";
import { contractAddress, ownerAddress } from "../../config";
import { student, lecturer } from "../../seed";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import AdminBanner from "../../components/AdminBanner";

// Admin creates courses and assigns a lecturer and then publish it for the students to enroll
//this way the admin will not need to add students one by one himself. Hence when the student enrolls himself then
// the admin will now have a getAllCourseParticipants function to query the on-chain data for those students or we will use moralis to
//index all enrollments and then query the moralis database to retrieve all the participants data. we will add enrolled student to the uint256[] students;

function Dashboard() {
  const [value, onChange] = useState(new Date());
  const [std, setStd] = useState()

  const {
    authenticate,
    isAuthenticated,
    user,
    authError,
    logout,
    setUserData, web3, enableWeb3, isWeb3Enabled, isWeb3EnableLoading, web3EnableError
  } = useMoralis();

  const handleSubmit = async (e) => {
    // console.log(studnetID, fullName, program, year, avatar)

    const result = await createStudent(
      studnetID,
      fullName,
      program,
      year,
      avatar
    );
    console.log(result);
  };

  const handleTeacher = async (e) => {
    e.preventDefault();
  };

  async function getStudents() {
    // if (isAuthenticated) {
    //   const provider = new ethers.providers.Web3Provider(window.ethereum);
    //   const contract = new ethers.Contract(
    //     contractAddress,
    //     Attendance.abi,
    //     provider
    //   );
    //   try {
    //     const data = await contract.getAllStudents();
    //     console.log("data", data);
    //   } catch (error) {
    //     console.log("Error", error);
    //   }
    // }
  }

   

  return (
    <>
      <div className="flex">
        <SideBar />

        <main className="h-screen flex-1 flex-col overflow-y-auto pb-10">
          <AdminBanner/>

          <section className="w-full px-4">
            <h3 className="font-bold text-slate-50 mb-4 w-full">Dashboard</h3>
            <div className="flex gap-4 lg:justify-around w-full overflow-x-auto scrollbar-none">
              <div className="flex flex-1 bg-slate-900 rounded-lg items-center gap-16 lg:w-64 h-fit justify-between py-4 lg:py-6 px-6 border-l-2 border-l-yellow-700">
                <div className="flex flex-col justify-center items-center gap-1">
                  <h3 className="font-semibold text-3xl text-slate-50">{student.length}</h3>
                  <small className="px-1 text-blue-200 text-sm font-light rounded-full">
                    Students
                  </small>
                </div>
                <div className="stroke-gray-50 rounded">
                  <UserGroupIcon className="w-14" />
                </div>
              </div>

              <div className="flex flex-1 bg-slate-900 rounded-lg items-center gap-16 w-64 h-fit justify-between py-4 lg:py-6 px-6 border-l-2 border-l-yellow-700">
                <div className="flex flex-col justify-center items-center gap-1">
                  <h3 className="font-semibold text-3xl text-slate-50">{lecturer.length}</h3>
                  <small className="px-1 text-blue-200 text-sm font-light rounded-full">
                    Lecturers
                  </small>
                </div>
                <div className="stroke-gray-50 rounded">
                  <AcademicCapIcon className="w-14" />
                </div>
              </div>
              <div className="flex flex-1 bg-slate-900 rounded-lg items-center gap-16 w-64 h-fit justify-between py-4 lg:py-6 px-6 border-l-2 border-l-yellow-700">
                <div className="flex flex-col justify-center items-center gap-1">
                  <h3 className="font-semibold text-3xl text-slate-50">370</h3>
                  <small className="px-1 text-blue-200 text-sm font-light rounded-full">
                    Courses
                  </small>
                </div>
                <div className="stroke-gray-50 rounded">
                  <BookOpenIcon className="w-14" />
                </div>
              </div>
              <div className="flex flex-1 bg-slate-900 rounded-lg items-center gap-16 w-64 h-fit justify-between py-4 lg:py-6 px-6 border-l-2 border-l-yellow-700">
                <div className="flex flex-col justify-center items-center gap-1">
                  <h3 className="font-semibold text-3xl text-slate-50 whitespace-nowrap">
                    20 Eth
                  </h3>
                  <small className="px-1 text-blue-200 text-sm font-light rounded-full whitespace-nowrap">
                    $USD 1000
                  </small>
                </div>
                <div className="w-10 h-10 lg:h-12 lg:w-12 bg-slate-50 rounded-full overflow-hidden">
                  <Image
                    src={"/ethereum.png"}
                    layout="responsive"
                    width={512}
                    height={512}
                    alt="logo"
                    blurDataURL="/ethereum.png"
                    placeholder="blur"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="flex flex-col lg:flex-row p-4 gap-4 w-full mt-6">
            <div className="flex relative flex-col w-full bg-slate-700 border-l border-yellow-500 rounded-xl overflow-hidden overflow-x-auto scrollbar-none h-72">
              <div className=" py-4 bg-slate-900 text-slate-50 sticky top-0 overflow-x-auto w-full">
                  <ul className="flex justify-around font-bold whitespace-nowrap scrollbar-none">
                    <li>Code</li>
                    <li>Course Title</li>
                    <li>Status</li>
                    <li>Total</li>
                    <li>Present</li>
                  </ul>
              </div>
              <div className="flex flex-col mt-2 gap-2 overflow-auto">
                <div className="bg-slate-200 flex justify-around items-centern py-4">
                  <div>SOT102</div>
                  <div>System Analysis</div>
                  <div className="text-blue-500">Active</div>
                  <div>50</div>
                  <div>36</div>
                </div>
                <div className="bg-slate-200 flex justify-around items-centern py-4">
                  <div>SOT102</div>
                  <div>System Analysis</div>
                  <div className="text-blue-500">Active</div>
                  <div>50</div>
                  <div>36</div>
                </div>
                <div className="bg-slate-200 flex justify-around items-centern py-4">
                  <div>SOT102</div>
                  <div>System Analysis</div>
                  <div className="text-blue-500">Active</div>
                  <div>50</div>
                  <div>36</div>
                </div>
                <div className="bg-slate-200 flex justify-around items-centern py-4">
                  <div>SOT102</div>
                  <div>System Analysis</div>
                  <div className="text-blue-500">Active</div>
                  <div>50</div>
                  <div>36</div>
                </div>
              </div>
            </div>

            {/* <div className="flex h-fit justify-center">
              <Calendar
                onChange={onChange}
                value={value}
                className="rounded-xl"
              />
            </div> */}
          </section>

          <section>
            
          </section>
        </main>
      </div>
    </>
  );
}

export default Dashboard;
