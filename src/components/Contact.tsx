import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import emailjs from "@emailjs/browser";
import type { FormEvent } from "react";

const Contact = () => {
  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    // Add or update hidden input for time
    let timeInput = form.querySelector(
      'input[name="time"]'
    ) as HTMLInputElement | null;
    if (!timeInput) {
      timeInput = document.createElement("input");
      timeInput.type = "hidden";
      timeInput.name = "time";
      form.appendChild(timeInput);
    }
    timeInput.value = new Date().toLocaleString();

    const formData = new FormData(e.currentTarget);
    for (const [key, value] of formData.entries()) {
      console.log(key, value);
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          form.reset();
          alert("Message sent!");
        },
        (error) => {
          console.error("Email error:", error.text);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Get In <span className="text-red-600">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your musical journey? We'd love to hear from you!
            Contact us today to schedule a tour or ask any questions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm border-2 border-red-100">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-red-600">
                  <span className="text-2xl">✉️</span>
                  <span>Email Us</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  <strong>General:</strong> maplekeymusic.academy@gmail.com
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 border-2 border-red-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Send Us a Message 🍁
            </h3>

            <form className="space-y-6" onSubmit={sendEmail}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                    placeholder="Your first name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                    placeholder="Your last name"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone (Optional)
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                  placeholder="(416) 555-0123"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What instrument are you interested in?
                </label>
                <select
                  name="instrument"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                  required
                >
                  <option value="">Select an instrument</option>
                  <option value="piano">Piano</option>
                  <option value="guitar">Guitar</option>
                  <option value="voice">Voice</option>
                  <option value="theory">Music Theory</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                  placeholder="Tell us about your musical goals or any questions you have..."
                  required
                ></textarea>
              </div>

              <Button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-black py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Send Message 🍁
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
