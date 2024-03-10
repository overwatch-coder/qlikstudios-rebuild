import { z } from "zod";

export const bookFormSchema = z
  .object({
    fullname: z
      .string({ required_error: "Name field cannot be empty" })
      .trim()
      .min(5, "Name should be at least 5 characters long"),
    email: z
      .string({ required_error: "Email field cannot be empty" })
      .trim()
      .email("Please enter a valid email address")
      .toLowerCase(),
    specifications: z.string().trim().optional(),
    date: z.coerce
      .date({
        errorMap: (issue, ctx) => {
          switch (issue.code) {
            case "invalid_date":
              return { message: "Appointment date and time is required" };
            case "invalid_type":
              return {
                message: "Please choose a date",
              };
            default:
              return { message: "Please choose a date" };
          }
        },
      })
      .transform((date) => date.toLocaleString()),
    serviceType: z.enum(["photography", "videography", "both"], {
      errorMap: (issue, ctx) => {
        switch (issue.code) {
          case "invalid_enum_value":
            return { message: "Please choose one of our services" };
          case "invalid_type":
            return {
              message:
                "Service type can only be photography, videography or both ",
            };
          default:
            return { message: "Please choose one of our services" };
        }
      },
    }),
    eventType: z.enum(
      ["graduation", "wedding", "events", "others", "birthday"],
      {
        errorMap: (issue, ctx) => {
          switch (issue.code) {
            case "invalid_enum_value":
              return {
                message: "Please choose an event for the service selected",
              };
            case "invalid_type":
              return {
                message: "Please choose an event for the service selected",
              };
            default:
              return {
                message: "Please choose an event for the service selected",
              };
          }
        },
      }
    ),
    packageType: z
      .enum(["silver", "gold", "platinum", "n/a"], {
        errorMap: (issue, ctx) => {
          switch (issue.code) {
            case "invalid_enum_value":
              return {
                message: "Package type can only be Silver, Gold or Platinum",
              };
            case "invalid_type":
              return {
                message: "Please select a package type",
              };
            default:
              return { message: "Please select a package type" };
          }
        },
      })
      .optional(),
  })
  .superRefine((data, ctx) => {
    if (data.serviceType === "photography" && !data.packageType) {
      return ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Please select one of our photography packages",
        path: ["packageType"],
      });
    }
  });

export type BookFormType = z.infer<typeof bookFormSchema>;
