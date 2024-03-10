"use server";

import { BookFormType, bookFormSchema } from "@/lib/schema";
import emailjs from "@emailjs/nodejs";

export const submitBookForm = async (formData: BookFormType) => {
  const dataToForm: BookFormType = {
    ...formData,
    packageType:
      formData.serviceType !== "photography" ? "n/a" : formData.packageType,
  };
  const result = bookFormSchema.safeParse(dataToForm);

  if (!result.success) {
    return {
      error: result.error.format(),
      success: false,
    };
  }

  try {
    const serviceID = process.env.EMAILJS_SERVICE_ID!;
    const templateID = process.env.EMAILJS_TEMPLATE_ID!;
    const templateParams = result.data;

    const data = await emailjs.send(serviceID, templateID, templateParams, {
      publicKey: process.env.EMAILJS_PUBLIC_KEY!,
      privateKey: process.env.EMAILJS_PRIVATE_KEY!,
    });

    if (data.status !== 200) {
      throw new Error("Sorry! Something with wrong.");
    }

    return {
      data: result.data,
      success: true,
    };
  } catch (error: any) {
    return {
      error: error?.message,
      success: false,
    };
  }
};
