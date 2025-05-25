import { Piano, Guitar, Mic, Music4 } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Programs = () => {
  const programs = [
    {
      icon: Piano,
      title: "Piano Lessons",
      description:
        "From classical to contemporary, discover the beauty of piano with our certified instructors.",
      ages: "Ages 4+",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: Guitar,
      title: "Guitar Lessons",
      description:
        "Acoustic or electric, learn to strum your way to musical freedom with personalized instruction.",
      ages: "Ages 6+",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: Mic,
      title: "Voice Training",
      description:
        "Develop your unique voice with techniques that build confidence and vocal strength.",
      ages: "Ages 8+",
      color: "bg-purple-50 border-purple-200",
    },
    {
      icon: Music4,
      title: "Music Theory",
      description:
        "Understanding the language of music to enhance your playing and composition skills.",
      ages: "All Ages",
      color: "bg-orange-50 border-orange-200",
    },
  ];

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our <span className="text-red-600">Programs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive music programs designed to nurture
            creativity, build confidence, and foster a lifelong love of music.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <Card
              key={index}
              className={`${program.color} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2`}
            >
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-white p-4 rounded-full shadow-md">
                    <program.icon className="h-8 w-8 text-red-600" />
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-gray-800">
                  {program.title}
                </CardTitle>
                <CardDescription className="text-gray-600 font-medium">
                  {program.ages}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-center leading-relaxed">
                  {program.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Can't find what you're looking for? We offer custom programs too!
          </p>
          <div className="inline-flex items-center space-x-2 text-red-600 font-semibold text-lg">
            <span>🍁</span>
            <span>Individual & Group Lessons Available</span>
            <span>🍁</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
