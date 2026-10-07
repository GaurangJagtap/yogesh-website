export interface PrincipalContact {
  id: string;
  name: string;
  role: string;
  category: string;
  bio: string;
  image: string;
}

export const companyInformation = {
  legalName: "ENTRABALANCE GLOBAL LLP",
  shortName: "ENTRABALANCE GLOBAL",
  brandMark: "EG",
  llpin: "ACF-4900",
  incorporationDate: "February 12, 2024",
  incorporationYear: "2024",
  entityType: "Limited Liability Partnership (LLP)",
  principalContacts: [
    {
      name: "Yogeshwar Kale",
      role: "Principal Contact"
    },
    {
      name: "Shubham Agarwal",
      role: "Principal Contact"
    }
  ],
  tagline: "Accounting Operations. Financial Accuracy. Better Business Processes.",
  positioning: "Supporting businesses with accounting operations, transaction processing, financial reporting, payroll support, audit support, reconciliations, and process improvement."
};

export const leadershipData: PrincipalContact[] = [
  {
    id: "contact-1",
    name: "Yogeshwar Kale",
    role: "Principal Contact",
    category: "Designated Leadership",
    bio: "Principal contact at ENTRABALANCE GLOBAL LLP, coordinating client engagements across accounting operations, financial controls, and specialist accounting workflows.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "contact-2",
    name: "Shubham Agarwal",
    role: "Principal Contact",
    category: "Designated Leadership",
    bio: "Principal contact at ENTRABALANCE GLOBAL LLP, supporting client mandates across transaction processing, period-end reviews, and accounting process improvement.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800"
  }
];
