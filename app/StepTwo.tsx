import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Image from "next/image";
import lockLogo from "/public/images/lock.svg";
import { StepTwoProps } from "./types/globals";
import { validationSchema } from "./constants";

const StepTwo = ({
  selectedBudget,
  goNext,
  stepLabel,
  stepContent,
  stepDesc,
}: StepTwoProps) => (
  <div>
    <h2 className="text-center font-semibold text-2xl mb-3">{stepLabel}</h2>
    <p className="text-center font-semibold text-2xl mb-3">{stepContent}</p>
    <p className="text-center text-[#6B7280] font-normal text-base mb-12">
      {stepDesc}
    </p>
    <Formik
      initialValues={{
        name: "",
        email: "",
        phoneNumber: "",
        additionalInfo: "",
        budget: selectedBudget,
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        values.budget = selectedBudget;
        console.log("Form Submitted", values);
        resetForm();
        goNext();
      }}
    >
      {() => (
        <Form>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold text-xs mb-1">
              Name
            </label>
            <Field
              type="text"
              name="name"
              className="w-full px-3 py-2 border focus:outline-none focus:ring focus:ring-green-500"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <div className="flex justify-between space-x-4">
            <div className="w-1/2 mb-4">
              <label className="block text-gray-700 font-semibold text-xs mb-1">
                Email
              </label>
              <Field
                type="email"
                name="email"
                className="w-full px-3 py-2 border focus:outline-none focus:ring focus:ring-green-500"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div className="w-1/2 mb-4">
              <label className="block text-gray-700 font-semibold text-xs mb-1">
                Phone Number
              </label>
              <Field
                type="tel"
                name="phoneNumber"
                className="w-full px-3 py-2 border focus:outline-none focus:ring focus:ring-green-500"
              />
              <ErrorMessage
                name="phoneNumber"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold text-xs mb-1">
              Anything else you'd like to share?
            </label>
            <Field
              as="textarea"
              name="additionalInfo"
              className="w-full px-3 py-2 min-h-28 border focus:outline-none focus:ring focus:ring-green-500"
            />
            <ErrorMessage
              name="additionalInfo"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-40 h-12 flex justify-center items-center m-auto py-2 bg-green-500 text-white hover:bg-green-600"
          >
            Send Request
          </button>
          <div className="text-gray-500 flex items-center gap-2 mt-8">
            <Image src={lockLogo} alt="lock" width={15} height={15} />
            <span className="text-sm">
              We promise never to share your information or spam your inbox
            </span>
          </div>
        </Form>
      )}
    </Formik>
  </div>
);

export default StepTwo;
