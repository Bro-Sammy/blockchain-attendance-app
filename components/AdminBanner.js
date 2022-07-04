import Image from "next/image";
import React from "react";

function AdminBanner() {
  return (
    <>
      <div className="bg-slate-900 w-full h-30 py-2 pr-4 flex justify-evenly items-center mb-6 sticky top-0">
        <div className="flex items-center px-10 flex-row gap-3 text-slate-300 w-full h-fit p-2 flex-1">
          <div className="w-8 h-8 lg:h-10 lg:w-10 rounded-full overflow-hidden ">
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
            <h3 className="font-semibold lg:font-black">GIMPA SOT</h3>
            <small className="text-sm whitespace-nowrap font-extralight">
              {new Date().toDateString()}
            </small>
          </span>
        </div>
        <div className="flex gap-2 justify-center items-center">
          <small className="text-sm whitespace-nowrap font-extralight text-slate-300">
            Admin
          </small>
          <div className="w-8 h-8 lg:h-10 lg:w-10 rounded-full overflow-hidden">
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
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminBanner;
