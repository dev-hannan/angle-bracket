import React from "react";

const StepThree = ({
  stepLabel,
  stepDesc,
}: {
  stepLabel?: string;
  stepDesc?: string;
}) => (
  <div>
    <div className="w-[104px] h-[104px] bg-gray-200 rounded mt-40 mx-auto mb-4"></div>
    <h2 className="text-center font-semibold text-2xl mb-3">{stepLabel}</h2>
    <p className="text-center text-[#6B7280] font-normal text-base mb-12">
      {stepDesc}
    </p>
    <div className="text-center mt-6">
      <button
        onClick={() => window.location.reload()}
        className="px-6 py-2 bg-green-500 text-white hover:bg-green-600"
      >
        Return Home
      </button>
    </div>
  </div>
);

export default StepThree;
