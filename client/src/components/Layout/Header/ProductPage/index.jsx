import Image from "next/image";
import React from "react";
import { MdLocationOn } from "react-icons/md";
import { FaEnvelope } from "react-icons/fa";
import Link from "next/link";
const ProductHeader = () => {
  return (
    <div className="bg-white">
      <div className="flex justify-center items-center py-2 max-w-screen-lg mx-auto lg:justify-between">
        <Link href="/">
          <div className="lg:flex-auto cursor-pointer">
            <Image
              src="https://admin.bebecook.com/images/common/PC_bebecook_logo.png?ver=20220708"
              width={300}
              height={75}
              layout="fixed"
            />
          </div>
        </Link>
        <div className="lg:flex flex-auto items-center gap-8 hidden">
          <div className="flex gap-4 items-center">
            <div className="text-6xl text-bebecook">
              <MdLocationOn />
            </div>
            <div className="w-40 text-left">
              Số 2, ngõ 9, đường Tả Thanh Oai, Thanh Trì, Hà Nội
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div className="text-6xl text-bebecook">
              <FaEnvelope />
            </div>
            <div>
              <a href="bebecookvn@gmail.com">bebecookvn@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHeader;
