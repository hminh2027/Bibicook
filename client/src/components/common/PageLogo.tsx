import React from "react";
import Image from "next/image";
import Link from "next/link";
const PageLogo = () => {
  return (
    <Link href={"/"}>
      <Image src="/logo.png" alt="bvn-logo" width={"80"} height={"80"} />
    </Link>
  );
};
export default PageLogo;
