import { useState } from "react";
import { ethers } from "ethers";
// import Attendance from "../../artifacts/contracts/Attendance.sol/Attendance.json";
import { useMoralis } from "react-moralis";
import Link from "next/link";
import Image from "next/image";
import {
  AcademicCapIcon,
  CalculatorIcon,
  UserGroupIcon,
} from "@heroicons/react/solid";

// const attendanceAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

function Dashboard() {
  const [studnetID, setStudentID] = useState();
  const [fullName, setFullName] = useState();
  const [program, setProgram] = useState();
  const [year, setYear] = useState();
  const [avatar, setAvatar] = useState();
  const {
    authenticate,
    isAuthenticated,
    user,
    authError,
    logout,
    setUserData,
  } = useMoralis();

  async function getStudents() {
    if (isAuthenticated) {
      // const provider = new ethers.providers.Web3Provider(window.ethereum);
      // const contract = new ethers.Contract(
      //   attendanceAddress,
      //   Attendance.abi,
      //   provider
      // );
      // try {
      //   const data = await contract.getAllStudents();
      //   console.log("data", data);
      // } catch (error) {
      //   console.log("Error", error);
      // }
    }
  }

  async function createStudent(studnetID, fullName, program, year, avatar) {
    if (isAuthenticated) {
      // const provider = new ethers.providers.Web3Provider(window.ethereum);
      // const signer = provider.getSigner();
      // const contract = new ethers.Contract(
      //   attendanceAddress,
      //   Attendance.abi,
      //   signer
      // );
      // const transaction = await contract.createStudent(
      //   studnetID,
      //   fullName,
      //   program,
      //   year,
      //   avatar
      // );
      // await transaction.wait();
      // console.log(transaction);
      // getStudents();
    }
  }

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

  const handleCourse = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="flex">
        <div className="flex flex-col w-44 p-4 items-center bg-slate-200">
          <div className="">
            <div className="font-black text-2xl flex">
              <img className="w-10 h-9" src="/ethicon.png" /> DAPP
            </div>
            <small className="text-yellow-800 font-bold">
              Attendance System
            </small>
          </div>

          <nav className="mt-14 font-semibold">
            <ul className="flex flex-col gap-10 items-end">
              <Link href={"/admin"}>
                <a>
                  <li>Dashboard</li>
                </a>
              </Link>
              <Link href={"/admin"}>
                <a>
                  <li>Students</li>
                </a>
              </Link>
              <Link href={"/admin"}>
                <a>
                  <li>Lectures</li>
                </a>
              </Link>
              <Link href={"/admin"}>
                <a>
                  <li>Courses</li>
                </a>
              </Link>
              <Link href={"/"}>
                <a>
                  <li onClick={()=>logout()}>logout</li>
                </a>
              </Link>
            </ul>
          </nav>
        </div>

        <main className="h-screen flex-1 flex-col overflow-y-auto pb-10">
          <div className="rounded-lg bg-slate-900 border-l border-yellow-900 w-full h-30 py-2 flex justify-evenly items-center mb-10">
            <div className="flex items-center px-10 flex-row gap-3 text-slate-300 w-full h-fit p-2 flex-1">
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

          <div className="px-10">
            <h3 className="font-bold text-slate-50 mb-4">Dashboard</h3>
            <div className="flex gap-4 justify-evenly">
              <div className="flex bg-gray-100 rounded-lg items-center gap-4 w-52 h-24 justify-around">
                <div className="bg-green-600 rounded">
                  <UserGroupIcon className="w-10" />
                </div>
                <div className="flex flex-col justify-center items-center gap-1">
                  <h3 className="font-semibold text-3xl text-slate-900">370</h3>
                  <small className="px-1 bg-slate-500/70 text-blue-200 text-sm font-bold rounded-full">
                    Students
                  </small>
                </div>
              </div>
              <div className="flex bg-gray-100 rounded-lg items-center gap-4 w-52 h-24 justify-around">
                <div className="bg-green-600 rounded">
                  <AcademicCapIcon className="w-10" />
                </div>
                <div className="flex flex-col justify-center items-center gap-1">
                  <h3 className="font-semibold text-3xl text-slate-900">15</h3>
                  <small className="px-1 bg-slate-500 text-blue-200 text-sm font-bold rounded-full">
                    Lecturers
                  </small>
                </div>
              </div>
              <div className="flex bg-gray-100 rounded-lg items-center gap-4 w-52 h-24 justify-around">
                <div className="bg-green-600 rounded">
                  <CalculatorIcon className="w-10" />
                </div>
                <div className="flex flex-col justify-center items-center gap-1">
                  <h3 className="font-semibold text-3xl text-slate-900">20</h3>
                  <small className="px-1 bg-slate-500 text-blue-200 text-sm font-bold rounded-full">
                    Courses
                  </small>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="p-20 flex lg:flex-row flex-wrap gap-8 items-center w-full justify-center">
              <form
                onSubmit={handleSubmit}
                className="bg-black w-96 p-10 rounded"
              >
                <div className="text-slate-50 p-2 bg-slate-600/20 m-4">
                  Add Student to Class
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="number"
                    name="floating_id"
                    className="block py-2.5 px-0 w-full text-sm text-gray-50 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required=""
                    onChange={(e) => setStudentID(e.target.value)}
                  />
                  <label
                    htmlFor="floating_id"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    studnet ID
                  </label>
                </div>

                <div className="grid xl:grid-cols-2 xl:gap-6">
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="floating_fullname"
                      id="floating_fullname"
                      className="block py-2.5 px-0 w-full text-sm text-gray-50 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required=""
                      onChange={(e) => setFullName(e.target.value)}
                    />
                    <label
                      htmlFor="floating_fullname"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Student Full Name
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="floating_program"
                      id="floating_program"
                      className="block py-2.5 px-0 w-full text-sm text-gray-50 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required=""
                      onChange={(e) => setProgram(e.target.value)}
                    />
                    <label
                      htmlFor="floating_program"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Program
                    </label>
                  </div>
                </div>
                <div className="grid xl:grid-cols-2 xl:gap-6">
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="floating_year"
                      id="floating_year"
                      className="block py-2.5 px-0 w-full text-sm text-gray-50 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required=""
                      onChange={(e) => setYear(e.target.value)}
                    />
                    <label
                      htmlFor="floating_year"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Year
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="floating_avatar"
                      id="floating_company"
                      className="block py-2.5 px-0 w-full text-sm text-gray-50 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required=""
                      onChange={(e) => setAvatar(e.target.value)}
                    />
                    <label
                      htmlFor="floating_avatar"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Image
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Submit
                </button>
              </form>

              <form
                onSubmit={handleTeacher}
                className="bg-black w-96 p-10 rounded"
              >
                <div className="text-slate-50 p-2 bg-slate-600/20 m-4">
                  Create Lectures
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="number"
                    name="floating_id"
                    className="block py-2.5 px-0 w-full text-sm text-gray-50 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required=""
                    onChange={(e) => setTID(e.target.value)}
                  />
                  <label
                    htmlFor="floating_id"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Lecturers ID
                  </label>
                </div>

                <div className="grid xl:grid-cols-2 xl:gap-6">
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="floating_fullname"
                      id="floating_fullname"
                      className="block py-2.5 px-0 w-full text-sm text-gray-50 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required=""
                      onChange={(e) => setName(e.target.value)}
                    />
                    <label
                      htmlFor="floating_fullname"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                    Full Name
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="floating_program"
                      id="floating_program"
                      className="block py-2.5 px-0 w-full text-sm text-gray-50 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required=""
                      onChange={(e) => setDepartment(e.target.value)}
                    />
                    <label
                      htmlFor="floating_program"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Department
                    </label>
                  </div>
                </div>
                <div className="grid xl:grid-cols-2 xl:gap-6">
                  
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="floating_avatar"
                      id="floating_company"
                      className="block py-2.5 px-0 w-full text-sm text-gray-50 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required=""
                      onChange={(e) => setImage(e.target.value)}
                    />
                    <label
                      htmlFor="floating_avatar"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                       Set Image
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>

          <form onSubmit={handleCourse} className="bg-black w-2/3 mr-auto p-10 rounded">
            <div className="text-slate-50 p-2 bg-slate-600/20 m-4">
              Schedule Course
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="number"
                name="floating_id"
                className="block py-2.5 px-0 w-full text-sm text-gray-50 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
                onChange={(e) => setCode(e.target.value)}
              />
              <label
                htmlFor="floating_id"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Course Code
              </label>
            </div>

            <div className="grid xl:grid-cols-2 xl:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="floating_fullname"
                  id="floating_fullname"
                  className="block py-2.5 px-0 w-full text-sm text-gray-50 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                  onChange={(e) => setCourseName(e.target.value)}
                />
                <label
                  htmlFor="floating_fullname"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Course Name
                </label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="floating_program"
                  id="floating_program"
                  className="block py-2.5 px-0 w-full text-sm text-gray-50 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                  onChange={(e) => setTid(e.target.value)}
                />
                <label
                  htmlFor="floating_program"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Lecturer 
                </label>
              </div>
            </div>
            <div className="grid xl:grid-cols-2 xl:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="floating_year"
                  id="floating_year"
                  className="block py-2.5 px-0 w-full text-sm text-gray-50 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                  onChange={(e) => setLectureHall(e.target.value)}
                />
                <label
                  htmlFor="floating_year"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Lecturer Hall
                </label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="floating_avatar"
                  id="floating_company"
                  className="block py-2.5 px-0 w-full text-sm text-gray-50 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                  onChange={(e) => setStartTime(e.target.value)}
                />
                <label
                  htmlFor="floating_avatar"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Start Time
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </main>
      </div>
    </>
  );
}

export default Dashboard;
