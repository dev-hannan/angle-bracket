import React from "react";

const ProgressBar = ({ progress }: { progress: number }) => (
  <div className="w-full bg-gray-200 h-2 mb-12">
    <div
      className="h-full bg-[#019F44]"
      style={{ width: `${progress}%` }}
    ></div>
  </div>
);

export default ProgressBar;
