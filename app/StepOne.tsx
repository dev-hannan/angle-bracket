import React from "react";
import { budgets } from "./constants";
import { StepOneProps } from "./types/globals";

const StepOne = ({
  selectedBudget,
  setSelectedBudget,
  goNext,
  stepLabel,
  stepContent,
}: StepOneProps) => {
  return (
    <div>
      <h2 className="text-center font-semibold text-2xl mb-3">{stepLabel}</h2>
      <p className="text-center font-semibold text-2xl mb-12">{stepContent}</p>
      <div className="space-y-4">
        {budgets.map((budget, index) => (
          <button
            key={index}
            onClick={() => setSelectedBudget(budget)}
            className={`w-full py-2 px-4 rounded text-lg text-[#6B7280] font-medium ${
              selectedBudget === budget
                ? "bg-green-600 text-white"
                : "bg-white border hover:bg-green-200"
            }`}
          >
            {budget}
          </button>
        ))}
      </div>
    </div>
  );
};

export default StepOne;
