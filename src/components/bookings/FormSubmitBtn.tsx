import React from "react";
import { Button } from "../ui/button";
import { UseFormReset } from "react-hook-form";
import { BookFormType } from "@/lib/schema";

const FormSubmitBtn = ({
  pending,
  reset,
}: {
  pending: boolean;
  reset: UseFormReset<BookFormType>;
}) => {
  return (
    <div className="flex flex-col gap-5 w-full md:flex-row items-center md:justify-between">
      <Button
        disabled={pending}
        className="bg-primary-yellow-light/70 py-5 hover:bg-primary-yellow text-white text-center w-full"
      >
        {pending ? "Submitting..." : "Submit"}
      </Button>

      <Button
        disabled={pending}
        onClick={() => reset()}
        type="reset"
        className="bg-red-600 py-5 hover:bg-red-700 text-white text-center w-full"
      >
        Reset
      </Button>
    </div>
  );
};

export default FormSubmitBtn;
