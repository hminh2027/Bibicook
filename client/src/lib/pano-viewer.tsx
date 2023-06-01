import {
  ReactPhotoSphereViewer,
  MarkersPlugin,
  CompassPlugin,
} from "react-photo-sphere-viewer";
import { useEffect, useRef, useState } from "react";
type PanoViewerProps = {
  url: string;
};
export const PanoViewer = ({ url }: PanoViewerProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const panoRef = useRef<typeof ReactPhotoSphereViewer | null>(null);

  const plugins = [
    [
      CompassPlugin,
      {
        hotspots: [
          { longitude: "0deg" },
          { longitude: "90deg" },
          { longitude: "180deg" },
          { longitude: "270deg" },
        ],
      },
    ],
  ];
  useEffect(() => {
    panoRef.current.setPanorama(url);
  }, [url]);

  return (
    <div ref={containerRef} className="pano-viewer">
      <ReactPhotoSphereViewer
        ref={panoRef}
        littlePlanet={true}
        plugins={plugins}
        height={"768px"}
        width={"100%"}
        onReady={(i) => console.log(i)}
        containerClass={"pano-viewer"}
      />
    </div>
  );
};
