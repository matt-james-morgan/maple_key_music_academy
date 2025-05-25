import { Card, CardContent } from "@/components/ui/card";

const Instructors = () => {
  const instructors = [
    {
      name: "Sarah Thompson",
      specialty: "Piano & Music Theory",
      experience: "12 years",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c",
      description:
        "Classically trained pianist with a passion for making music theory accessible and fun.",
    },
    {
      name: "Michael Chen",
      specialty: "Guitar & Composition",
      experience: "10 years",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      description:
        "Professional guitarist who loves helping students find their unique musical voice.",
    },
    {
      name: "Emma Wilson",
      specialty: "Voice & Performance",
      experience: "8 years",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      description:
        "Professional vocalist with experience in musical theater and contemporary music.",
    },
  ];

  return (
    <section id="instructors" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Meet Our <span className="text-red-600">Instructors</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our dedicated team of professional musicians and certified
            instructors are passionate about sharing their love of music with
            students of all ages.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {instructors.map((instructor, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <CardContent className="p-6 text-center">
                <div className="relative mb-6">
                  <img
                    src={`${instructor.image}?w=200&h=200&fit=crop&crop=face`}
                    alt={instructor.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg border-4 border-white"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-red-600 text-white p-2 rounded-full">
                    🍁
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {instructor.name}
                </h3>

                <div className="text-red-600 font-semibold mb-2">
                  {instructor.specialty}
                </div>

                <div className="text-gray-600 text-sm mb-4">
                  {instructor.experience} of experience
                </div>

                <p className="text-gray-700 leading-relaxed">
                  {instructor.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 bg-gradient-to-r from-red-600 to-orange-600 text-white p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-4">
            🍁 Join Our Musical Family 🍁
          </h3>
          <p className="text-lg mb-4">
            Our instructors are more than teachers - they're mentors,
            cheerleaders, and friends who will guide you on your musical journey
            with patience and encouragement.
          </p>
          <p className="text-red-100">
            All our instructors are certified and undergo background checks for
            your peace of mind.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Instructors;
