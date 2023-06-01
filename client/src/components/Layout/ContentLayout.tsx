import * as React from "react";

import { Head } from "../Head";
import { LandingHeader } from "./Header";
import { Footer } from "./Footer";

type ContentLayoutProps = {
  children: React.ReactNode;
  title: string;
};

export const ContentLayout = ({ children, title }: ContentLayoutProps) => {
  return (
    <>
      <Head title={title} />
      <div className="flex flex-col justify-between min-h-screen text-black ">
        <div>
          <div className="bg-gray-100sticky top-0">
            <LandingHeader />
          </div>
          <div className="w-full max-w-screen-xl mx-auto pb-12">{children}</div>
          <div className="bg-gray-100">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};
