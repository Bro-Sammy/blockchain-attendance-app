import { useState } from "react";
import { ethers } from "ethers";
import Attendance from "../../artifacts/contracts/Attendance.sol/Attendance.json";
import { contractAddress, ownerAddress } from "../../config";
import { student, lecturer } from "../../seed";
import SideBar from "../../components/SideBar";
import Link from "next/link";
import Image from "next/image";
import {
  AcademicCapIcon,
  BookOpenIcon,
  CalculatorIcon,
  UserGroupIcon,
} from "@heroicons/react/solid";
import { useMoralis } from "react-moralis";
import AdminBanner from "../../components/AdminBanner";

function Student() {
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
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(
        contractAddress,
        Attendance.abi,
        provider
      );
      try {
        const data = await contract.getAllStudents();
        console.log("data", data);
      } catch (error) {
        console.log("Error", error);
      }
    }
  }

  async function createStudent(studnetID, fullName, program, year, avatar) {
    if (isAuthenticated) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        contractAddress,
        Attendance.abi,
        signer
      );
      const transaction = await contract.createStudent(
        studnetID,
        fullName,
        program,
        year,
        avatar
      );
      await transaction.wait();
      console.log(transaction);
      getStudents();
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

  return (
    <>
      <div className="flex ">
        <SideBar />

        <section className="h-screen flex-1 flex-col overflow-y-auto pb-10"> 
        <AdminBanner/>
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
          </div>
        </div>
        </section>
      </div>
    </>
  );
}

export default Student;
