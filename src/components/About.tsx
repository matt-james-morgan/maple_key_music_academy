import { Heart, MapPin, Star } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-red-50 via-orange-50 to-amber-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              About <span className="text-red-600">Maple Key Music</span>
            </h2>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Founded in Toronto, Maple Key Music Academy provides quality in
                home lessons for all ages and skill levels. We have high
                standards for our teachers, and those in our network are
                educated, working professionals who have dedicated their lives
                to their passion for music.
              </p>
              <p>
                Our goal is to nurture that same passion in our students. We
                strive to make the journey of learning fun and engaging for all.
                Let us help you find the right teacher for your learning goals
                today!
              </p>
            </div>

            <div className="mt-8 grid sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-white p-4 rounded-full shadow-lg inline-block mb-3">
                  <Heart className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="font-semibold text-gray-800">
                  Passionate Teaching
                </h3>
              </div>

              <div className="text-center">
                <div className="bg-white p-4 rounded-full shadow-lg inline-block mb-3">
                  <MapPin className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="font-semibold text-gray-800">Local Community</h3>
              </div>

              <div className="text-center">
                <div className="bg-white p-4 rounded-full shadow-lg inline-block mb-3">
                  <Star className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="font-semibold text-gray-800">Excellence</h3>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <img
                src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843"
                alt="Warm music studio"
                className="w-full h-64 object-cover rounded-2xl mb-6"
              />

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🍁</span>
                  <span className="text-gray-700 font-medium">
                    Proudly Canadian
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🏠</span>
                  <span className="text-gray-700 font-medium">
                    Family-Friendly Environment
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🎵</span>
                  <span className="text-gray-700 font-medium">
                    All Skill Levels Welcome
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
