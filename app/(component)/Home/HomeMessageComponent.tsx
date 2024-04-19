"use client";

type Props = {
  heading: string;
  description: string;
};

export type Header64Props = React.ComponentPropsWithoutRef<"section"> & Props;

export const Header64 = (props: Header64Props) => {
  const { heading, description } = {
    ...Header64Defaults,
    ...props,
  } as Props;
  return (
    <header className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto w-full max-w-lg text-center">
          <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">{heading}</h1>
          <p className="md:text-md">{description}</p>
        </div>
      </div>
    </header>
  );
};

export const Header64Defaults: Header64Props = {
  heading: "Simplified  Onboarding",
  description:
    "We make it easy for you to get started and provide all the necessary information and tools you need to succeed..",
};
