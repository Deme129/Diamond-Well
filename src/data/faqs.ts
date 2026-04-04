export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: "Why do I have no water?",
    answer: "No water can be caused by several issues: a tripped breaker, a failed pressure switch, a burnt-out pump motor, or a water level issue in your well. We recommend checking your electrical panel first, then calling us for a professional diagnosis."
  },
  {
    question: "Why is my well pump running but no water is coming out?",
    answer: "This often indicates a 'loss of prime' or a broken pipe in the well. It could also mean the pump is worn out or the water level has dropped below the pump intake. Turn off the power to the pump immediately to prevent motor damage and call for service."
  },
  {
    question: "What causes low water pressure in a well system?",
    answer: "Common causes include a failing pressure tank, a clogged sediment filter, a partially closed valve, or a pump that is nearing the end of its life. We can test your system to find the exact cause and restore your pressure."
  },
  {
    question: "Can a bad pressure switch cause no water?",
    answer: "Yes, absolutely. The pressure switch tells the pump when to turn on. If the contacts are burnt or the switch is faulty, the pump will never receive the signal to start, resulting in no water at your faucets."
  },
  {
    question: "Why is there sand in my water?",
    answer: "Sand usually enters the system if the well screen is damaged, the pump is set too low in the well, or the well is being over-pumped. We can often fix this by adjusting the pump height or installing specialized filtration."
  },
  {
    question: "Do you service irrigation pumps?",
    answer: "Yes, we specialize in both residential well pumps and irrigation pumps. Whether it's a shallow well jet pump or a larger centrifugal pump for your sprinkler system, we can repair or replace it."
  },
  {
    question: "How fast can you come out?",
    answer: "We prioritize 'No Water' emergencies and typically offer same-day or next-day service throughout Volusia County. Our goal is to get your water back on as quickly as possible."
  },
  {
    question: "How do I know if I need pump repair or replacement?",
    answer: "Our technicians will always try to repair your pump if it's cost-effective and reliable. However, if the motor is burnt out or the pump is over 10-15 years old, replacement is often the better long-term value."
  }
];
