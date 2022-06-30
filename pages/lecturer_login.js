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

function Login() {
  const { authenticate, isAuthenticated, user, logout } = useMoralis();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // let options = { redirect: false, email, password };
    // const res = await signIn("credentials", options);
    // if (res?.error) {
    //   setMessage(res.error);
    //   return;
    // }
    router.push("/lecturer");
  };

  return (
    <>
      <div className="relative h-screen w-screen flex justify-center items-center">
        <Image
          src={"/img5.jpg"}
          layout="fill"
          width={512}
          height={512}
          alt="logo"
          blurDataURL="/img5.jpg"
          placeholder="blur"
          className="object-cover opacity-50"
        />

        <div className="absolute flex-1 justify-center items-center h-full w-full flex">
          <form
            className="flex flex-col gap-y-5 items-center p-8 bg-slate-900/80 shadow-white shadow rounded-2xl"
            onSubmit={handleSubmit}
          >
            <div className="text-2xl text-slate-50 mb-4 font-bold tracking-widest uppercase">
              Lecturer
            </div>

            {message && (
              <span className="text-white p-1 rounded bg-red-600">
                {message}
              </span>
            )}
            <input
              type={"hidden"}
              name={""}
              defaultValue={user}
            />
            <span>
              <label className="text-lg text-slate-50">Email address </label>
              <div className="relative w-full mt-2">
                <AtSymbolIcon className="h-7 absolute right-2 top-2 text-slate-400" />
                <input
                  type={"email"}
                  placeholder={"lecturer@gimpa.edu.gh"}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input px-4 py-2 w-full lg:w-96 rounded-2xl placeholder:text-slate-400 bg-transparent text-slate-50 focus:border-green-800 focus:ring-green-500"
                />
              </div>
            </span>

            <span>
              <label className="text-lg text-slate-50">Password</label>
              <div className="relative w-full mt-2">
                <LockClosedIcon className="h-7 absolute right-2 top-2 text-slate-400" />

                <input
                  type={"password"}
                  placeholder="****************"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-input px-4 py-2 w-full lg:w-96 rounded-2xl placeholder:text-slate-400 bg-transparent text-slate-50 focus:border-green-800 focus:ring-green-500"
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
