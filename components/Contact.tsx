"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[6px] text-orange-600 font-semibold text-sm">
            CONTACT US
          </p>

          <h2 className="mt-4 text-4xl md:text-6xl font-black text-gray-900">
            Let's Build Together
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-gray-600">
            Have a construction project in mind? Contact our experts today for
            a free consultation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mt-20">

          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >

            <div className="flex items-center gap-5">
              <div className="bg-orange-100 p-4 rounded-full">
                <Phone className="text-orange-600" size={28} />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Phone
                </h3>

                <p className="text-gray-600 mt-1">
                  +91 8626034157
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="bg-orange-100 p-4 rounded-full">
                <Mail className="text-orange-600" size={28} />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Email
                </h3>

                <p className="text-gray-600 mt-1">
                  patilom9990p@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="bg-orange-100 p-4 rounded-full">
                <MapPin className="text-orange-600" size={28} />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Office
                </h3>

                <p className="text-gray-600 mt-1">
                  Kolhapur, Maharashtra, India
                </p>
              </div>
            </div>

          </motion.div>

          {/* Contact Form */}

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-100 rounded-3xl p-8 md:p-10 shadow-xl space-y-6"
          >

            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-xl border border-gray-300 bg-white p-4 text-gray-900 placeholder:text-gray-500 outline-none focus:border-orange-500"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-xl border border-gray-300 bg-white p-4 text-gray-900 placeholder:text-gray-500 outline-none focus:border-orange-500"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full rounded-xl border border-gray-300 bg-white p-4 text-gray-900 placeholder:text-gray-500 outline-none focus:border-orange-500"
            />

            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full rounded-xl border border-gray-300 bg-white p-4 text-gray-900 placeholder:text-gray-500 outline-none focus:border-orange-500"
            />

            <button
              type="submit"
              className="w-full rounded-xl bg-orange-600 py-4 text-lg font-bold text-white transition hover:bg-orange-700"
            >
              Send Message
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
}