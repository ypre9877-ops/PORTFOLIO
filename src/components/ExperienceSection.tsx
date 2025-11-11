import { Briefcase, GraduationCap, Monitor, Users, BookOpen, Award, FactoryIcon, HeadsetIcon } from "lucide-react";

const education = [
  {
    icon: GraduationCap,
    degree: "Bachelor of Social Science (BSS)",
    institution: "National University, Bangladesh",
    period: "2011 - 2015",
    description: "Graduated with a degree in Social Sciences, developing strong analytical and communication skills.",
  },
  {
    icon: BookOpen,
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Madhabdi College, Narsingdi",
    period: "2008 - 2010",
    description: "Completed higher secondary education with strong academic performance.",
  },
  {
    icon: BookOpen,
    degree: "Secondary School Certificate (SSC)",
    institution: "Kamrabo High School, Narsingdi",
    period: "2006 - 2008",
    description: "Completed secondary education with strong academic performance.",
  },
 
];

const certificates = [
  {
    name: "Facebook Ads & Marketing",
    issuer: "Facebook Blueprint",
    year: "2020",
  },
  
  {
    name: "Social Media Marketing",
    issuer: "Dreamland It Academy",
    year: "2025",
  },
  {
    name: "Refreegeration & Air Conditioning",
    issuer: "Bangladesh Industrial Technical Assistance Center (BITAC)",
    year: "2014",
  },
  {
    name: "Computer office Application and fundamental",
    issuer: "Narsingdi Technical Training Center",
    year: "2009",
  },
  {
    name: "Organizational Behavior",
    issuer: "Sudarban Courier Service Pvt Ltd",
    year: "2024",
  },
];

const experiences = [
  {
    icon: HeadsetIcon,
    title: "Social Media Specialist",
    company: "Self-Employed (Freelance)",
    period: "Aug 2020 - Present",
    description: [
      "Developed and executed result-driven digital marketing strategies for clients across various industries",
      "Specialized in Facebook Ads, Instagram Promotions, and YouTube Marketing",
      "Created and managed engaging social media content to grow organic reach",
      "Provided SEO optimization and website traffic growth strategies",
    ],
  },
  {
    icon: Users,
    title: "Booking Assistant",
    company: "Sundarban Courier Service Pvt Ltd",
    period: "Aug 2018 - Present",
    description: [
      "Managed booking operations and customer service",
      "Coordinated with transportation and courier departments",
      "Ensured efficient service delivery and customer satisfaction",
    ],
  },
  {
    icon: Monitor,
    title: "Computer Instructor",
    company: "Rasel Computer Training and Internet Service",
    period: "Jun 2015 - Jul 2017",
    description: [
      "Conducted training sessions on basic computing, MS Office, and programming",
      "Prepared lesson plans, practical exercises, and assessments",
      "Guided students in developing technical skills",
      "Monitored student progress and provided feedback",
    ],
  },
  {
    icon: GraduationCap,
    title: "Guest Teacher",
    company: "Kamrabo High School",
    period: "Jul 2014 - Nov 2015",
    description: [
      "Delivered lessons in various subjects following school curriculum",
      "Maintained classroom discipline and positive learning environment",
      "Supported students with academic and behavioral guidance",
    ],
  },
   {
    icon: FactoryIcon,
    title: "Receptionist",
    company: "Feborbed t",
    period: "Jul 2014 - Nov 2015",
    description: [
      " Welcomed and assisted guests, clients, and visitors in a friendly and professional manner",
      " Answered phone calls, emails, and inquiries, providing accurate information and support",
      " Managed appointment scheduling, meeting arrangements, and room reservations",
      "  Handled check-in and check-out procedures efficiently (for hotels/offices as applicable)",
    ],
  },
 
];

export const ExperienceSection = () => {
  return (
    <section id="resume" className="min-h-screen flex items-center justify-center px-8 py-20">
      <div className="max-w-4xl w-full">
        <div className="mb-12">
          <span className="inline-block px-4 py-2 rounded-full border border-primary/30 text-primary text-sm font-medium mb-6">
            RESUME
          </span>
          <h2 className="text-5xl font-bold mb-6">
            Education & 
            <span className="text-gradient">Experience</span>
          </h2>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold mb-8 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-primary" />
            </div>
            Education
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => {
              const Icon = edu.icon;
              return (
                <div 
                  key={index} 
                  className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">{edu.degree}</h4>
                      <p className="text-primary text-sm font-medium mb-2">{edu.institution}</p>
                      <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded-full inline-block mb-2">
                        {edu.period}
                      </span>
                      <p className="text-sm text-muted-foreground">{edu.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Certificates Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold mb-8 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Award className="w-6 h-6 text-primary" />
            </div>
            Professional Certificates
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certificates.map((cert, index) => (
              <div 
                key={index} 
                className="bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Award className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm mb-1">{cert.name}</h4>
                    <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                    <span className="text-xs text-primary font-medium">{cert.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div>
          <h3 className="text-3xl font-semibold mb-8 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-primary" />
            </div>
            Work Experience
          </h3>
          <div className="space-y-6">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <div 
                  key={index} 
                  className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <div>
                          <h4 className="font-semibold mb-1">{exp.title}</h4>
                          <p className="text-primary text-sm font-medium">{exp.company}</p>
                        </div>
                        <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded-full">
                          {exp.period}
                        </span>
                      </div>
                      <ul className="space-y-1">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-0.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};