import * as React from "react";

import { Head } from "../Head";
import { LandingHeader } from "./Header";
import { Footer } from "./Footer";
import Sidebar from "./Sidebar/Sidebar";

type ManageLayoutProps = {
  children: React.ReactNode;
  title: string;
};

export const ManageLayout = ({ children, title }: ManageLayoutProps) => {
  return (
    <>
      <Head title={title} />
      <div className="flex flex-col justify-between min-h-screen text-black">
        <div>
          <div className="bg-gray-100">
            <LandingHeader />
          </div>
          <div className="flex">
            <div className="basis-52">
              <Sidebar />
            </div>
            <div className="w-full max-w-screen-xl mx-auto pb-12">
              {children}
            </div>
          </div>
          <div className="bg-gray-100">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};
