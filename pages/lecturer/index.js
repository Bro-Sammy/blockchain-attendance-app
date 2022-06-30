import Image from "next/image";
import React from "react";
import LecturerTop from "../../components/LecturerTop";

function Dashboard() {
  return (
    <div className="h-screen">
      <LecturerTop />
      <main>
        <div className="rounded-lg bg-slate-900 border-l border-yellow-900 w-full h-fit flex justify-center items-center">
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
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
