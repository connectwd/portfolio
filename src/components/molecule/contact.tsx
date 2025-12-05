"use client"
import { FiDownload } from "react-icons/fi";
import Button from "../atoms/buttons/button";
import { useState } from "react";
import { fetchBearerToken } from "src/app/helpers/api/fetchBearerToken";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    realName: "",
    email: "",
    message: "",
    name: undefined
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.name != undefined) {
      console.log("its a bot")
      return;
    }
    const token = await fetchBearerToken();
    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authorisation': `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      // Handle successful response
      console.log('Email sent successfully:', response);
      setFormData({
        realName: '',
        email: '',
        message: '',
        name: undefined
      })
    } else {
      // Handle error response
      console.error('Failed to send email');
    }
  };

  return (
    <section id="contact" className="pb-20 mx-auto">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-left mb-5">Contact Me</h2>
        <form onSubmit={handleSubmit} className="w-full mx-auto space-y-4">
          <label htmlFor="contact-name" className="sr-only">
            Name
          </label>
          <input
            type="text"
            name="realName"
            id="contact-name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
          <label htmlFor="contact-email" className="sr-only">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="contact-email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
          <label htmlFor="contact-message" className="sr-only">
            Message
          </label>
          <textarea
            name="message"
            id="contact-message"
            rows={4}
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          ></textarea>
          <Button
            type="submit"
            variant="primary-button"
            text="Send Message"
            styles="w-full shadow-inner-glow justify-center"
          />
          {/* Honey Pot Field */}
          <label className="ohnohoney" htmlFor="name"></label>
          <input className="ohnohoney" onChange={handleChange} autoComplete="off" type="text" id="name" name="name" placeholder="Your name here" />
        </form>
      </div>
    </section>
  );
}