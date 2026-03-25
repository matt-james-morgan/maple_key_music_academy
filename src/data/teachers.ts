import JamesKilbyHeadshot from "../assets/jamesKilbyHeadshot.jpg";
import JohnKervinHeadshot from "../assets/johnKervinHeadshot.jpg";
import BeverleyRockwellHeadshot from "../assets/beverleyRockwellHeadshot.jpg";
import AndrewMcCarthyHeadshot from "../assets/andrewMcCarthyHeadshot.jpg";
import SamHarrisonHeadshot from "../assets/samHarrisonHeadshot.jpeg";
import JakobDurstHeadshot from "../assets/jakobDurstHeadshot.jpeg";

export interface Teacher {
  slug: string;
  name: string;
  firstName: string;
  specialty: string;
  image: string;
  education: string;
  teachingDays: string;
  bio: string;
  quote: string;
  quoteAuthor: string;
}

const teachers: Teacher[] = [
  {
    slug: "beverley-rockwell",
    name: "Beverley Rockwell",
    firstName: "Beverley",
    specialty: "Voice, Piano, Musical Theatre, Acting, Ukulele",
    image: BeverleyRockwellHeadshot,
    education: "BFA, University of Alberta",
    teachingDays: "Tuesday, Friday, Sunday",
    bio: "Beverley has been a performer from a very young age. It all started when she crashed her mother's voice studio recital singing The Little Mermaid at 3 years old. After 10 years of piano lessons culminating into her Grade 9 RCM in piano, 12+ years of dance classes, choir, and voice lessons, they pursued a Bachelor of Fine Arts in Acting from the University of Alberta, and graduated with distinction. Throughout her life, Beverley has had the opportunity to teach students in musical theatre, dance, acting, voice, piano, guitar, and ukulele, in both group and one-on-one sessions. They also are an avid songwriter, and are currently teaching themselves how to play the accordion.",
    quote:
      "Bev is an absolutely incredible singing teacher. She helped my daughter get into a very challenging and competitive theatre group. She truly is a ray of sunshine, and we feel so lucky to have her!",
    quoteAuthor: "Lauren, parent of student",
  },
  {
    slug: "john-kervin",
    name: "John Kervin",
    firstName: "John",
    specialty: "Piano, Banjo",
    image: JohnKervinHeadshot,
    education: "BMus, University of Toronto",
    teachingDays: "Monday, Wednesday, Saturday",
    bio: "John is a versatile musician with a deep passion for both classical and folk traditions. With over 15 years of teaching experience, he brings warmth and patience to every lesson. John holds a Bachelor of Music from the University of Toronto and has performed extensively across Ontario. He believes in building a strong foundation while keeping lessons fun and engaging for students of all ages.",
    quote:
      "John has been an incredible teacher for my son. His patience and the way he makes even scales feel like a game — we couldn't ask for more.",
    quoteAuthor: "Parent of student",
  },
  {
    slug: "sam-harrison",
    name: "Sam Harrison",
    firstName: "Sam",
    specialty: "Cello, Piano",
    image: SamHarrisonHeadshot,
    education: "MMus, Royal Conservatory of Music",
    teachingDays: "Monday, Thursday, Saturday",
    bio: "Sam is a classically trained cellist and pianist with a Master of Music from the Royal Conservatory. With a deep love for chamber music and orchestral performance, Sam brings a wealth of experience to every lesson. They have performed with several orchestras across Canada and are dedicated to helping students discover the beauty of string instruments. Sam's teaching style emphasizes musicality, technique, and the joy of making music.",
    quote:
      "Sam's passion for music is contagious. My daughter looks forward to every lesson and has grown so much — both in technique and in confidence.",
    quoteAuthor: "Parent of student",
  },
  {
    slug: "andrew-mccarthy",
    name: "Andrew McCarthy",
    firstName: "Andrew",
    specialty: "Drums",
    image: AndrewMcCarthyHeadshot,
    education: "Humber College Music Program",
    teachingDays: "Wednesday, Friday, Sunday",
    bio: "Andrew is a dynamic drummer and percussionist who has been playing since the age of 8. A graduate of Humber College's renowned music program, Andrew has toured across Canada and the United States with various bands spanning rock, jazz, and funk genres. His teaching approach focuses on groove, timing, and musicality, helping students develop their own unique style while building solid technical foundations.",
    quote:
      "Andrew makes drumming so much fun! He's patient, encouraging, and always pushes me to be better. I actually look forward to practising now.",
    quoteAuthor: "Student",
  },
  {
    slug: "jakob-durst",
    name: "Jakob Durst",
    firstName: "Jakob",
    specialty: "Piano, Saxophone",
    image: JakobDurstHeadshot,
    education: "HBSc Human Biology, University of Toronto",
    teachingDays: "Monday, Wednesday, Friday",
    bio: "Jakob believes that music is a wonderful source of fun, community, and self-improvement. He brings a comfortable and engaging presence to his lessons that make for an enjoyable experience across all ages and musical disciplines. As a freelance musician in Toronto, Jakob regularly leads his own bands at venues across the city and throughout Ontario. He has held multiple residencies at The Rex Jazz and Blues Bar (Toronto), The Jazz Bistro (Toronto), Manhattans Music Club (Guelph), and The Jazz Room (Waterloo). Festival appearances and sideman work around town also frequent Jakob's musical calendar, and he has performed with many of the finest Jazz musicians that Canada has to offer, including Terry Clarke, Neil Swainson, Reg Schwager, and many others. Jakob is also a recent graduate of the University of Toronto's Human Biology undergraduate program, bringing an analytical curiosity and love of learning to everything he does.",
    quote:
      "Jakob has such a natural ability to connect with students. His calm, encouraging style makes every lesson feel fun and productive — my son genuinely looks forward to it every week.",
    quoteAuthor: "Parent of student",
  },
  {
    slug: "james-kilby",
    name: "James Kilby",
    firstName: "James",
    specialty: "Guitar",
    image: JamesKilbyHeadshot,
    education: "BMus, York University",
    teachingDays: "Tuesday, Thursday, Saturday",
    bio: "James is an accomplished guitarist with expertise spanning classical, jazz, and contemporary styles. A graduate of York University's music program, James has been teaching guitar for over a decade. He is known for his ability to connect with students of all ages and skill levels, creating a supportive and inspiring learning environment. James is also an active performer and session musician in the Toronto music scene.",
    quote:
      "[Our teacher] has been nothing short of incredible. In just one year, he's taken Gemma from beginner to confidently playing both acoustic and electric guitar. He meets her where she's at, keeping lessons engaging with music she actually loves, while still pushing her to improve. We feel so lucky to have found him. Highly, highly recommend.",
    quoteAuthor: "Lauren, parent of student",
  },
];

export default teachers;
