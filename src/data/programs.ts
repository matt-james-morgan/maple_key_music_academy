import pianoImg from "../assets/piano.png";
import musicalTheatreImg from "../assets/musical-theatre.png";
import guitarImg from "../assets/guitar.png";
import banjoImg from "../assets/banjo.png";
import vocalImg from "../assets/vocal.png";
import drumsImg from "../assets/drums.png";
import actingImg from "../assets/acting.png";
import celloImg from "../assets/cello.png";
import ukuleleImg from "../assets/ukulele.png";

export interface Program {
  slug: string;
  title: string;
  image: string;
  description: string;
  highlights: string[];
}

const programs: Program[] = [
  {
    slug: "piano",
    title: "Piano",
    image: pianoImg,
    description:
      "Our piano program covers classical, contemporary, and popular styles for students of all ages and skill levels. Whether you're a complete beginner or preparing for RCM exams, our instructors tailor each lesson to your goals.",
    highlights: [
      "Classical and contemporary repertoire",
      "Music theory and sight-reading",
      "RCM exam preparation available",
      "All ages and skill levels welcome",
    ],
  },
  {
    slug: "musical-theatre",
    title: "Musical Theatre",
    image: musicalTheatreImg,
    description:
      "Our musical theatre program combines singing, acting, and movement to bring the stage to life. Students learn audition techniques, character development, and performance skills through beloved Broadway and contemporary repertoire.",
    highlights: [
      "Vocal technique for theatre",
      "Character and scene work",
      "Audition preparation",
      "Performance opportunities",
    ],
  },
  {
    slug: "guitar",
    title: "Guitar",
    image: guitarImg,
    description:
      "From acoustic strumming to electric shredding, our guitar lessons cover a wide range of styles including rock, jazz, classical, and folk. Students build technique, learn to read music and tabs, and develop their own musical voice.",
    highlights: [
      "Acoustic and electric guitar",
      "Multiple genres and styles",
      "Chord progressions and fingerpicking",
      "Songwriting and improvisation",
    ],
  },
  {
    slug: "banjo",
    title: "Banjo",
    image: banjoImg,
    description:
      "Discover the joy of banjo with lessons in bluegrass, folk, and clawhammer styles. Our instructors guide students through rolls, picking patterns, and traditional tunes that make the banjo such a unique and rewarding instrument.",
    highlights: [
      "Bluegrass and clawhammer styles",
      "Fingerpicking and roll patterns",
      "Traditional and modern repertoire",
      "Beginner-friendly approach",
    ],
  },
  {
    slug: "voice",
    title: "Voice",
    image: vocalImg,
    description:
      "Our vocal lessons help singers of all levels develop their instrument with proper technique, breath control, and performance confidence. We cover pop, classical, jazz, and musical theatre styles.",
    highlights: [
      "Breath support and vocal technique",
      "Multiple genres covered",
      "Performance confidence building",
      "RCM voice exam preparation",
    ],
  },
  {
    slug: "drums",
    title: "Drums",
    image: drumsImg,
    description:
      "Our drum lessons focus on rhythm, groove, and musicality across rock, jazz, funk, and Latin styles. Students learn proper technique, rudiments, and how to play with other musicians.",
    highlights: [
      "Rock, jazz, funk, and Latin grooves",
      "Stick technique and rudiments",
      "Reading drum notation",
      "Playing along with music",
    ],
  },
  {
    slug: "acting",
    title: "Acting",
    image: actingImg,
    description:
      "Our acting program develops confidence, creativity, and communication skills through scene study, improvisation, and monologue work. Perfect for aspiring performers or anyone looking to build self-expression skills.",
    highlights: [
      "Scene study and monologues",
      "Improvisation techniques",
      "Audition coaching",
      "Confidence and public speaking",
    ],
  },
  {
    slug: "cello",
    title: "Cello",
    image: celloImg,
    description:
      "Our cello program offers instruction in classical and contemporary styles, focusing on tone production, bowing technique, and musical expression. Students progress through carefully selected repertoire suited to their level.",
    highlights: [
      "Classical and contemporary repertoire",
      "Bowing and tone development",
      "Ensemble and solo playing",
      "RCM exam preparation available",
    ],
  },
  {
    slug: "ukulele",
    title: "Ukulele",
    image: ukuleleImg,
    description:
      "The ukulele is a wonderful first instrument and a joy for players of all ages. Our lessons cover strumming patterns, chord progressions, fingerpicking, and a fun mix of popular songs to keep students engaged.",
    highlights: [
      "Perfect for beginners of all ages",
      "Strumming and fingerpicking",
      "Popular song repertoire",
      "Music theory fundamentals",
    ],
  },
];

export default programs;
