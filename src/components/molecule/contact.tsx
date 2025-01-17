"use client"
import { FiDownload } from "react-icons/fi";
import Button from "../atoms/buttons/button";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
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
    console.log('formData:', formData);
    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      // Handle successful response
      console.log('Email sent successfully:', response);
    } else {
      // Handle error response
      console.error('Failed to send email');
    }
  };

  return (
    <section id="contact" className="py-20 mx-auto">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">Let's Connect</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
          <textarea
            name="message"
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
          <Button
            variant="secondary-link"
            text="View CV"
            icon={FiDownload}
            href="/jake_owen_cv.pdf"
            styles="w-full shadow-inner-glow justify-center"
          />
        </form>
      </div>
    </section>
  );
}