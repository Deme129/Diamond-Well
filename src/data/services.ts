export interface Service {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  features: string[];
  benefits: string[];
}

export const services: Service[] = [
  {
    id: 'well-pump-repair',
    title: 'Well Pump Repair',
    slug: 'well-pump-repair',
    shortDescription: 'Fast diagnosis and repair for all types of well pumps to get your water flowing again.',
    fullDescription: 'If you have no water or low pressure, your well pump might be the culprit. We specialize in diagnosing and repairing all major brands and types of well pumps, including submersible and jet pumps. Our goal is to provide a fast, cost-effective solution that restores your water system quickly.',
    icon: 'Wrench',
    features: ['Submersible pump repair', 'Jet pump troubleshooting', 'Motor replacement', 'Control box repair'],
    benefits: ['Restore water flow fast', 'Avoid unnecessary replacements', 'Expert troubleshooting', 'Local Volusia County service']
  },
  {
    id: 'well-pump-replacement',
    title: 'Well Pump Replacement',
    slug: 'well-pump-replacement',
    shortDescription: 'Professional installation of high-quality, reliable well pumps when repair is not an option.',
    fullDescription: 'When a pump is beyond repair or nearing the end of its lifespan, a professional replacement is the best long-term solution. We install premium, high-efficiency pumps designed for Florida\'s specific well conditions, ensuring years of reliable service.',
    icon: 'ArrowRightLeft',
    features: ['High-efficiency pump options', 'Professional installation', 'System sizing and matching', 'Old pump removal and disposal'],
    benefits: ['Long-term reliability', 'Improved water pressure', 'Energy savings', 'Peace of mind']
  },
  {
    id: 'pressure-tank-service',
    title: 'Pressure Tank Service',
    slug: 'pressure-tank-service',
    shortDescription: 'Repair and replacement of pressure tanks to ensure consistent water pressure and pump longevity.',
    fullDescription: 'A failing pressure tank can cause your pump to "short cycle," leading to premature motor failure and inconsistent water pressure. We test, repair, and replace pressure tanks to keep your system balanced and efficient.',
    icon: 'Database',
    features: ['Tank pressure testing', 'Bladder replacement', 'New tank installation', 'System balancing'],
    benefits: ['Consistent water pressure', 'Extends pump life', 'Reduces energy usage', 'Prevents system damage']
  },
  {
    id: 'pressure-switch-replacement',
    title: 'Pressure Switch Replacement',
    slug: 'pressure-switch-replacement',
    shortDescription: 'Expert replacement of faulty pressure switches to restore proper system operation.',
    fullDescription: 'The pressure switch is the "brain" of your well system. If it fails, your pump won\'t know when to turn on or off. We provide fast replacement of worn or burnt-out switches to get your system back in sync.',
    icon: 'ToggleRight',
    features: ['Switch testing and adjustment', 'Heavy-duty switch options', 'Wiring inspection', 'Contact cleaning'],
    benefits: ['Reliable pump operation', 'Prevents pump burn-out', 'Accurate pressure control', 'Quick, affordable fix']
  },
  {
    id: 'well-system-troubleshooting',
    title: 'Well System Troubleshooting',
    slug: 'well-system-troubleshooting',
    shortDescription: 'Comprehensive diagnosis of complex well and water system issues.',
    fullDescription: 'Not sure why your water isn\'t working? Our expert technicians use advanced diagnostic tools to find the root cause of any well system problem, from electrical issues to mechanical failures.',
    icon: 'Search',
    features: ['Electrical testing', 'Mechanical inspection', 'Flow testing', 'Water level analysis'],
    benefits: ['Find the real problem', 'Save money on wrong parts', 'Expert second opinions', 'Clear, honest answers']
  },
  {
    id: 'low-water-pressure-diagnosis',
    title: 'Low Water Pressure Diagnosis',
    slug: 'low-water-pressure-diagnosis',
    shortDescription: 'Identifying and fixing the causes of frustrating low water pressure in your home.',
    fullDescription: 'Low water pressure can be caused by many factors, including clogged filters, failing pumps, or leaking pipes. We perform a full system check to identify the bottleneck and restore your home\'s water pressure.',
    icon: 'Droplets',
    features: ['Pressure testing', 'Filter inspection', 'Pipe leak detection', 'Pump performance check'],
    benefits: ['Stronger showers', 'Faster appliance filling', 'Identify hidden leaks', 'Improved system efficiency']
  },
  {
    id: 'sand-in-water',
    title: 'Sand in Water / Sandy Wells',
    slug: 'sand-in-water',
    shortDescription: 'Solutions for sand and sediment issues that damage your plumbing and appliances.',
    fullDescription: 'Sand in your water is more than just a nuisance; it can ruin your pump, faucets, and appliances. We offer specialized solutions for sandy wells, including screen cleaning, sediment filters, and pump height adjustments.',
    icon: 'Filter',
    features: ['Sediment filtration systems', 'Pump height adjustment', 'Well screen cleaning', 'System flushing'],
    benefits: ['Protect your plumbing', 'Clean, clear water', 'Extend appliance life', 'Reduce wear on pump']
  },
  {
    id: 'irrigation-pump-service',
    title: 'Irrigation Pump Service',
    slug: 'irrigation-pump-service',
    shortDescription: 'Repair and maintenance for irrigation pumps to keep your Florida landscape green.',
    fullDescription: 'A broken irrigation pump means a dying lawn. We provide fast repair and replacement for all types of irrigation pumps, ensuring your sprinklers have the pressure they need to cover your entire property.',
    icon: 'Sprout',
    features: ['Centrifugal pump repair', 'Self-priming pump service', 'Check valve replacement', 'Intake line repair'],
    benefits: ['Keep your lawn green', 'Save your landscape investment', 'Reliable sprinkler operation', 'Efficient water usage']
  },
  {
    id: 'shallow-well-service',
    title: 'Shallow Well Service',
    slug: 'shallow-well-service',
    shortDescription: 'Specialized service for shallow wells common in coastal and rural Volusia County.',
    fullDescription: 'Shallow wells require specific knowledge and equipment. We understand the unique challenges of Florida\'s shallow aquifers and provide expert service for these systems, including point replacement and re-priming.',
    icon: 'Waves',
    features: ['Well point replacement', 'Re-priming services', 'Check valve service', 'Suction line repair'],
    benefits: ['Expert local knowledge', 'Cost-effective solutions', 'Reliable shallow water access', 'Fast response']
  }
];
