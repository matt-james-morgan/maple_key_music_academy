import { Music, MapPin, Star } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 py-20 overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-red-600 text-6xl">🍁</div>
        <div className="absolute top-32 right-20 text-red-600 text-4xl">🍁</div>
        <div className="absolute bottom-20 left-1/4 text-red-600 text-5xl">
          🍁
        </div>
        <div className="absolute bottom-32 right-1/3 text-red-600 text-3xl">
          🍁
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Welcome to
            <span className="block text-red-600 mt-2">Maple Key Music</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover the joy of music in the heart of Canada. Our warm,
            welcoming community nurtures musicians of all ages and skill levels.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12"></div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-red-100 p-3 rounded-full">
                  <MapPin className="h-8 w-8 text-red-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                100% Canadian
              </h3>
              <p className="text-gray-600">
                We believe in supporting Canada and Canadian Music.
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-red-100 p-3 rounded-full">
                  <Star className="h-5 w-5 text-red-600 fill-red-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Top Instructors
              </h3>
              <p className="text-gray-600">
                Our instructors have real world experience to get you
                performance ready.
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-red-100 p-3 rounded-full">
                  <Music className="h-4 w-4 text-red-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                In Home Lessons
              </h3>
              <p className="text-gray-600">
                Take lessons from the convenience of your own home
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
