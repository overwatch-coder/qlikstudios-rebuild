import { InputFields } from "@/types";

export const initialInputValues: InputFields = {
  fullname: "",
  email: "",
  date: "",
  specifications: "",
  serviceType: "",
  eventType: "",
  packageType: "",
};

export const selectEventTypes = [
  "Graduation",
  "Wedding",
  "Events",
  "Others",
  "Birthday",
];
