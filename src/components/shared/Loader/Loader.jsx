import React from "react";
import { Spinner } from "@material-tailwind/react";

const Loader = () => {

  return (
    <div className="my-14 flex justify-center">
    <Spinner className="h-12 w-12 text-[#323232] " />
    </div>
  );
};

export default Loader;
