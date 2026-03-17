export interface Resource {
  title: string;
  description: string;
  category: string;
  amazonUrl: string;
}

const resources: Resource[] = [
  // ── Books: Hal Leonard ──────────────────────────────────────────────────────
  {
    title: "Hal Leonard Guitar Method (Complete)",
    description: "The world's best-selling guitar course — covers chords, scales, theory, and songs for beginners through intermediate players.",
    category: "Hal Leonard Books",
    amazonUrl: "REPLACE_WITH_AFFILIATE_LINK",
  },
  {
    title: "Hal Leonard Piano Method (Book 1)",
    description: "A classic beginner piano method used in studios worldwide. Great starting point for young and adult learners alike.",
    category: "Hal Leonard Books",
    amazonUrl: "REPLACE_WITH_AFFILIATE_LINK",
  },
  {
    title: "Hal Leonard Ukulele Method (Book 1)",
    description: "Step-by-step ukulele instruction covering chords, strumming patterns, and popular songs.",
    category: "Hal Leonard Books",
    amazonUrl: "REPLACE_WITH_AFFILIATE_LINK",
  },
  {
    title: "Hal Leonard Drum Method (Complete)",
    description: "Covers basic drumming technique, reading music, rock, jazz, and more. Includes play-along audio.",
    category: "Hal Leonard Books",
    amazonUrl: "REPLACE_WITH_AFFILIATE_LINK",
  },
  {
    title: "Hal Leonard Vocal Method",
    description: "A comprehensive guide to singing technique, breath control, ear training, and repertoire for all styles.",
    category: "Hal Leonard Books",
    amazonUrl: "REPLACE_WITH_AFFILIATE_LINK",
  },
  {
    title: "Hal Leonard Banjo Method (Book 1)",
    description: "Teaches bluegrass, folk, and country banjo from the ground up — rolls, chords, and popular tunes.",
    category: "Hal Leonard Books",
    amazonUrl: "REPLACE_WITH_AFFILIATE_LINK",
  },
  {
    title: "Hal Leonard Cello Method (Book 1)",
    description: "An accessible introduction to cello technique, bowing, and notation for beginner students.",
    category: "Hal Leonard Books",
    amazonUrl: "REPLACE_WITH_AFFILIATE_LINK",
  },

  // ── Books: Faber ────────────────────────────────────────────────────────────
  {
    title: "Faber Piano Adventures: Primer Level (Lesson & Theory)",
    description: "The most widely used piano method for young beginners. Colorful, engaging, and comprehensive — used by our piano teachers.",
    category: "Faber Books",
    amazonUrl: "REPLACE_WITH_AFFILIATE_LINK",
  },
  {
    title: "Faber Piano Adventures: Level 1",
    description: "Continues from the Primer with more advanced notation, theory concepts, and expressive pieces.",
    category: "Faber Books",
    amazonUrl: "REPLACE_WITH_AFFILIATE_LINK",
  },
  {
    title: "Faber Piano Adventures: Level 2A",
    description: "Builds technique and musicality with an expanding repertoire of classical and contemporary pieces.",
    category: "Faber Books",
    amazonUrl: "REPLACE_WITH_AFFILIATE_LINK",
  },
  {
    title: "Faber Adult Piano Adventures (All-in-One Book 1)",
    description: "The go-to method for adult beginner pianists — combines lesson, theory, and solo book in one.",
    category: "Faber Books",
    amazonUrl: "REPLACE_WITH_AFFILIATE_LINK",
  },

  // ── Guitar & Stringed Accessories ───────────────────────────────────────────
  {
    title: "Kyser Quick-Change Capo (Acoustic Guitar)",
    description: "The most popular capo on the market — quick, reliable, and easy to use mid-song. Great for beginners and pros.",
    category: "Guitar Accessories",
    amazonUrl: "REPLACE_WITH_AFFILIATE_LINK",
  },
  {
    title: "Dunlop Trigger Capo (Electric/Acoustic)",
    description: "Durable spring-action capo with a low profile that won't get in the way. Works for both acoustic and electric.",
    category: "Guitar Accessories",
    amazonUrl: "REPLACE_WITH_AFFILIATE_LINK",
  },
  {
    title: "Fender Deluxe Guitar Strap",
    description: "Comfortable, adjustable strap that works with any acoustic or electric guitar. A must-have for standing players.",
    category: "Guitar Accessories",
    amazonUrl: "REPLACE_WITH_AFFILIATE_LINK",
  },
  {
    title: "Ernie Ball Polypro Guitar Strap",
    description: "Affordable, sturdy, and available in lots of colors. A great first strap for new students.",
    category: "Guitar Accessories",
    amazonUrl: "REPLACE_WITH_AFFILIATE_LINK",
  },
  {
    title: "Dunlop Variety Pick Pack (24-Pack)",
    description: "Includes thin, medium, and heavy picks so students can find what feels right for them.",
    category: "Guitar Accessories",
    amazonUrl: "REPLACE_WITH_AFFILIATE_LINK",
  },
  {
    title: "Fender Medium Celluloid Picks (12-Pack)",
    description: "Classic medium-gauge picks — the most popular choice for beginner and intermediate guitarists.",
    category: "Guitar Accessories",
    amazonUrl: "REPLACE_WITH_AFFILIATE_LINK",
  },
  {
    title: "Snark SN-5X Clip-On Chromatic Tuner",
    description: "Fast, accurate, and works on any instrument. Clips right to the headstock — ideal for beginners.",
    category: "Guitar Accessories",
    amazonUrl: "REPLACE_WITH_AFFILIATE_LINK",
  },
  {
    title: "D'Addario NS Micro Clip-On Tuner",
    description: "Ultra-compact, discreet tuner that stays on the headstock. Works for guitar, ukulele, banjo, and more.",
    category: "Guitar Accessories",
    amazonUrl: "REPLACE_WITH_AFFILIATE_LINK",
  },

  // ── General Music Accessories ────────────────────────────────────────────────
  {
    title: "Adjustable Music Stand",
    description: "A sturdy, height-adjustable stand for sheet music and books. Essential for any student practicing at home.",
    category: "General Accessories",
    amazonUrl: "REPLACE_WITH_AFFILIATE_LINK",
  },
  {
    title: "KLIQ MetroPitch – Metronome & Tuner",
    description: "A reliable combo metronome and chromatic tuner. Helps students build rhythm and stay in tune during practice.",
    category: "General Accessories",
    amazonUrl: "REPLACE_WITH_AFFILIATE_LINK",
  },
  {
    title: "Blank Staff Manuscript Paper Notebook",
    description: "Handy for writing out exercises, songs, and music theory notes during lessons and practice.",
    category: "General Accessories",
    amazonUrl: "REPLACE_WITH_AFFILIATE_LINK",
  },
  {
    title: "Pirastro Cello Rosin",
    description: "A top-quality rosin for cello students — helps the bow grip the strings for a clear, resonant tone.",
    category: "General Accessories",
    amazonUrl: "REPLACE_WITH_AFFILIATE_LINK",
  },
  {
    title: "Vic Firth American Classic Drumsticks (5A)",
    description: "The most popular drumstick size — great all-around weight and feel for beginner and intermediate drummers.",
    category: "General Accessories",
    amazonUrl: "REPLACE_WITH_AFFILIATE_LINK",
  },
  {
    title: "Donner Drum Practice Pad",
    description: "Lets drummers practice anywhere quietly — perfect for students who don't have a full kit at home yet.",
    category: "General Accessories",
    amazonUrl: "REPLACE_WITH_AFFILIATE_LINK",
  },
];

export const categories = [
  "Hal Leonard Books",
  "Faber Books",
  "Guitar Accessories",
  "General Accessories",
];

export default resources;
