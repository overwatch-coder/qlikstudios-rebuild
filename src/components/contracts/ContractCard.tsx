import { ContractType } from "@/types";
import { Download, FileDown } from "lucide-react";
import Link from "next/link";
import React from "react";

type ContractCardProps = {
  contract: ContractType;
  classname: string;
  btnText: string;
};

const ContractCard = ({ contract, classname, btnText }: ContractCardProps) => {
  return (
    <div
      data-aos="flip-down"
      className={`${classname} flex flex-col gap-10 rounded-md shadow-md w-full md:w-[300px] items-center text-center p-4 sm:last:col-span-2 md:last:col-span-3 py-10 hover:scale-105 transition duration-1000`}
    >
      <h3 className="uppercase text-lg text-white font-semibold">
        {contract.title}
      </h3>
      <FileDown size={40} className="text-white" />
      <Link
        href={contract.url}
        target="_blank"
        className="px-5 py-2 rounded flex items-center justify-center gap-3 bg-primary-yellow-light/90"
      >
        <Download size={20} className="text-black/80" />
        <span className="text-black/80">{btnText}</span>
      </Link>
    </div>
  );
};

export default ContractCard;
