"use client";
import { ToastContainer, toast } from "react-toastify";

import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "../ui/button";

const ContactForm = () => {
  const initialFormData = {
    name: "",
    email: "",
    message: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [isLoading, setIsLoading] = useState(false);

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

  return (
    <section className="relative flex flex-col md:flex-row">
      <div className="flex min-w-[50%] flex-1 flex-col">
        <h1 className="h1-bold text-dark100_light900">Get In Touch</h1>

        <form
          onSubmit={handleSubmit}
          className="mt-8 flex w-full flex-col gap-7"
        >
          <label className="text-dark300_light700 font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input no-focus text-dark100_light900 background-light700_dark300 border-none outline-none"
              required
              placeholder="Hasibul..."
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="" className="text-dark300_light700 font-semibold">
            Email
            <input
              type="email"
              name="email"
              className="input no-focus text-dark100_light900 background-light700_dark300 border-none outline-none"
              required
              placeholder="hasibul@gmail.com"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label className="text-dark300_light700 font-semibold">
            Your Message
            <textarea
              name="message"
              rows={8}
              className="textarea no-focus text-dark100_light900 background-light700_dark300 border-none outline-none"
              required
              placeholder="Let me know how i can help you"
              value={formData.message}
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
      <div>
        <ToastContainer></ToastContainer>
      </div>
    </section>
  );
};

export default ContactForm;
