"use client";
import { ToastContainer, toast } from "react-toastify";

import { ChangeEvent, FormEvent, useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import MagicButton2 from "./MagicButton2";
import { socialMedia } from "@/constants";
import Link from "next/link";
import Image from "next/image";

const ContactForm = () => {
  const initialFormData = {
    name: "",
    email: "",
    message: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formData.name || !formData.email) return;
    setIsLoading(true);
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        body: JSON.stringify({ ...formData }),
      });
      setFormData(initialFormData);
      const { data } = await response.json();
      if (data) toast.success(`Email ${data.id} was successfully sent!`);
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
    }
    setIsLoading(false);
  };

  const handleCopy = () => {
    const text = "hasibul.nayon1@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <section id="contact" className="py-12">
      <div className="flex flex-col-reverse items-center justify-between gap-16 md:flex-row">
        <div className="flex-1   flex-col">
          <h1 className="heading text-white">Get In Touch</h1>
          <p className="my-5 text-center text-white-200 md:mt-10">
            Thank you for visiting! Whether you have a question, comment, or
            simply want to say hello, I encourage you to reach out.{" "}
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-8 flex w-full flex-col gap-7"
          >
            <label className=" font-semibold">
              Name
              <input
                type="text"
                name="name"
                className="input no-focus border-none outline-none"
                required
                placeholder="your name..."
                value={formData.name}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="" className=" font-semibold">
              Email
              <input
                type="email"
                name="email"
                className="input no-focus border-none outline-none"
                required
                placeholder="example@gmail.com"
                value={formData.email}
                onChange={handleChange}
              />
            </label>
            <label className="font-semibold">
              Your Message
              <textarea
                name="message"
                rows={8}
                className="textarea no-focus  border-none outline-none"
                required
                placeholder="Let me know how i can help you"
                value={formData.message}
                onChange={handleChange}
              />
            </label>
            <button
              type="submit"
              className=" border-purple bg-black-200 px-3 py-2 text-white hover:bg-black-100"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        <div className="flex-1">
          <h1 className="text-xl font-semibold text-white md:text-2xl lg:max-w-[45vw] lg:text-4xl">
            Ready to take <span className="text-purple">your</span> digital
            presence to the next level?
          </h1>
          <p className="my-5 text-center text-white-200 md:mt-10">
            Reach out to me today and let&apos;s discuss how I can help you
            achieve your goals.
          </p>
          <div className="relative mt-5">
            <div
              className={`absolute -bottom-5 right-0 ${
                copied ? "block" : "block"
              }`}
            ></div>

            <MagicButton2
              title={copied ? "Email is Copied!" : "Copy my email address"}
              icon={<IoCopyOutline />}
              position="left"
              handleClick={handleCopy}
              otherClasses="!bg-[#161A31]"
            />
          </div>
        </div>
      </div>

      <div className="mt-16 flex flex-col-reverse items-center justify-between gap-6 md:flex-row">
        <p className="text-sm font-light text-white md:text-base md:font-normal">
          Copyright © 2024 Hasibul Hasan Nayon
        </p>

        <div className="flex items-center gap-6 md:gap-3">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className=" flex size-10 cursor-pointer items-center justify-center rounded-lg border border-black-300 bg-black-200 bg-opacity-75 backdrop-blur-lg"
            >
              <Link href={info.link} target="_blank">
                <Image src={info.img} alt="icons" width={20} height={20} />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div>
        <ToastContainer></ToastContainer>
      </div>
    </section>
  );
};

export default ContactForm;
