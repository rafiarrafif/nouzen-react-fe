import { Icon } from "@iconify/react";
import React, { Suspense } from "react";

const JumbotronVideo = () => {
  return (
    <div className="w-full h-full opacity-80">
      <Suspense fallback={<Skeleton />}>
        <video
          className="w-full h-full object-cover"
          muted
          autoPlay
          loop
          preload="none"
        >
          <source src="videos/jumbotron.mp4" type="video/mp4" />
        </video>
      </Suspense>
    </div>
  );
};

const Skeleton = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full">
      <Icon
        icon={"line-md:downloading-loop"}
        width={"40px"}
        className="text-neutral-500"
      />
      <h1 className="text-neutral-500 font-medium text-lg mt-2">Loading...</h1>
    </div>
  );
};

export default JumbotronVideo;
