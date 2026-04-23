import {
  ArrowGrowthIcon,
  BriefcaseIcon,
  BrushIcon,
  CodeIcon,
  GlobeIcon,
  LayoutIcon,
  MailIcon,
  MobileIcon,
  SearchIcon,
  SettingsIcon,
  ShieldIcon,
  SparkIcon,
  SupportIcon,
  TagIcon,
} from './icons';

export const whyChooseItems = [
  {
    title: 'Fast delivery',
    description: "We get your site live in record time without quality loss.",
    icon: SparkIcon,
    accent: 'bg-blue-50 text-blue-500',
  },
  {
    title: 'Affordable pricing',
    description: 'Premium results at prices that fit small business budgets.',
    icon: TagIcon,
    accent: 'bg-green-50 text-green-500',
  },
  {
    title: 'Modern design',
    description: 'Sleek, contemporary aesthetics that impress every visitor.',
    icon: BrushIcon,
    accent: 'bg-purple-50 text-purple-500',
  },
  {
    title: 'Mobile-friendly',
    description: 'Websites that look and work perfectly on every screen size.',
    icon: MobileIcon,
    accent: 'bg-orange-50 text-orange-500',
  },
  {
    title: 'Ongoing support',
    description: "We're always here to help as your business evolves.",
    icon: SupportIcon,
    accent: 'bg-rose-50 text-rose-500',
  },
];

export const serviceItems = [
  {
    title: 'Website Development',
    description:
      'Professional websites designed to represent your business and attract customers.',
    icon: CodeIcon,
  },
  {
    title: 'Business Websites',
    description:
      'Multi-page websites with all the information your customers need to know about you.',
    icon: LayoutIcon,
  },
  {
    title: 'Web Applications',
    description:
      'Custom solutions for booking, dynamic forms, and complex business workflows.',
    icon: BriefcaseIcon,
  },
  {
    title: 'Domain & Hosting',
    description:
      'We help you buy your domain and set up your website online with high reliability.',
    icon: GlobeIcon,
  },
  {
    title: 'Business Email Setup',
    description:
      'Get professional email addresses that build trust and strengthen your brand.',
    icon: MailIcon,
  },
  {
    title: 'Website Maintenance',
    description:
      'Ongoing support to keep your website updated, secure, and running smoothly.',
    icon: SettingsIcon,
  },
];

export const processSteps = [
  {
    number: '1',
    title: 'Share your requirement',
    description:
      "Tell us what you need for your business and we'll craft a plan.",
  },
  {
    number: '2',
    title: 'We design & build',
    description: 'We create your website with a modern and professional look.',
  },
  {
    number: '3',
    title: 'Launch your website',
    description:
      'Your website goes live and starts attracting customers instantly.',
  },
];

export const portfolioItems = [
  {
    title: 'Modern Restaurant Website',
    description:
      'Online booking, digital menu, and location services integrated.',
    tag: 'Hospitality',
    imageSrc:
      'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1200',
    imageAlt: 'Warm modern restaurant interior with tables and ambient lighting',
  },
  {
    title: 'Personal Portfolio',
    description:
      'Creative showcase for designers and freelance professionals.',
    tag: 'Personal Branding',
    imageSrc:
      'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200',
    imageAlt: 'Creative workspace with computer, desk, and design setup',
  },
  {
    title: 'Small Business Hub',
    description:
      'A complete informative site for a logistics and service firm.',
    tag: 'Corporate',
    imageSrc:
      'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200',
    imageAlt: 'Small business team working together in a modern office',
  },
];

export const technologyBenefits = [
  {
    title: 'Fast Performance',
    description: 'Your website loads quickly and runs smoothly.',
    icon: SparkIcon,
  },
  {
    title: 'Scalable Growth',
    description: 'Your website can grow as your business grows.',
    icon: ArrowGrowthIcon,
  },
  {
    title: 'SEO Ready',
    description: 'Designed to help your business get found online.',
    icon: SearchIcon,
  },
  {
    title: 'Easy Maintenance',
    description: 'Simple updates and future improvements made easy.',
    icon: ShieldIcon,
  },
];

export const testimonials = [
  {
    quote:
      'Very professional and quick delivery. Highly recommended for any small business looking to go digital.',
    name: 'Business Owner',
    role: 'Retail Store',
    initial: 'B',
  },
  {
    quote:
      'Clean design and great support throughout the process. They really understood my brand vision.',
    name: 'Entrepreneur',
    role: 'Tech Startup',
    initial: 'E',
  },
];

export const pricingPlans = [
  {
    name: 'Basic',
    price: '₹4,999+',
    description:
      'A clean starter website for small businesses that need a simple online presence.',
    features: [
      'Single-page website',
      'Mobile responsive design',
      'Contact section included',
    ],
  },
  {
    name: 'Standard',
    price: '₹9,999+',
    description:
      'A business-ready website with stronger structure, trust signals, and better lead flow.',
    features: [
      'Multi-section website',
      'WhatsApp + enquiry integration',
      'SEO-friendly structure',
    ],
    popular: true,
  },
  {
    name: 'Premium',
    price: '₹19,999+',
    description:
      'A more advanced website experience for brands that need scale, polish, and flexibility.',
    features: [
      'Custom UI sections',
      'Dynamic features or CMS support',
      'Priority support and launch help',
    ],
  },
];
