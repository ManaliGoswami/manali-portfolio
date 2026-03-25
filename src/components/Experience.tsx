"use client";
import { motion } from "framer-motion";

const EXPERIENCE = [
  {
    role: "Associate Consultant (Customer Success)",
    company: "StudyIn India",
    date: "Jul 2021 – Aug 2023",
    location: "Jaipur",
    bullets: [
      "Served as the main point of contact for 400+ clients, maintaining a 100% retention rate.",
      "Identified upsell opportunities across the existing client base, contributing to measurable revenue growth.",
      "Delivered data-driven university recommendations, matching clients with 5–10 curated options based on their profile.",
      "Managed end-to-end application lifecycles via university portals, ensuring 100% document accuracy and deadline compliance.",
      "Achieved 2022 intake cycle enrollment targets at 100% through proactive pipeline management.",
      "Tracked lead progress and conversion rates in Salesforce and Google Sheets, maintaining high data integrity for senior leadership.",
      "Used Jira and Trello to resolve process bottlenecks and keep internal workflows organised.",
      "Identified at-risk clients early, maintaining a near-zero dissatisfaction rate through tailored solutions.",
      "Presented weekly KPI and intake closing reports to leadership, translating CRM data into clear business insights.",
      "Collaborated with engineering teams to resolve platform issues, reducing friction in the student onboarding lifecycle.",
    ]
  },
  {
    role: "Consultant & Coordinator",
    company: "KMINDZ Advisory Services",
    date: "Sep 2020 – Jul 2021",
    location: "Jaipur",
    bullets: [
      "Built and managed a high-volume pipeline for IELTS course enrollments, consistently meeting monthly targets for exam registrations and student intakes.",
      "Acted as the primary communication bridge between the local branch and HQ to ensure all operational goals and office standards were met.",
      "Maintained strict data integrity by managing all student records and enrollment progress through Google Sheets and internal tracking systems.",
      "Developed ROI-based proposals for clients by analysing success rates and market data to justify service investments.",
      "Managed the internal escalation process, transitioning students from language training to senior consultants for international university enrollment in the UK and Canada.",
      "Assisted in the technical recruitment process by shortlisting candidate profiles for SaaS, Marketing, and Tech companies based on specific job requirements.",
    ]
  },
  {
    role: "Overseas Education Counselor",
    company: "Meridean Overseas Education",
    date: "Dec 2018 – Sep 2020",
    location: "Rajasthan",
    bullets: [
      "Collaborated directly with the marketing team to align communication strategies with intake cycles, university deadlines, and eligibility updates.",
      "Managed high-volume student data and application workflows using Google Sheets, maintaining 100% accuracy throughout the lead-to-enrollment funnel.",
      "Organised and facilitated 10+ on-site events with university representatives to strengthen institutional partnerships.",
      "Reported directly to the Director in daily strategic briefings, providing real-time updates on pipeline status and revenue impact.",
      "Drove process improvements in the lead-to-enrollment pipeline by identifying opportunities for better data management and client communication.",
    ]
  }
];

const EDUCATION = [
  {
    degree: "B.Tech in Computer Science",
    institution: "Jaipur Engineering College (JECRC)",
    date: "2015 – 2018"
  },
  {
    degree: "Diploma in Computer Science",
    institution: "Jodhpur National University, India",
    date: "2013 – 2015"
  }
];

const SKILLS = [
  "Customer Success Management",
  "Net Revenue Retention (NRR) & Churn Mitigation",
  "End-to-End Pipeline Management",
  "Salesforce & CRM Hygiene",
  "Onboarding & Implementation",
  "KPI Ownership & Reporting",
  "Jira & Agile Workflows",
  "Cross-Functional Collaboration",
  "Stakeholder Relationship Management",
  "Escalation Management",
  "Customer Lifecycle Mapping",
  "Data Integrity & Analysis (Google Sheets)",
  "QBRs & Cadence Calls",
];

const CERTIFICATIONS = [
  "Agile Fundamentals",
  "Prompt Design in Vertex AI",
  "AI Fluency Framework & Foundations",
  "Generative AI Mastermind",
  "IT Professional Fundamentals: Networking"
];

export default function Experience() {
  return (
    <section className="relative z-20 w-full bg-[#121212] py-24 px-6 md:px-12 lg:px-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Experience Section */}
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-12 text-white tracking-tight"
          >
            Experience.
          </motion.h2>
          
          <div className="space-y-12">
            {EXPERIENCE.map((exp, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-8 border-l border-white/10"
              >
                <div className="absolute w-3 h-3 bg-white rounded-full -left-[6.5px] top-2 shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                <h4 className="text-base text-neutral-400 mt-1">{exp.company}</h4>
                <p className="text-xs font-medium tracking-widest text-neutral-500 uppercase mt-2">
                  {exp.date} &bull; {exp.location}
                </p>
                {exp.bullets.length > 0 && (
                  <ul className="mt-4 space-y-2">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-neutral-400 leading-relaxed">
                        <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-neutral-500 flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education, Skills & Certifications */}
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-12 text-white tracking-tight"
          >
            Education & Skills.
          </motion.h2>

          <div className="mb-10 flex flex-col gap-4">
            {EDUCATION.map((edu, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm shadow-xl hover:bg-white/10 transition-colors cursor-pointer"
              >
                <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                <h4 className="text-lg text-neutral-300">{edu.institution}</h4>
                <p className="text-sm font-medium tracking-widest text-[#a0a0a0] uppercase mt-4">
                  {edu.date}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-bold text-white mb-6">Key Competencies</h3>
            <div className="flex flex-wrap gap-3">
              {SKILLS.map((skill, i) => (
                <motion.span 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="px-4 py-2 border border-white/20 rounded-full text-sm backdrop-blur-md bg-white/5 text-neutral-200"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>

          <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-white/5 shadow-inner">
            <h3 className="text-2xl font-bold text-white mb-6">Certifications</h3>
            <ul className="space-y-4">
              {CERTIFICATIONS.map((cert, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center text-neutral-400 text-sm hover:text-white transition-colors"
                >
                  <span className="w-2 h-2 bg-gradient-to-r from-neutral-200 to-neutral-600 rounded-full mr-4 flex-shrink-0" />
                  {cert}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
