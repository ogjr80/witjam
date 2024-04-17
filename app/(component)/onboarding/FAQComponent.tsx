"use client";

import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";

type QuestionsProps = {
  title: string;
  answer: string;
};

type Props = {
  heading: string;
  description: string;
  footerHeading: string;
  footerDescription: string;
  button: ButtonProps;
  questions: QuestionsProps[];
};

export type Faq7Props = React.ComponentPropsWithoutRef<"section"> & Props;

export const Faq7 = (props: Faq7Props) => {
  const { heading, description, questions, footerHeading, footerDescription, button } = {
    ...Faq7Defaults,
    ...props,
  } as Props;
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto w-full max-w-lg">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
          <p className="md:text-md">{description}</p>
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:gap-y-12">
          {questions.map((question, index) => (
            <div key={index}>
              <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">{question.title}</h2>
              <p>{question.answer}</p>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl lg:text-4xl">
            {footerHeading}
          </h4>
          <p className="md:text-md">{footerDescription}</p>
          <div className="mt-6 md:mt-8">
            <Button
              variant={button.variant}
              size={button.size}
              iconRight={button.iconRight}
              iconLeft={button.iconLeft}
            >
              {button.title}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Faq7Defaults: Faq7Props = {
  heading: "FAQs",
  description:
    "Find answers to common questions about the onboarding process.",
  questions: [
    {
      title: "How do I sign up?",
      answer:
        "To sign up, click on the 'Sign Up' button and follow the instructions to provide your details and select the services you want to enroll in.",
    },
    {
      title: "How can I upload documents?",
      answer:
        "To upload documents, go to your profile settings and click on the 'Upload Documents' section. Follow the prompts to upload the required files.",
    },
    {
      title: "How can i nominate someone?",
      answer:
        "To nominate someone, go to the 'Employee Engagement' section and click on the 'Nomination' feature. Fill in the required details and submit your nomination.",
    },
    {
      title: "How can I earn points?",
      answer:
        "You can earn points by participating in employee engagement activities like Appreciation and Celebration. Each activity will reward you with a certain number of points.",
    },
    {
      title: "How can i use my points",
      answer:
        "You can use your points in the marketplace to purchase merchandise offered by our university partners. Simply browse the available items and redeem your points at checkout.",
    },
  ],
  footerHeading: "Still have questions?",
  footerDescription: "Contact us for further assistance",
  button: {
    title: "Contact",
    variant: "secondary",
  },
};
