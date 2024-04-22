"use client";

import clsx from "clsx";
import { useState } from "react";
import Link from "next/link";
import { SolidChevronDown, Button } from "@relume_io/relume-ui";
import type { ImageProps, ButtonProps } from "@relume_io/relume-ui";
import {useSession, signOut, signIn} from "next-auth/react"; 

type LinkProps = {
  title: string;
  url: string;
};

type MenuLinkProps = LinkProps & {
  subLinks?: LinkProps[];
};

type Props = {
  logo: ImageProps;
  links: MenuLinkProps[];
  buttons: ButtonProps[];
};



export type Navbar2Props = React.ComponentPropsWithoutRef<"section"> & Props;




export const Navbar2 = (props: Navbar2Props) => {
  
   //new code
 const {data: session} = useSession(); 
 //new code end here

 //new code 2

 const handleAuthButtonClick = () => {
   if(session) {
     signOut({callbackUrl: '/'}); 
   } else { 
     signIn('azure-ad', {callbackUrl: '/dashboard'}, {prompt: 'login'}); 
   }
 }; 

  const { logo, links, buttons } = {
    ...Navbar2Defaults,
    ...props,
  } as Props;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const genericHamburgerLine = `h-[2px] w-6 my-[3px] bg-black transition ease-in-out transform duration-300 lg:hidden`;
  return (
    <nav className="flex h-auto min-h-16 w-full items-center border-b border-black bg-white px-[5%] lg:min-h-18 md:z-100">
      <div className="mx-auto flex h-full w-full auto-cols-fr items-center justify-between gap-4 lg:grid lg:grid-cols-[0.375fr_1fr_0.375fr]">
        <div className="flex min-h-16 flex-shrink-0 items-center">
            <img src={logo.src} alt={logo.alt} />
        </div>
        <ul
          className={clsx(
            "absolute left-0 top-16 flex h-dvh w-full flex-col items-center justify-start border-b border-border bg-white px-[5%] pt-4 lg:static lg:flex lg:h-auto lg:w-auto lg:flex-row lg:justify-center lg:border-none lg:px-0 lg:pt-0",
            mobileMenuOpen ? "block" : "hidden",
          )}
        >
          {links.map((link, index) => (
            <li key={`${link.title}-${index}`} className="w-full lg:w-auto">
              {link.subLinks && link.subLinks.length > 0 ? (
                <NavItemDropdown subLinks={link.subLinks} title={link.title} />
              ) : (
                <Link
                  href={link.url}
                  className="relative block py-3 text-center text-md ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border focus-visible:ring-offset-2 lg:px-4 lg:py-2 lg:text-base"
                >
                  {link.title}
                </Link>
              )}
            </li>
          ))}
        </ul>
        <div className="flex min-h-16 items-center justify-end gap-x-4">
          <div>
          {buttons.map((button, index) => (
              //sign in Button
              <Button
                // onClick={()=>signIn(
                //   'azure-ad',
                //   {callbackUrl:'/onboarding'},
                //   {prompt: 'login'},
                // )}
                onClick={handleAuthButtonClick}
                key={`${button.title}-${index}`}
                variant={button.variant}
                size={button.size}
                className="px-4 py-1 md:px-6 md:py-2"
              >
                {/* {button.title} */}
                {session ? 'Sign Out': 'Sign In'}
              </Button>
            ))}
          </div>
          <button
            className="group -mr-2 flex size-12 flex-col items-center justify-center lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div
              className={clsx(genericHamburgerLine, mobileMenuOpen && "translate-y-2 -rotate-45")}
            />
            <div className={clsx(genericHamburgerLine, mobileMenuOpen && "opacity-0")} />
            <div
              className={clsx(genericHamburgerLine, mobileMenuOpen && "-translate-y-2 rotate-45")}
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

const NavItemDropdown = ({ title, subLinks }: { title: string; subLinks: LinkProps[] }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <div className="group">
      <button
        className="flex w-full items-center justify-center gap-4 py-3 text-center text-md ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border focus-visible:ring-offset-2 lg:w-auto lg:flex-none lg:justify-start lg:gap-2 lg:px-4 lg:py-2 lg:text-base"
        onClick={() => setDropdownOpen((prev) => !prev)}
      >
        <span>{title}</span>
        <SolidChevronDown
          className={clsx("size-4 transition duration-300 lg:group-hover:rotate-180", {
            "rotate-180": dropdownOpen,
          })}
        />
      </button>
      <ul
        className={clsx(
          "border-border bg-white transition-all duration-300 lg:absolute lg:h-auto lg:border lg:p-2 lg:group-hover:block lg:group-hover:opacity-100 lg:group-hover:animate-in lg:group-hover:slide-in-from-bottom-1/2",
          dropdownOpen ? "block" : "hidden",
        )}
      >
        {subLinks.map((subLink, index) => (
          <li
            key={`${subLink.title}-${index}`}
            className="relative whitespace-nowrap py-3 text-center align-top text-base lg:px-4 lg:py-2 lg:text-left"
          >
            <Link
              href={subLink.url}
              className="ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border focus-visible:ring-offset-2"
            >
              {subLink.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const Navbar2Defaults: Navbar2Props = {
  logo: {
    src: "https://www.wits.ac.za/media/wits-university-style-assets/images/Wits_Centenary_Logo_Large.svg",
    alt: "Logo image",
  },
  links: [
    { title: "Onboarding", url: "/onboarding" },
    { title: "Say thanks", url: "/appreciate" },
    { title: "Celebrate", url: "/celebrate" },
    {title: "Nominate", url: "/nominate"}, 
   
    {
      title: "More",
      url: "#",
      subLinks: [
        { title: "Marketplace", url: "/marketplace" },
        { title: "Partners", url: "/partners" },
        { title: "Rewards", url: "/rewards" },
      ],
    },
  ],
  buttons: [
    {
      title: "Sign In",
      variant: "primary",
      size: "sm",
    },
  ],
};
