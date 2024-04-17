"use client";

import { Button, ChevronRight } from "@relume_io/relume-ui";
import type { ButtonProps, ImageProps } from "@relume_io/relume-ui";

type SectionProps = {
  icon: ImageProps;
  heading: string;
  description: string;
  button: ButtonProps;
};

type Props = {
  heading: string;
  sections: SectionProps[];
};

export type Layout242Props = React.ComponentPropsWithoutRef<"section"> & Props;

export const Layout242 = (props: Layout242Props) => {
  const { heading, sections } = { ...props, ...Layout242Defaults };
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container flex flex-col items-start">
        <div className="mb-12 w-full max-w-lg md:mb-18 lg:mb-20">
          <h3 className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl">{heading}</h3>
        </div>
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          {sections.map((section, index) => (
            <div key={`${section.heading}-${index}`}>
              <div className="mb-5 md:mb-6">
                <img src={section.icon.src} className="size-12" alt={section.icon.alt} />
              </div>
              <h3 className="mb-5 text-xl font-bold md:mb-6 md:text-2xl">{section.heading}</h3>
              <p className="mb-5 md:mb-6">{section.description}</p>
              <div className="mt-6 flex items-center gap-4 md:mt-8">
                <Button
                  variant={section.button.variant}
                  size={section.button.size}
                  iconRight={section.button.iconRight}
                  iconLeft={section.button.iconLeft}
                >
                  {section.button.title}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Layout242Defaults: Layout242Props = {
  heading: "Streamline the onboarding process with our user-friendly platform",
  sections: [
    {
      icon: {
        src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
        alt: "Relume logo 1",
      },
      heading: "Efficiently manage employee details and services through our platform",
      description:
        "Our onboarding platform simplifies the process of capturing employee information, including bio, documents, and bank account details. It also offers employees the opportunity to sign up for services such as medical aid and retirement fund.",
      button: { title: "Learn More", variant: "link", size: "link", iconRight: <ChevronRight /> },
    },
    {
      icon: {
        src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
        alt: "Relume logo 2",
      },
      heading: "Boost employee engagement with our Appreciation, Nomination, and Celebration",
      description:
        "Our platform includes an employee engagement feature that allows you to appreciate, nominate, and celebrate your employees. Each engagement earns them points that can be used in our marketplace.",
      button: { title: "Sign Up", variant: "link", size: "link", iconRight: <ChevronRight /> },
    },
    {
      icon: {
        src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
        alt: "Relume logo 3",
      },
      heading: "Enhance employee satisfaction with our user-friendly platform",
      description:
        "Our platform offers a seamless experience for managing employee details and services, ensuring their satisfaction and convenience.",
      button: {
        title: "Get Started",
        variant: "link",
        size: "link",
        iconRight: <ChevronRight />,
      },
    },
  ],
};
