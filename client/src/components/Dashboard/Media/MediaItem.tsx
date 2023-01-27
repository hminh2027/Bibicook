import React, { FC } from "react";
import { AiFillFile } from "react-icons/ai";

type Media = {
  alt?: string;
  name: string;
  size?: 138808;
  uploadedAt: Date;
  url?: string;
};

export const MediaItem: FC<Media> = (media: Media) => {
  const { name, alt, size, uploadedAt, url } = media;
  return (
    <div className="flex p-2">
      <div className="w-16 h-16">
        {url ? <img src={url} /> : <AiFillFile />}
      </div>
      <div>{name}</div>
    </div>
  );
};

export default MediaItem;
