import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import contract_bg_image from "@/assets/images/subscribe.jpg";
import { Metadata } from "next";
import {
  CONTRACTS_IN_ENGLISH,
  CONTRACTS_IN_FRENCH,
} from "@/constants/contract";
import ContractCard from "@/components/contracts/ContractCard";

export const metadata: Metadata = {
  title: "All Available Contracts - Qlik Studios",
};

const ContractsPage = () => {
  return (
    <section className="pt-16 flex flex-col pb-10">
      <Carousel className="relative" opts={{ loop: false }}>
        <CarouselContent>
          <CarouselItem>
            <div className="absolute w-screen h-full md:h-[100vh] -z-10 bg-black/70" />
            <Image
              src={contract_bg_image}
              alt={"contract hero image"}
              className="absolute w-screen h-full md:h-[100vh] object-cover -z-20"
              width={600}
              height={600}
              quality={100}
            />

            <div className="flex flex-col items-center py-32 space-y-10 text-center px-5">
              <h1 className="text-2xl md:text-4xl font-semibold text-primary-yellow-light">
                {"Available Contracts"}
              </h1>

              <p className="text-white font-medium text-sm italic max-w-2xl">
                We deliver excellent customer services.
                <br />
                Keep scrolling down to view our contracts
              </p>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>

      <article className="px-5 md:px-16 flex flex-col gap-5 py-16">
        <h3 className="text-center text-xl text-primary-yellow font-semibold">
          Below are the contracts guiding our services
        </h3>
        <p className="text-center text-sm text-white font-medium">
          Click to view your preferred service contract in your preferred
          language
        </p>

        <div className="pt-16 pb-10">
          <h3 className="text-center text-primary-yellow-light/90 font-medium text-3xl pb-10">
            Contracts In English [Contrats en Anglais]
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center place-content-center gap-10">
            {CONTRACTS_IN_ENGLISH.map((contract, idx) => (
              <ContractCard
                key={idx}
                contract={contract}
                classname="contract-card-english"
                btnText="Download"
              />
            ))}
          </div>
        </div>

        <div className="pt-5 pb-10">
          <h3 className="text-center text-primary-yellow-light/90 font-medium text-3xl pb-10">
            Contrats en Français [Contracts In French]
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center place-content-center gap-10">
            {CONTRACTS_IN_FRENCH.map((contract, idx) => (
              <ContractCard
                key={idx}
                contract={contract}
                classname="contract-card-french"
                btnText="Telecharger"
              />
            ))}
          </div>
        </div>
      </article>
    </section>
  );
};

export default ContractsPage;
