import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
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
                  <MapPin className="h-6 w-6" />
                  <span>Visit Our Studio</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  123 Maple Street
                  <br />
                  Music District
                  <br />
                  Toronto, ON M5V 3A8
                  <br />
                  Canada 🍁
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-2 border-red-100">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-red-600">
                  <Phone className="h-6 w-6" />
                  <span>Call Us</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  <strong>Main:</strong> (416) 555-MUSIC
                  <br />
                  <strong>Text:</strong> (416) 555-0123
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-2 border-red-100">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-red-600">
                  <Mail className="h-6 w-6" />
                  <span>Email Us</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  <strong>General:</strong> info@maplekeymusic.ca
                  <br />
                  <strong>Lessons:</strong> lessons@maplekeymusic.ca
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-2 border-red-100">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-red-600">
                  <Clock className="h-6 w-6" />
                  <span>Studio Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-gray-700 space-y-1">
                  <p>
                    <strong>Monday - Friday:</strong> 3:00 PM - 9:00 PM
                  </p>
                  <p>
                    <strong>Saturday:</strong> 9:00 AM - 6:00 PM
                  </p>
                  <p>
                    <strong>Sunday:</strong> 12:00 PM - 5:00 PM
                  </p>
                  <p className="text-red-600 font-medium mt-2">
                    🍁 Closed on Canadian holidays
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 border-2 border-red-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Send Us a Message 🍁
            </h3>

            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                    placeholder="Your first name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone (Optional)
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                  placeholder="(416) 555-0123"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What instrument are you interested in?
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors">
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
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                  placeholder="Tell us about your musical goals or any questions you have..."
                ></textarea>
              </div>

              <Button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
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
