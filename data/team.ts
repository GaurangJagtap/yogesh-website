export interface PrincipalContact {
  id: string;
  name: string;
  role: string;
  category: string;
  bio: string;
  image: string;
  linkedin?: string;
  phone?: string;
  whatsappUrl?: string;
}

export const companyInformation = {
  legalName: "ENTRABALANCE GLOBAL LLP",
  shortName: "ENTRABALANCE GLOBAL",
  brandMark: "EG",
  llpin: "ACF-4900",
  incorporationDate: "2019",
  incorporationYear: "2019",
  experienceYears: "5+ Years",
  clientsServed: "100+ Satisfied Clients",
  satisfactionRate: "100%",
  entityType: "Limited Liability Partnership (LLP)",
  whatsappNumber: "+91 89996 00315",
  whatsappRaw: "918999600315",
  whatsappUrl: "https://wa.me/918999600315?text=Hello%20Yogeshwar,%20I%20would%20like%20to%20enquire%20about%20your%20accounting%20and%20financial%20operations%20services.",
  linkedinUrl: "https://www.linkedin.com/in/yogeshwar-kale-b7b61a1ba?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  principalContacts: [
    {
      name: "Yogeshwar Kale",
      role: "Managing Director & Co-Founder",
      phone: "+91 89996 00315",
      whatsappUrl: "https://wa.me/918999600315?text=Hello%20Yogeshwar,%20I%20would%20like%20to%20enquire%20about%20your%20accounting%20and%20financial%20operations%20services.",
      linkedin: "https://www.linkedin.com/in/yogeshwar-kale-b7b61a1ba?utm_source=share_via&utm_content=profile&utm_medium=member_android"
    },
    {
      name: "Shubham Agarwal",
      role: "Co-Founder & Principal Partner"
    }
  ],
  tagline: "Accounting Operations. Financial Accuracy. Better Business Processes.",
  positioning: "Supporting businesses across US, UK & India with 5+ years of trusted accounting operations, transaction processing, financial reporting, and process improvement."
};

export const leadershipData: PrincipalContact[] = [
  {
    id: "contact-1",
    name: "Yogeshwar Kale",
    role: "Managing Director & Co-Founder",
    category: "Designated Leadership",
    bio: "Managing Director & Founder with 5+ years of demonstrated excellence leading accounting, taxation, and financial operations across the US, UK, and India, delivering a 100% client satisfaction track record across 100+ satisfied corporate clients.",
    image: "/yogeshwar-kale.jpg",
    linkedin: "https://www.linkedin.com/in/yogeshwar-kale-b7b61a1ba?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    phone: "+91 89996 00315",
    whatsappUrl: "https://wa.me/918999600315?text=Hello%20Yogeshwar,%20I%20would%20like%20to%20enquire%20about%20your%20accounting%20and%20financial%20operations%20services."
  },
  {
    id: "contact-2",
    name: "Shubham Agarwal",
    role: "Co-Founder & Principal Partner",
    category: "Designated Leadership",
    bio: "Co-Founder and principal partner supporting client mandates across transaction processing, accounting controls, period-end financial tie-outs, and disciplined workflow improvements.",
    image: ""
  }
];
