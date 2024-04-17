"use client";

import { Button, ChevronRight } from "@relume_io/relume-ui";
import type { ImageProps, ButtonProps } from "@relume_io/relume-ui";

type FeaturesProps = {
  icon: ImageProps;
  paragraph: string;
};

type Props = {
  heading: string;
  description: string;
  tagline: string;
  features: FeaturesProps[];
  buttons: ButtonProps[];
  image: ImageProps;
};

export type Layout16Props = React.ComponentPropsWithoutRef<"section"> & Props;

export const Layout16 = (props: Layout16Props) => {
  const { tagline, heading, description, features, buttons, image } = {
    ...Layout16Defaults,
    ...props,
  } as Props;
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h1>
            <p className="mb-5 text-base md:mb-6 md:text-md">{description}</p>
            <ul className="grid grid-cols-1 gap-4 py-2">
              {features.map((feature, index) => (
                <li key={`${feature.paragraph}-${index}`} className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <img src={feature.icon.src} alt={feature.icon.alt} className="size-6" />
                  </div>
                  <span>{feature.paragraph}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center gap-x-4 md:mt-8">
              {buttons.map((button, index) => (
                <Button
                  key={`${button.title}-${index}`}
                  variant={button.variant}
                  size={button.size}
                  iconRight={button.iconRight}
                  iconLeft={button.iconLeft}
                >
                  {button.title}
                </Button>
              ))}
            </div>
          </div>
          <div>
            <img src={image.src} className="w-full object-cover" alt={image.alt} />
          </div>
        </div>
      </div>
    </section>
  );
};

export const Layout16Defaults: Layout16Props = {
  tagline: "Streamline",
  heading: "Unlock Your  Potential with Onboarding",
  description:
    "Completing the onboarding process offers numerous benefits, including access to essential services and seamless integration into our University culture.",
  features: [
    {
      icon: { src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg", alt: "Relume logo 1" },

      paragraph: "Access to Services.",
    },
    {
      icon: { src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg", alt: "Relume logo 2" },
      paragraph: "Seamless Integration.",
    },
    {
      icon: { src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg", alt: "Relume logo 3" },
      paragraph: "Enhanced Company Culture.",
    },
  ],
  buttons: [
    { title: "Learn More", variant: "primary" },
    { title: "Sign Up", variant: "link", size: "link", iconRight: <ChevronRight /> },
  ],
  image: {
    src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
    alt: "Placeholder image",
  },
};
