import Link from "next/link";
import React from "react";

type Props = {};

function NotFound({}: Props) {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <p>
        View <Link href="/">all posts</Link>
      </p>
    </div>
  );
}

export default NotFound;
