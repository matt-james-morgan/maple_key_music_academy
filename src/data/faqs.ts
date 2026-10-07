export interface Faq {
  question: string;
  answer: string;
}

export interface FaqSection {
  title: string;
  faqs: Faq[];
}

const faqSections: FaqSection[] = [
  {
    title: "Getting Started",
    faqs: [
      {
        question: "At what age can students start music lessons?",
        answer:
          "It depends on the instrument! Piano and ukulele are great for younger learners and can begin as early as age 5. For guitar, we generally recommend starting around age 6 or 7. If you are unsure whether your child is ready or want advice on a specific instrument, feel free to reach out to us!",
      },
      {
        question: "Do you offer a trial lesson?",
        answer:
          "Yes! We offer a free 30-minute trial lesson for all new students with no strings attached. It’s a great opportunity to meet the instructor, try out the instrument, and see if our lessons are the right fit.",
      },
      {
        question: "Do you have a physical teaching studio?",
        answer:
          "We do not currently operate a physical studio space. Instead, we offer the convenience of in-home lessons in your neighborhood as well as online lessons from the comfort of your home.",
      },
    ],
  },
  {
    title: "Billing & Scheduling",
    faqs: [
      {
        question: "How much do lessons cost?",
        answer:
          "Lessons start at $50 per 30-minute session. We are deeply committed to supporting music education in our community, which is why the majority of tuition goes directly to paying our instructors fair, competitive rates.",
      },
      {
        question: "How does billing and payment work?",
        answer:
          "An invoice is sent at the end of each month, and payment can be made via e-transfer. We will be updating our payment system in the new year to accept credit card and EFT payments.",
      },
      {
        question: "What happens if I need to cancel or reschedule a lesson?",
        answer:
          "We understand that schedules change! We ask for at least 24 hours' notice to cancel/reschedule so our instructors can manage their schedules accordingly.",
      },
    ],
  },
  {
    title: "Instruments & Equipment",
    faqs: [
      {
        question: "Do I need my own instrument before starting lessons?",
        answer:
          "Yes, students will need an instrument at home for regular practice. For trial lessons or complete beginners, we are happy to recommend reliable local rental options or budget-friendly beginner models.",
      },
      {
        question: "How long should practice sessions be at home?",
        answer:
          "For beginners, 10 to 15 minutes of daily practice is a fantastic start. As students progress and build stamina, 30 minutes or more per day helps solidify skills and build confidence.",
      },
    ],
  },
  {
    title: "Instructors & Safety",
    faqs: [
      {
        question: "Are your instructors background-checked and qualified?",
        answer:
          "Absolutely. Safety and quality are our top priorities. All of our instructors undergo thorough background checks (including Vulnerable Sector Screenings) and have extensive teaching and performance backgrounds.",
      },
      {
        question: "Can siblings or family members take back-to-back lessons?",
        answer:
          "Yes! We frequently schedule back-to-back in-home sessions for siblings or family members to make your weekly routine as seamless as possible.",
      },
    ],
  },
];

export default faqSections;
