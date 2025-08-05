"use client";
import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    topic: "",
    message: "",
    agree: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const target = e.target;
    const { name, value } = target;

    if (target instanceof HTMLInputElement && target.type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: target.checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert("Message submitted successfully!");
  };

  return (
    <section className="bg-[#fbfef5] flex items-center justify-center px-6 md:px-20 py-20">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10">
        {/* Left Section */}
        <div className="text-[#0c0636] space-y-6">
          <h2 className="text-4xl font-semibold">Contact us</h2>
          <p className="text-lg">We would like to hear from you</p>
          <div className="flex items-center space-x-4 pt-2">
            <span className="font-semibold text-lg">hello@academykit.co</span>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6 text-[#0c0636]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="block w-full">
              <span className="block mb-1 font-medium">First name</span>
              <input
                name="firstName"
                type="text"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                className="bg-[#cde78c] px-4 py-3 rounded-md w-full placeholder:text-[#3b3b3b] focus:outline-none"
                required
              />
            </label>
            <label className="block w-full">
              <span className="block mb-1 font-medium">Last name</span>
              <input
                name="lastName"
                type="text"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                className="bg-[#cde78c] px-4 py-3 rounded-md w-full placeholder:text-[#3b3b3b] focus:outline-none"
                required
              />
            </label>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="block w-full">
              <span className="block mb-1 font-medium">Email</span>
              <input
                name="email"
                type="email"
                placeholder="your@company.com"
                value={formData.email}
                onChange={handleChange}
                className="bg-[#cde78c] px-4 py-3 rounded-md w-full placeholder:text-[#3b3b3b] focus:outline-none"
                required
              />
            </label>
            <label className="block w-full">
              <span className="block mb-1 font-medium">Phone number</span>
              <input
                name="phone"
                type="tel"
                placeholder="+977 0123456789"
                value={formData.phone}
                onChange={handleChange}
                className="bg-[#cde78c] px-4 py-3 rounded-md w-full placeholder:text-[#3b3b3b] focus:outline-none"
              />
            </label>
          </div>

          <label className="block w-full">
            <span className="block mb-1 font-medium">Choose a topic</span>
            <select
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              className="bg-[#cde78c] px-4 py-3 rounded-md w-full focus:outline-none"
              required
            >
              <option value="">Select one...</option>
              <option value="technical_support">Technical Support</option>
              <option value="product_enquiry">Product Enquiry</option>
              <option value="upgrade_assistance">Upgrade Assistance</option>
              <option value="integration_support">Integration Support</option>
            </select>
          </label>

          <label className="block w-full">
            <span className="block mb-1 font-medium">How can we help?</span>
            <textarea
              name="message"
              rows={6}
              placeholder="Type your message..."
              value={formData.message}
              onChange={handleChange}
              className="bg-[#cde78c] px-4 py-3 rounded-md w-full resize-none placeholder:text-[#3b3b3b] focus:outline-none"
              required
            />
          </label>

          <label className="flex items-start space-x-2">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              className="mt-1"
              required
            />
            <Link href={"/privacy"} className="text-sm flex gap-2">
              You agree to our friendly{" "}
              <p className="underline text-[#0c0636] font-medium">
                privacy policy.
              </p>
            </Link>
          </label>

          <button
            type="submit"
            className="bg-gray-900 border-3 border-gray-900 hover:bg-white hover:text-gray-900  text-white py-3 px-6 rounded-md font-medium transition w-full duration-500 ease-in-out"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
