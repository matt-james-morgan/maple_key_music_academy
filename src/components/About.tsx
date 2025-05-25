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
                Founded in the heart of Canada, Maple Key Music has been
                nurturing musical talent for over 15 years. Our cozy studio
                feels like a home away from home, where students of all ages
                come together to explore the wonderful world of music.
              </p>

              <p>
                We believe that music is a universal language that brings people
                together. Our warm, welcoming environment encourages creativity,
                builds confidence, and creates lasting friendships within our
                musical community.
              </p>

              <p>
                From your first lesson to your first performance, we're here to
                support your musical journey every step of the way. Come
                experience the magic of music with us!
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

                <div className="flex items-center space-x-3">
                  <span className="text-2xl">☕</span>
                  <span className="text-gray-700 font-medium">
                    Cozy Waiting Area
                  </span>
                </div>
              </div>
            </div>

            {/* Decorative maple leaves */}
            <div className="absolute -top-4 -right-4 text-red-600 text-4xl opacity-20">
              🍁
            </div>
            <div className="absolute -bottom-6 -left-6 text-red-600 text-5xl opacity-20">
              🍁
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
