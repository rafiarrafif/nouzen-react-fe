import { Metadata } from "next";
import React from "react";
import JumbotronVideo from "./components/home/jumbotronHome/jumbotronVideo";

export const metadata: Metadata = {
  title: "Astofo - Streaming Anime",
  description:
    "Astofo is a streaming anime platform that offers a wide range of anime content.",
  openGraph: {
    title: "Astofo - Streaming anime",
    description:
      "Astofo is a streaming anime platform that offers a wide range of anime",
  },
};
const page = () => {
  return (
    <div className="mt-[-6vh]">
      <div className="w-full h-[86vh] overflow-hidden" id="jumbotronVideo">
        <JumbotronVideo />
      </div>
    </div>
  );
};

export default page;
