import React from "react";
import Image from "next/image";
import {
  AtSymbolIcon,
  HomeIcon,
  LockClosedIcon,
} from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";

import { useMoralis } from "react-moralis";
import { IdentificationIcon } from "@heroicons/react/solid";

function Login() {
  const { authenticate, isAuthenticated, user, logout } = useMoralis();
  const [studentID, setStudentID] = useState("");
  const [program, setProgram] = useState("");
  const [message, setMessage] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => { 
    e.preventDefault();
     
    const result = await createStudent(
      studnetID,
      fullName,
      program,
      year,
      avatar
    );
    // console.log(result);  
    router.push("/student");
  };

  async function createStudent(studnetID, fullName, program, year, avatar) {
    if (isAuthenticated) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        attendanceAddress,
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


  return (
    <>
      <div className="relative h-screen w-screen flex justify-center items-center">
        <Image
          src={"/gimps.jpeg"}
          layout="fill"
          width={512}
          height={512}
          alt="logo"
          blurDataURL="/gimps.jpeg"
          placeholder="blur"
          className="object-cover opacity-30"
        />

        <div className="absolute flex-1 justify-center items-center h-full w-full flex">
          <form
            className="flex flex-col gap-y-5 items-center p-8 bg-slate-800/80 rounded-2xl border-b"
            onSubmit={handleSubmit}
          >
            <div className="text-2xl text-slate-50 mb-4 font-bold tracking-widest uppercase">
              Student
            </div>
           

            {message && (
              <span className="text-white p-1 rounded bg-red-600">
                {message}
              </span>
            )}

            <span>
              <label className="text-lg text-slate-50">Student ID </label>
              <div className="relative w-full mt-2">
                <IdentificationIcon className="h-7 absolute right-2 top-2 text-slate-400" />
                <input
                  type={"number"}
                  placeholder={"2160839432"}
                  required
                  onChange={(e) => setStudentID(e.target.value)}
                  className="form-input px-4 py-2 w-full lg:w-96 rounded-2xl placeholder:text-slate-700 bg-transparent text-slate-50 focus:border-green-800 focus:ring-green-500"
                />
              </div>
            </span>

            <span>
              <label className="text-lg text-slate-50">Program</label>
              <div className="relative w-full mt-2">
                <LockClosedIcon className="h-7 absolute right-2 top-2 text-slate-400" />

                <input
                  type={"text"}
                  placeholder="BSCICT / MIS / MSC"
                  required
                  onChange={(e) => setProgram(e.target.value)}
                  className="form-input px-4 py-2 w-full lg:w-96 rounded-2xl placeholder:text-slate-700 bg-transparent text-slate-50 focus:border-green-800 focus:ring-green-500"
                />
              </div>
            </span>
            <button className="px-4 py-2 mb-4 w-full font-semibold text-lg mt-4 border-0 bg-green-700 hover:bg-green-900 hover:ring-0  hover:ring-offset-1  text-white tracking-wider shadow-sm rounded-2xl duration-200">
              {" "}
              Login
            </button>
          </form>
        </div>
        <Link href={"/"}>
          <a>
            <button
              className="absolute bottom-5 right-5 p-3 rounded-full bg-red-800 hover:bg-red-900 duration-500"
              onClick={logout}
            >
              <HomeIcon className="w-8 text-white" />
            </button>
          </a>
        </Link>
      </div>
    </>
  );
}

export default Login;
