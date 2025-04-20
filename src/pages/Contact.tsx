
import React, { useState } from "react";
import Header from "@/components/ui/Header";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="bg-black min-h-screen">
      <Header />
      <div className="container mx-auto px-4 pt-32">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-5xl font-bold text-white mb-4">
              GOT QUESTIONS
              <br />
              WE'VE GOT
              <br />
              ANSWERS.
            </h1>
            <p className="text-gray-300 mb-8">
              Fill out the form, and our team will hit
              <br />
              you back within 24 hours.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            onSubmit={handleSubmit}
            className="bg-neutral-900 p-8 rounded-lg"
          >
            <div className="mb-6">
              <input
                type="text"
                placeholder="FULL NAME"
                className="w-full bg-transparent border-b border-gray-600 py-2 text-white focus:outline-none focus:border-[rgba(231,27,75,1)]"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <input
                type="email"
                placeholder="EMAIL"
                className="bg-transparent border-b border-gray-600 py-2 text-white focus:outline-none focus:border-[rgba(231,27,75,1)]"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
              <input
                type="tel"
                placeholder="PHONE NO."
                className="bg-transparent border-b border-gray-600 py-2 text-white focus:outline-none focus:border-[rgba(231,27,75,1)]"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>
            <div className="mb-6">
              <input
                type="text"
                placeholder="SUBJECT"
                className="w-full bg-transparent border-b border-gray-600 py-2 text-white focus:outline-none focus:border-[rgba(231,27,75,1)]"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                required
              />
            </div>
            <div className="mb-6">
              <textarea
                placeholder="MESSAGE"
                className="w-full bg-transparent border-b border-gray-600 py-2 text-white focus:outline-none focus:border-[rgba(231,27,75,1)] min-h-[100px]"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>
            <button
              type="submit"
              className="bg-[rgba(231,27,75,1)] text-white px-8 py-3 rounded hover:bg-[rgba(231,27,75,0.9)] transition-colors w-full"
            >
              SUBMIT →
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
