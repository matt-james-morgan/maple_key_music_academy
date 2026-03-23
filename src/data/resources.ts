export interface Resource {
  title: string;
  description: string;
  category: string;
  amazonUrl: string;
  image?: string;
}

const resources: Resource[] = [
  // ── Books: Hal Leonard ──────────────────────────────────────────────────────
  {
    title: "Hal Leonard Guitar Method (Complete)",
    description: "The world's best-selling guitar course — covers chords, scales, theory, and songs for beginners through intermediate players.",
    category: "Hal Leonard Books",
    amazonUrl: "https://www.amazon.ca/Leonard-Learning-Beginners-Acoustic-Traditional/dp/0793533929?linkCode=ll2&tag=maplekeymusic-20&linkId=44b37f349c1106aa278c44009979943b&ref_=as_li_ss_tl",
  },
  {
    title: "Hal Leonard Piano Method (Book 1)",
    description: "A classic beginner piano method used in studios worldwide. Great starting point for young and adult learners alike.",
    category: "Hal Leonard Books",
    amazonUrl: "https://www.amazon.ca/dp/0793562600?tag=maplekeymusic-20&linkCode=ll2&linkId=d62073834a609e33943475c45c2d73ac&ref_=as_li_ss_tl",
  },
  {
    title: "Hal Leonard Ukulele Method (Book 1)",
    description: "Step-by-step ukulele instruction covering chords, strumming patterns, and popular songs.",
    category: "Hal Leonard Books",
    amazonUrl: "https://www.amazon.ca/Ukulele-Method-Book-Step-Step/dp/0634079867?tag=maplekeymusic-20&linkCode=ll2&linkId=a9d05b1e7511e1a95394d004564d779c&ref_=as_li_ss_tl",
  },
  {
    title: "Hal Leonard Drumset Method (Complete Edition)",
    description: "Covers basic drumming technique, reading music, rock, jazz, and more. Includes play-along audio.",
    category: "Hal Leonard Books",
    amazonUrl: "https://www.amazon.ca/Leonard-Drumset-Method-Complete-Step/dp/1495083349?tag=maplekeymusic-20&linkCode=ll2&linkId=d1b1ec30792df64d301b935e737f01c4&ref_=as_li_ss_tl",
  },
  {
    title: "Hal Leonard Vocal Method",
    description: "A comprehensive guide to singing technique, breath control, ear training, and repertoire for all styles.",
    category: "Hal Leonard Books",
    amazonUrl: "https://www.amazon.ca/Hal-Leonard-Vocal-Method-Soprano/dp/1705107591?tag=maplekeymusic-20&linkCode=ll2&linkId=3fbc98d07a9e3f7a62e056f73efb411d&ref_=as_li_ss_tl",
  },
  {
    title: "Hal Leonard Banjo Method (Book 1)",
    description: "Teaches bluegrass, folk, and country banjo from the ground up — rolls, chords, and popular tunes.",
    category: "Hal Leonard Books",
    amazonUrl: "https://www.amazon.ca/Hal-Leonard-Banjo-Method-5-String/dp/0793538408?tag=maplekeymusic-20&linkCode=ll2&linkId=afaebe5cbe408989a6a933a3f88eaf87&ref_=as_li_ss_tl",
  },

  // ── Books: Faber ────────────────────────────────────────────────────────────
  {
    title: "Faber Piano Adventures: Primer Level (Lesson & Theory)",
    description: "The most widely used piano method for young beginners. Colorful, engaging, and comprehensive — used by our piano teachers.",
    category: "Faber Books",
    amazonUrl: "https://www.amazon.ca/NANCY-FABER-ADVENTURES-ALL-TWO/dp/1616776463?tag=maplekeymusic-20&linkCode=ll2&linkId=48d84c008422943ea791a159a9fb9273&ref_=as_li_ss_tl",
  },
  {
    title: "Faber Piano Adventures: Level 1",
    description: "Continues from the Primer with more advanced notation, theory concepts, and expressive pieces.",
    category: "Faber Books",
    amazonUrl: "https://www.amazon.ca/Level-Lesson-Book-Piano-Adventures/dp/1616770783?tag=maplekeymusic-20&linkCode=ll2&linkId=7d6bedc42d29884cf74487ed8eed8ae5&ref_=as_li_ss_tl",
  },
  {
    title: "Faber Piano Adventures: Level 2A",
    description: "Builds technique and musicality with an expanding repertoire of classical and contemporary pieces.",
    category: "Faber Books",
    amazonUrl: "https://www.amazon.ca/Level-2A-Lesson-Piano-Adventures/dp/1616770813?tag=maplekeymusic-20&linkCode=ll2&linkId=ac4f8897d69721c960e4e6100fe360a3&ref_=as_li_ss_tl",
  },
  {
    title: "Faber Adult Piano Adventures (All-in-One Book 1)",
    description: "The go-to method for adult beginner pianists — combines lesson, theory, and solo book in one.",
    category: "Faber Books",
    amazonUrl: "https://www.amazon.ca/Adult-Piano-Adventures-All-Course/dp/1616773022?tag=maplekeymusic-20&linkCode=ll2&linkId=8c42a6a50ab9c1f385f6baa36b328a04&ref_=as_li_ss_tl",
  },

  // ── Guitar & Stringed Accessories ───────────────────────────────────────────
  {
    title: "Kyser Quick-Change Capo (Acoustic Guitar)",
    description: "The most popular capo on the market — quick, reliable, and easy to use mid-song. Great for beginners and pros.",
    category: "Guitar Accessories",
    amazonUrl: "https://www.amazon.ca/Kyser-Quick-Change-6-string-acoustic-guitars/dp/B07V7HSF63?tag=maplekeymusic-20&linkCode=ll2&linkId=f8bc1310e858e82771d99364966a1a61&ref_=as_li_ss_tl",
  },
  {
    title: "Dunlop Trigger Capo (Electric/Acoustic)",
    description: "Durable spring-action capo with a low profile that won't get in the way. Works for both acoustic and electric.",
    category: "Guitar Accessories",
    amazonUrl: "https://www.amazon.ca/Dunlop-83CB-Guitar-Capo-Black/dp/B000788VPG?tag=maplekeymusic-20&linkCode=ll2&linkId=812bd30a99bd733729a3eed3f9dd95b4&ref_=as_li_ss_tl",
  },
  {
    title: "Fender Deluxe Guitar Strap",
    description: "Comfortable, adjustable strap that works with any acoustic or electric guitar. A must-have for standing players.",
    category: "Guitar Accessories",
    amazonUrl: "https://www.amazon.ca/Strap-Guitar-Fender-Deluxe-Black/dp/B01M2CVBLS?tag=maplekeymusic-20&linkCode=ll2&linkId=789a758b05adb663a52c7282d394579d&ref_=as_li_ss_tl",
  },
  {
    title: "Ernie Ball Polypro Guitar Strap",
    description: "Affordable, sturdy, and available in lots of colors. A great first strap for new students.",
    category: "Guitar Accessories",
    amazonUrl: "https://www.amazon.ca/Ernie-Ball-P04037-Polypro-Guitar/dp/B0002D0E92?tag=maplekeymusic-20&linkCode=ll2&linkId=8adbded6eba9a2102f5d94857fd397c9&ref_=as_li_ss_tl",
  },
  {
    title: "Fender Medium Celluloid Picks (12-Pack)",
    description: "Classic medium-gauge picks — the most popular choice for beginner and intermediate guitarists.",
    category: "Guitar Accessories",
    amazonUrl: "https://www.amazon.ca/Fender-Premium-Celluloid-Guitar-Medium/dp/B0002E2XDQ?tag=maplekeymusic-20&linkCode=ll2&linkId=65a8c105b3605fb2f1a4cf781bb44c68&ref_=as_li_ss_tl",
  },

  // ── General Music Accessories (no links yet) ─────────────────────────────────
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
    title: "Hal Leonard Cello Method (Book 1)",
    description: "An accessible introduction to cello technique, bowing, and notation for beginner students.",
    category: "Hal Leonard Books",
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
  {
    title: "Dunlop Variety Pick Pack (24-Pack)",
    description: "Includes thin, medium, and heavy picks so students can find what feels right for them.",
    category: "Guitar Accessories",
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
