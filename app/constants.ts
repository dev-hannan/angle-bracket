import * as Yup from "yup";
import { Step } from "./types/globals";

export const steps: Step[] = [
  {
    id: 1,
    label: "Step # 1",
    content: "What is your monthly digital marketing budget?",
  },
  {
    id: 2,
    label: "Step # 2",
    content: "Details",
    desc: "We’re thrilled at the opportunity to help you grow your business online. Please let us know the best way to reach you.",
  },
  {
    id: 3,
    label: "Your Request for a Proposal Has Been Submitted!",
    desc: "Lorem ipsum dolor sit amet consectetur...",
  },
];

export const budgets = [
  "< $1,000/mo",
  "$1,000 - $2,000",
  "$2,000 - $5,000",
  "$5,000 - $10,000",
  "$10,000 - $25,000",
  "$25,000 +",
];

export const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phoneNumber: Yup.string()
    .matches(
      /^\+?\d{1,4}?[-.\s]?\d{1,4}?[-.\s]?\d{4,10}$/,
      "Phone number must be a valid format"
    )
    .required("Phone number is required"),
  additionalInfo: Yup.string(),
});
