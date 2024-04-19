// "use client";

// import { Facebook, Instagram, X, LinkedIn, YouTube, Button, Input } from "@relume_io/relume-ui";
// import type { ImageProps, ButtonProps } from "@relume_io/relume-ui";

// type TermsAndConditionsWithMultipleTextsProps = {
//   textBeforeLink: string;
//   linkText: string;
//   url: string;
//   textAfterLink: string;
// };

// type Links = {
//   title: string;
//   url: string;
// };

// type ColumnLinks = {
//   title: string;
//   links: Links[];
// };

// type socialMediaLinks = Links & {
//   icon: React.ReactNode;
// };

// type FooterLink = {
//   title: string;
//   url: string;
// };

// type Props = {
//   image: ImageProps;
//   newsletterHeading: string;
//   newsletterDescription: string;
//   inputPlaceholder?: string;
//   button: ButtonProps;
//   termsAndConditions?: TermsAndConditionsWithMultipleTextsProps;
//   columnLinks: ColumnLinks[];
//   socialMediaLinks: socialMediaLinks[];
//   footerText?: string;
//   footerLinks: FooterLink[];
// };

// export type Footer2Props = React.ComponentPropsWithoutRef<"section"> & Props;

// export const Footer2 = (props: Footer2Props) => {
//   const {
//     image,
//     newsletterHeading,
//     newsletterDescription,
//     inputPlaceholder,
//     button,
//     termsAndConditions,
//     columnLinks,
//     socialMediaLinks,
//     footerText,
//     footerLinks,
//   } = {
//     ...Footer2Defaults,
//     ...props,
//   } as Props;
//   return (
//     <footer className="px-[5%] py-12 md:py-18 lg:py-20">
//       <div className="container">
//         <div className="grid grid-cols-1 items-start gap-x-[8vw] gap-y-12 pb-12 md:gap-y-16 md:pb-18 lg:grid-cols-[1fr_0.5fr] lg:gap-y-4 lg:pb-20">
//           <div className="grid grid-cols-1 items-start gap-x-8 gap-y-10 md:grid-cols-3 md:gap-y-12 lg:grid-cols-4">
//             <div className="md:col-start-1 md:col-end-4 md:row-start-1 md:row-end-2 lg:col-start-auto lg:col-end-auto lg:row-start-auto lg:row-end-auto">
//               <img src={image.src} alt={image.alt} className="inline-block" />
//             </div>
//             {columnLinks.map((column, index) => (
//               <div
//                 key={`${column.title}-${index}`}
//                 className="flex flex-col items-start justify-start"
//               >
//                 <h2 className="mb-3 font-semibold md:mb-4">{column.title}</h2>
//                 <ul>
//                   {column.links.map((link, linkIndex) => (
//                     <li key={`${link.title}-${linkIndex}`} className="py-2 text-sm">
//                       <a
//                         href={link.url}
//                         className="flex items-center gap-3 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2"
//                       >
//                         {link.title}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//           <div className="flex flex-col">
//             <h1 className="mb-3 font-semibold md:mb-4">{newsletterHeading}</h1>
//             <p className="mb-3 text-sm md:mb-4">{newsletterDescription}</p>
//             <div className="max-w-md">
//               <div className="mb-3 grid grid-cols-1 gap-x-4 gap-y-3 md:grid-cols-[1fr_max-content] md:gap-y-4">
//                 <Input placeholder={inputPlaceholder} />
//                 <Button
//                   variant={button.variant}
//                   size={button.size}
//                   iconRight={button.iconRight}
//                   iconLeft={button.iconLeft}
//                 >
//                   {button.title}
//                 </Button>
//               </div>
//               {termsAndConditions && (
//                 <p className="text-xs">
//                   <span className="after:content-['_']">{termsAndConditions?.textBeforeLink}</span>
//                   <a
//                     href={termsAndConditions?.url}
//                     className="underline decoration-black underline-offset-1 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2"
//                   >
//                     {termsAndConditions?.linkText}
//                   </a>
//                   <span className="before:content-['_']">{termsAndConditions?.textAfterLink}</span>
//                 </p>
//               )}
//             </div>
//           </div>
//         </div>
//         <div className="h-px w-full bg-black" />
//         <div className="flex flex-col-reverse items-start pb-4 pt-6 text-sm md:justify-start md:pb-0 md:pt-8 lg:flex-row lg:items-center lg:justify-between">
//           <div className="flex flex-col-reverse items-start md:flex-row md:gap-6 lg:items-center">
//             <p className="mt-8 md:mt-0">{footerText}</p>
//             <div className="grid grid-flow-row grid-cols-[max-content] justify-center gap-x-0 gap-y-4 md:grid-flow-col md:justify-center md:gap-x-6 md:gap-y-0 lg:text-left">
//               {footerLinks.map((link, index) => (
//                 <p key={`${link.title}-${index}`} className="underline">
//                   <a
//                     href={link?.url}
//                     className="ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2"
//                   >
//                     {link?.title}
//                   </a>
//                 </p>
//               ))}
//             </div>
//           </div>
//           <div className="mb-8 flex items-center justify-center gap-3 lg:mb-0">
//             {socialMediaLinks.map((link, index) => (
//               <a
//                 key={`${link.title}-${index}`}
//                 href={link.url}
//                 className="ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2"
//               >
//                 {link.icon}
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export const Footer2Defaults: Footer2Props = {
//   image: {
//     src: "https://relume-assets.s3.amazonaws.com/logo-image.svg",
//     alt: "Logo image",
//   },
//   newsletterHeading: "Subscribe",
//   newsletterDescription: "Join our newsletter to stay up to date on features and releases.",
//   inputPlaceholder: "Enter your email",
//   button: {
//     title: "Subscribe",
//     variant: "secondary",
//     size: "sm",
//   },
//   termsAndConditions: {
//     textBeforeLink: "By subscribing you agree to with our",
//     linkText: "Privacy Policy",
//     url: "/privacy-policy",
//     textAfterLink: "and provide consent to receive updates from our company.",
//   },
//   columnLinks: [
//     {
//       title: "About Us",
//       links: [
//         { title: "Services", url: "#" },
//         { title: "Contact Us", url: "#" },
//         { title: "FAQ", url: "#" },
//         { title: "Support", url: "#" },
//         { title: "Blog", url: "#" },
//       ],
//     },
//     {
//       title: "Partners",
//       links: [
//         { title: "Resources", url: "#" },
//         { title: "Events", url: "#" },
//         { title: "Community", url: "#" },
//         { title: "Careers", url: "#" },
//         { title: "Press", url: "#" },
//       ],
//     },
//     {
//       title: "Help Center",
//       links: [
//         { title: "Terms of Use", url: "#" },
//         { title: "Privacy Policy", url: "#" },
//         { title: "Cookie Policy", url: "#" },
//         { title: "Sitemap", url: "#" },
//         { title: "Accesibility", url: "#" },
//       ],
//     },
//   ],
//   socialMediaLinks: [
//     { title: "Facebook", url: "#", icon: <Facebook /> },
//     { title: "Instagram", url: "#", icon: <Instagram /> },
//     { title: "X", url: "#", icon: <X /> },
//     { title: "LinkedIn", url: "#", icon: <LinkedIn /> },
//     { title: "Youtube", url: "#", icon: <YouTube /> },
//   ],
//   footerText: "© 2024 Witwaterstrand. All rights reserved.",
//   footerLinks: [
//     { title: "Privacy Policy", url: "#" },
//     { title: "Terms of Service", url: "#" },
//     { title: "Cookies Settings", url: "#" },
//   ],
// };
"use client";

import { Facebook, Instagram, X, LinkedIn, YouTube } from "@relume_io/relume-ui";
import type { ImageProps } from "@relume_io/relume-ui";

type Links = {
  title: string;
  url: string;
};

type ColumnLinks = {
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
  columnLinks: ColumnLinks[];
  socialMediaLinks: socialMediaLinks[];
  footerText: string;
  footerLinks: FooterLink[];
};

export type Footer4Props = React.ComponentPropsWithoutRef<"section"> & Props;

export const Footer4 = (props: Footer4Props) => {
  const { image, footerText, columnLinks, footerLinks, socialMediaLinks } = {
    ...Footer4Defaults,
    ...props,
  } as Props;
  return (
    <footer className="px-[5%] py-12 md:py-18 lg:py-20">
      <div className="container">
        <div className="grid grid-cols-1 items-center justify-center justify-items-center gap-x-[4vw] gap-y-12 pb-12 md:pb-18 lg:grid-cols-[0.25fr_1fr_0.25fr] lg:justify-between lg:gap-y-4 lg:pb-20">
          <div className="lg:justify-self-start">
            <img src={image.src} alt={image.alt} className="inline-block" />
          </div>
          {columnLinks.map((column, index) => (
            <ul
              key={`column-${index}`}
              className="grid grid-flow-row grid-cols-1 items-start justify-center justify-items-center gap-6 md:grid-flow-col md:grid-cols-[max-content] md:justify-center md:justify-items-start"
            >
              {column.links.map((link, linkIndex) => (
                <li key={`${link.title}-${linkIndex}`} className="font-semibold">
                  <a
                    href={link.url}
                    className="ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          ))}
          <div className="flex items-start justify-start justify-items-center gap-x-3 lg:justify-self-end">
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
        <div className="h-px w-full bg-black" />
        <div className="flex flex-col-reverse items-center justify-center justify-items-center pt-6 text-sm md:flex-row md:gap-x-6 md:pt-8">
          <p className="mt-8 md:mt-0">{footerText}</p>
          <ul className="grid grid-flow-row grid-cols-[max-content] items-center justify-center justify-items-center gap-x-0 gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0">
            {footerLinks.map((link, index) => (
              <li
                key={`${link.title}-${index}`}
                className="underline decoration-black underline-offset-1 "
              >
                <a
                  href={link?.url}
                  className="ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2"
                >
                  {link?.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export const Footer4Defaults: Footer4Props = {
  image: {
    src: "data:image/jpeg;base64,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",
    alt: "Witwaterstrand Logo",
  },
  columnLinks: [
    {
      links: [
        { title: "Onboard", url: "/onboarding" },
        { title: "Appreciate", url: "/appreciate" },
        { title: "Celebrate", url: "/celebrate" },
        { title: "Nominate", url: "/nominate" },
        { title: "Partners", url: "/partners" },
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
