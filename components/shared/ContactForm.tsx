"use client";
import emailjs from "@emailjs/browser";
import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "../ui/button";

const {
  EMAILJS_SEVICE_ID: serviceId,
  EMAILJS_TEMPLATE_ID: templateId,
  EMAILJS_PUBLIC_KEY: publicKey,
} = process.env;
 
console.log(serviceId, templateId, publicKey);
const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .send(
        serviceId!,
        templateId!,
        {
          user_name: form.name,
          to_name: "Hasibul Hasan",
          user_email: form.email,
          to_email: "hasibul.nayon1@gmail.com",
          message: form.message,
        },
        publicKey
      )
      .then(() => {
        setIsLoading(false);
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  };

  return (
    <section className="relative flex flex-col md:flex-row">
      {/* form */}
      <div className="flex min-w-[50%] flex-1 flex-col">
        <h1 className="h1-bold text-dark100_light900">Get In Touch</h1>

        <form
          onSubmit={handleSubmit}
          className="mt-8 flex w-full flex-col gap-7"
        >
          <label htmlFor="" className="text-dark300_light700 font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input no-focus border-none outline-none"
              required
              placeholder="Hasibul..."
              value={form.name}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="" className="text-dark300_light700 font-semibold">
            Email
            <input
              type="email"
              name="email"
              className="input no-focus border-none outline-none"
              required
              placeholder="hasibul@gmail.com"
              value={form.email}
              onChange={handleChange}
            />
          </label>
          <label className="text-dark300_light700 font-semibold">
            Your Message
            <textarea
              name="message"
              rows={4}
              className="textarea no-focus border-none outline-none"
              required
              placeholder="Let me know how i can help you"
              value={form.message}
              onChange={handleChange}
            />
          </label>
          <Button
            type="submit"
            className="btn primary-gradient text-white"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </section>
  );
};
export default ContactForm;
