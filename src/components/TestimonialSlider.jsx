import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// const testimonials = [
//   {
//     quote:
//       "Think Beyond Ads helped us double our ROI with their expert Google and Meta Ads strategies!",
//     name: "Rocco",
//     company: "Rocc Solid Construction (Founder)",
//   },
//   {
//     quote:
//       "Our brand visibility has skyrocketed thanks to the team’s tailored ad campaigns.",
//     name: "Sami",
//     company: "Motor City (Founder)",
//   },
//   {
//     quote:
//       "The results speak for themselves—our leads increased by 40% within the first month!",
//     name: "AJ",
//     company: "QuietBounce (Founder)",
//   },
//   {
//     quote:
//       "Think Beyond Ads takes the guesswork out of digital advertising and delivers real results.",
//     name: "Juan",
//     company: "Homewatch Caregivers (Founder)",
//   },
//   {
//     quote:
//       "We saw immediate growth in our online sales, all thanks to their precision-targeted ads.",
//     name: "Marilyn",
//     company: "The Queens Corner Charity (Founder)",
//   },
//   {
//     quote:
//       "Their attention to detail and ability to optimize campaigns has transformed our marketing.",
//     name: "Marilyn",
//     company: "Royalty Health Care (Founder)",
//   },
//   {
//     quote:
//       "Working with Think Beyond Ads has been a game changer for our business growth.",
//     name: "Valeria",
//     company: "Nails&Blinks (Founder)",
//   },
// ];

const testimonials = [
  {
    quote:
      "Working with ThinkBeyondAds has been a game-changer for our business. We saw a 43% increase in leads within just two months of using their Meta and Google Ads strategies. Their team truly knows how to turn ad spend into measurable growth.",
    // name: "— Anonymous",
    // company: "Results That Speak for Themselves",
  },
  {
    quote:
      "Daniel was fantastic in keeping us updated throughout the process. His communication was clear, concise, and always timely. Our ROI increased by 29% in the first quarter, and the entire team was easy to work with.",
    // name: "Daniel",
    // company: "Clear Communication and Real Results",
  },
  {
    quote:
      "AJ’s marketing plan was nothing short of brilliant. His strategy helped us increase Google Ads conversions by 50%. The entire team at ThinkBeyondAds is knowledgeable, and they truly know how to drive real, sustainable results.",
    // name: "AJ",
    // company: "AJ’s Marketing Plan Was Incredible",
  },
  {
    quote:
      "Since partnering with ThinkBeyondAds, our business has seen consistent growth. Their team helped us refine our Meta Ads, leading to a 34% increase in qualified leads. They’re not just an agency; they’re a growth partner.",
    // name: "— Anonymous",
    // company: "A True Partner in Growth",
  },
  {
    quote:
      "I was impressed with how easy it was to work with the ThinkBeyondAds team. Their strategies for both Google and Meta Ads brought a 61% increase in website traffic, and their approach was simple to understand and execute. Great experience!",
    // name: "— Anonymous",
    // company: "Easy to Work With and Highly Effective",
  },
  {
    quote:
      "Amr and Joseph played a crucial role in helping us plan our business growth strategy. Their insights into the ad campaigns, combined with their hands-on approach, helped us refine our Meta Ads and contributed to a 57% increase in our lead generation. They really know how to guide you to success.",
    // name: "Amr & Joseph",
    // company: "Amr and Joseph Helped Us Plan for Success",
  },
  {
    quote:
      "The team is incredibly easy-going and professional. They helped us design a customized Google Ads strategy that delivered a 33% boost in sales. The ThinkBeyondAds team really listens to your needs and delivers on their promises.",
    // name: "— Anonymous",
    // company: "Friendly, Professional, and Effective",
  },
];


export default function TestimonialsSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center mt-12 px-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-4xl text-bg-primary  mb-4">❝</div>
          <p className="text-white  text-xl font-semibold max-w-2xl mx-auto">
            "{testimonials[index].quote}"
          </p>
          {/* <p className="text-sm  text-bg-primary mt-2  bg-clip-text ">
            {testimonials[index]?.name}, {testimonials[index]?.company}
          </p> */}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
