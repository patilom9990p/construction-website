"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-28 bg-white">

      <div className="max-w-7xl mx-auto px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[5px] text-orange-600 font-semibold">
            Contact Us
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Let's Build Together
          </h2>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
            Have a construction project in mind? Contact our experts today for
            a free consultation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mt-20">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >

            <div className="flex items-center gap-5">
              <div className="bg-orange-100 p-4 rounded-full">
                <Phone className="text-orange-600" />
              </div>

              <div>
                <h3 className="font-bold text-xl">
                  Phone
                </h3>

                <p className="text-gray-600">
                  +91 8626034157
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="bg-orange-100 p-4 rounded-full">
                <Mail className="text-orange-600" />
              </div>

              <div>
                <h3 className="font-bold text-xl">
                  Email
                </h3>

                <p className="text-gray-600">
                  patilom9990p@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="bg-orange-100 p-4 rounded-full">
                <MapPin className="text-orange-600" />
              </div>

              <div>
                <h3 className="font-bold text-xl">
                  Office
                </h3>

                <p className="text-gray-600">
                  Kolhapur, Maharashtra, India
                </p>
              </div>
            </div>

          </motion.div>

          {/* Right */}

          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-100 rounded-3xl p-10 space-y-6 shadow-xl"
          >

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-xl border outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-4 rounded-xl border outline-none"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full p-4 rounded-xl border outline-none"
            />

            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full p-4 rounded-xl border outline-none"
            ></textarea>

            <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-xl font-bold transition">
              Send Message
            </button>

          </motion.form>

        </div>

      </div>

    </section>
  );
}