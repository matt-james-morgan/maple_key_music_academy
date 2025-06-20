import { Card, CardContent } from "@/components/ui/card";
import JamesKilbyHeadShot from "../assets/jamesKilbyHeadshot.jpg";
import JohnKervinHeadShot from "../assets/johnKervinHeadshot.jpg";
import BeverleyRockwellHeadshot from "../assets/beverleyRockwellHeadshot.jpg";
import AndrewMcCarthyHeadshot from "../assets/andrewMcCarthyHeadshot.jpg";
import { useState } from "react";

const Instructors = () => {
  const instructors = [
    {
      name: "James Kilby",
      specialty: "Guitar",
      experience: "20 years",
      image: JamesKilbyHeadShot,
      description: `James Kilby is a Toronto based guitarist and singer. He studied music at Mohawk College and the University of Toronto, where he majored in classical guitar performance. After his classical studies, James turned his interest toward bluegrass and country music, and began developing himself as a vocalist. He performs regularily around southern Ontario with his bluegrass band, The Don Valley Drifters. 
      As an educator, James uses his expertise to develop lesson plans geared toward the student's interests and goals. He has vast knowledge and experience teaching bluegrass, country, rock, blues, jazz and classical music. Whether the student is an absolute beginner or an advanced musician; James can help develop their skills.`,
    },
    {
      name: "Beverley Rockwell",
      specialty: "Acting, Piano, Voice",
      experience: "10 years",
      image: BeverleyRockwellHeadshot,
      description:
        "Beverley has been a performer from a very young age, that all started when she crashed her mother’s voice studio recitals singing The Little Mermaid at 3 years old. After 10 years of piano lessons culminating into her Grade 9 RCM in piano,12+ years of dance classes, choir, and voice lessons, they pursued a Bachelor of Fine Arts in Acting from the University of Alberta and graduated with distinction. Throughout her life, Beverley has had the opportunity to teach students in musical theatre, dance, acting, voice, piano, guitar, and ukulele, both in a group setting, and in private one on one sessions. They also are an avid songwriter, and are currently teaching themselves how to play the accordion!",
    },
    {
      name: "John Kervin",
      specialty: "Piano, Banjo, Guitar, Ukulele",
      experience: "10 years",
      image: JohnKervinHeadShot,
      description: `John Kervin is a talented multi-instrumentalist based in Toronto, widely recognized for his vital role in the country and bluegrass scene as a member of Duke Street Turnaround. As the band’s banjo player, John brings authentic, vibrant energy to their traditional and contemporary roots sound. Duke Street Turnaround has built a strong reputation in the Toronto music community and beyond, known for their heartfelt storytelling and masterful musicianship. Kervin’s banjo playing adds depth and texture to the group’s performances, helping to shape their distinct and compelling sound that resonates deeply with fans of country and bluegrass music.

Previously, John was the keyboard player for the Southern soul and roots rock band Bywater Call, which toured internationally and garnered multiple blues music award nominations. His ability to move seamlessly between genres speaks to his versatility and dedication as a musician. John Kervin’s broad musical experience and passion for both traditional and modern sounds make him a respected figure in Toronto’s vibrant music scene.`,
    },
    {
      name: "Andrew McCarthy",
      specialty: "Drums",
      experience: "10 years",
      image: AndrewMcCarthyHeadshot,
      description: `Andrew McCarthy (B.Mus) is a native of St. John’s, Newfoundland
and continues to be an active member of the diverse music scene of
his hometown. After completing a Bachelor of Music at Memorial
University in 2016, Andrew made two separate trips to the Volta Region of
Ghana, West Africa to study traditional Ewe music, primarily the drumming
traditions.
However in 2019 he decided it was time for a change and moved to
Toronto. There he studied Jazz at Humber College with top
level international artists and a fantastic faculty who are all
revered in their respective fields. Notable experiences at Humber
were working with 2018 Artist in Residence Pat Metheny, and
playing for Terri-lynn Carrington alongside Lisa Martinelli's Jazz
Vocal ensemble.
In, 2024, Andrew joined with Saskatoon based Ellen
Froese’s band for a stint of shows opening for The Sheepdogs on
their Backyard Boogie Tour. In March of 2025, he did a run of the musical
“Million Dollar Quartet” at the historic Gayety Theatre in Collingwood, Ontario.
In April of the same year, Andrew also completed a run of “Jesus Christ
Superstar,” at the Majestic Theatre in St. Johns, Newfoundland.
Now active in the vibrant and dynamic music scene of Toronto, Andrew runs
his own projects, teaches drum students and finds plenty of opportunity as a side
musician in many different musical worlds. Regardless of style or venue, Andrew
plays with a deep reverence for the music at hand and brings an honest joy to
every performance.`,
    },
  ];

  const [expandedIndices, setExpandedIndices] = useState<number[]>([]);

  const toggleExpand = (index: number) => {
    setExpandedIndices((prev: number[]) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

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
          {instructors.map((instructor, index) => {
            const isExpanded = expandedIndices.includes(index);
            const shouldTruncate = instructor.description.length > 200;
            const displayText =
              isExpanded || !shouldTruncate
                ? instructor.description
                : instructor.description.slice(0, 200) + "...";

            return (
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

                  <div className="text-gray-700 leading-relaxed mb-2">
                    {displayText}
                  </div>

                  {shouldTruncate && (
                    <button
                      onClick={() => toggleExpand(index)}
                      className="bg-inherit text-red-500 underline underline-offset-4 hover:decoration-2 text-sm transition border border-transparent hover:border-red-500 focus:border-red-500 active:border-red-500 rounded px-2 py-1"
                    >
                      {isExpanded ? "Read less" : "Read more"}
                    </button>
                  )}
                </CardContent>
              </Card>
            );
          })}
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
