"use client";

import { Facebook, Instagram, X, LinkedIn, YouTube, Button, Input } from "@relume_io/relume-ui";
import type { ImageProps, ButtonProps } from "@relume_io/relume-ui";

type TermsAndConditionsWithMultipleTextsProps = {
  textBeforeLink: string;
  linkText: string;
  url: string;
  textAfterLink: string;
};

type Links = {
  title: string;
  url: string;
};

type ColumnLinks = {
  title: string;
  links: Links[];
};

type socialMediaLinks = Links & {
  icon: React.ReactNode;
};

type FooterLink = {
  title: string;
  url: string;
};

type Props = {
  image: ImageProps;
  newsletterHeading: string;
  newsletterDescription: string;
  inputPlaceholder?: string;
  button: ButtonProps;
  termsAndConditions?: TermsAndConditionsWithMultipleTextsProps;
  columnLinks: ColumnLinks[];
  socialMediaLinks: socialMediaLinks[];
  footerText?: string;
  footerLinks: FooterLink[];
};

export type Footer2Props = React.ComponentPropsWithoutRef<"section"> & Props;

export const Footer2 = (props: Footer2Props) => {
  const {
    image,
    newsletterHeading,
    newsletterDescription,
    inputPlaceholder,
    button,
    termsAndConditions,
    columnLinks,
    socialMediaLinks,
    footerText,
    footerLinks,
  } = {
    ...Footer2Defaults,
    ...props,
  } as Props;
  return (
    <footer className="px-[5%] py-12 md:py-18 lg:py-20">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-x-[8vw] gap-y-12 pb-12 md:gap-y-16 md:pb-18 lg:grid-cols-[1fr_0.5fr] lg:gap-y-4 lg:pb-20">
          <div className="grid grid-cols-1 items-start gap-x-8 gap-y-10 md:grid-cols-3 md:gap-y-12 lg:grid-cols-4">
            <div className="md:col-start-1 md:col-end-4 md:row-start-1 md:row-end-2 lg:col-start-auto lg:col-end-auto lg:row-start-auto lg:row-end-auto">
              <img src={image.src} alt={image.alt} className="inline-block" />
            </div>
            {columnLinks.map((column, index) => (
              <div
                key={`${column.title}-${index}`}
                className="flex flex-col items-start justify-start"
              >
                <h2 className="mb-3 font-semibold md:mb-4">{column.title}</h2>
                <ul>
                  {column.links.map((link, linkIndex) => (
                    <li key={`${link.title}-${linkIndex}`} className="py-2 text-sm">
                      <a
                        href={link.url}
                        className="flex items-center gap-3 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2"
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex flex-col">
            <h1 className="mb-3 font-semibold md:mb-4">{newsletterHeading}</h1>
            <p className="mb-3 text-sm md:mb-4">{newsletterDescription}</p>
            <div className="max-w-md">
              <div className="mb-3 grid grid-cols-1 gap-x-4 gap-y-3 md:grid-cols-[1fr_max-content] md:gap-y-4">
                <Input placeholder={inputPlaceholder} />
                <Button
                  variant={button.variant}
                  size={button.size}
                  iconRight={button.iconRight}
                  iconLeft={button.iconLeft}
                >
                  {button.title}
                </Button>
              </div>
              {termsAndConditions && (
                <p className="text-xs">
                  <span className="after:content-['_']">{termsAndConditions?.textBeforeLink}</span>
                  <a
                    href={termsAndConditions?.url}
                    className="underline decoration-black underline-offset-1 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2"
                  >
                    {termsAndConditions?.linkText}
                  </a>
                  <span className="before:content-['_']">{termsAndConditions?.textAfterLink}</span>
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="h-px w-full bg-black" />
        <div className="flex flex-col-reverse items-start pb-4 pt-6 text-sm md:justify-start md:pb-0 md:pt-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col-reverse items-start md:flex-row md:gap-6 lg:items-center">
            <p className="mt-8 md:mt-0">{footerText}</p>
            <div className="grid grid-flow-row grid-cols-[max-content] justify-center gap-x-0 gap-y-4 md:grid-flow-col md:justify-center md:gap-x-6 md:gap-y-0 lg:text-left">
              {footerLinks.map((link, index) => (
                <p key={`${link.title}-${index}`} className="underline">
                  <a
                    href={link?.url}
                    className="ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2"
                  >
                    {link?.title}
                  </a>
                </p>
              ))}
            </div>
          </div>
          <div className="mb-8 flex items-center justify-center gap-3 lg:mb-0">
            {socialMediaLinks.map((link, index) => (
              <a
                key={`${link.title}-${index}`}
                href={link.url}
                className="ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Footer2Defaults: Footer2Props = {
  image: {
    src: "https://relume-assets.s3.amazonaws.com/logo-image.svg",
    alt: "Logo image",
  },
  newsletterHeading: "Subscribe",
  newsletterDescription: "Join our newsletter to stay up to date on features and releases.",
  inputPlaceholder: "Enter your email",
  button: {
    title: "Subscribe",
    variant: "secondary",
    size: "sm",
  },
  termsAndConditions: {
    textBeforeLink: "By subscribing you agree to with our",
    linkText: "Privacy Policy",
    url: "/privacy-policy",
    textAfterLink: "and provide consent to receive updates from our company.",
  },
  columnLinks: [
    {
      title: "About Us",
      links: [
        { title: "Services", url: "#" },
        { title: "Contact Us", url: "#" },
        { title: "FAQ", url: "#" },
        { title: "Support", url: "#" },
        { title: "Blog", url: "#" },
      ],
    },
    {
      title: "Partners",
      links: [
        { title: "Resources", url: "#" },
        { title: "Events", url: "#" },
        { title: "Community", url: "#" },
        { title: "Careers", url: "#" },
        { title: "Press", url: "#" },
      ],
    },
    {
      title: "Help Center",
      links: [
        { title: "Terms of Use", url: "#" },
        { title: "Privacy Policy", url: "#" },
        { title: "Cookie Policy", url: "#" },
        { title: "Sitemap", url: "#" },
        { title: "Accesibility", url: "#" },
      ],
    },
  ],
  socialMediaLinks: [
    { title: "Facebook", url: "#", icon: <Facebook /> },
    { title: "Instagram", url: "#", icon: <Instagram /> },
    { title: "X", url: "#", icon: <X /> },
    { title: "LinkedIn", url: "#", icon: <LinkedIn /> },
    { title: "Youtube", url: "#", icon: <YouTube /> },
  ],
  footerText: "© 2024 Witwaterstrand. All rights reserved.",
  footerLinks: [
    { title: "Privacy Policy", url: "#" },
    { title: "Terms of Service", url: "#" },
    { title: "Cookies Settings", url: "#" },
  ],
};
