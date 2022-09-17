import Link from "next/link";
import { useState } from "react";
// import DropDownContainer from "./DropDownContainer";
const Menu = (props) => {
  const [isOpeningDropDown, setIsOpeningDropDown] = useState(false);
  return (
    <>
      <div
        className={`sticky top-0 z-50 flex justify-center bg-bebecook gap-4 p-2 ${props.className}`}
      >
        {menuItems.map((menuItem, index) => (
          <Link key={index} href={`/category`}>
            <div
              key={menuItem.slug}
              className="text-white text-xl font-semibold cursor-pointer hover:text-forth"
              onMouseOver={() => setIsOpeningDropDown(true)}
              onMouseLeave={() => setIsOpeningDropDown(false)}
            >
              {menuItem.label}
            </div>
          </Link>
        ))}
      </div>
      {/* <DropDownContainer className={isOpeningDropDown ? "" : ""} /> */}
    </>
  );
};

export default Menu;

const menuItems = [
  { slug: "mon-phu", label: "Món phụ", icon: "" },
  { slug: "gao", label: "Gạo", icon: "" },
  { slug: "do-an-nhe", label: "Đồ ăn nhẹ", icon: "" },
];
