"use client";
import React, { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import ProgressBar from "./ProgressBar";
import { steps } from "./constants";

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedBudget, setSelectedBudget] = useState("");

  const goNext = () =>
    currentStep < steps.length && setCurrentStep(currentStep + 1);
  const goBack = () => currentStep > 1 && setCurrentStep(currentStep - 1);
  const totalSteps = steps.length;
  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className="min-h-screen bg-gray-100 pt-10">
      <ProgressBar progress={progressPercentage} />
      <div className="flex justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-lg text-black px-5">
          {currentStep === 1 && (
            <StepOne
              selectedBudget={selectedBudget}
              setSelectedBudget={setSelectedBudget}
              goNext={goNext}
              stepLabel={steps[0].label}
              stepContent={steps[0].content}
            />
          )}
          {currentStep === 2 && (
            <StepTwo
              selectedBudget={selectedBudget}
              goNext={goNext}
              stepLabel={steps[1].label}
              stepContent={steps[1].content}
              stepDesc={steps[1].desc}
            />
          )}
          {currentStep === 3 && (
            <StepThree stepLabel={steps[2].label} stepDesc={steps[2].desc} />
          )}
          <div className="mt-6 flex justify-between">
            {currentStep <= 2 && (
              <button
                onClick={goBack}
                disabled={currentStep === 1}
                className={`px-4 py-2 text-white  ${
                  currentStep === 1
                    ? "bg-gray-400"
                    : "bg-black hover:bg-gray-600"
                }`}
              >
                Back
              </button>
            )}
            {currentStep === 1 && (
              <button
                onClick={goNext}
                disabled={!selectedBudget}
                className={`px-4 py-2 bg-[#019F44] text-white  hover:bg-green-600 ${
                  !selectedBudget && "cursor-not-allowed bg-green-400"
                }`}
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stepper;
