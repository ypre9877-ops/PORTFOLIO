const skills = [
  { name: "Social Media Marketing", level: 95 },
  { name: "Facebook Ads & Instagram", level: 90 },
  { name: "Google Analytics & SEO", level: 85 },
  { name: "Content Strategy", level: 90 },
  { name: "MS Office Suite", level: 95 },
  { name: "Customer Service", level: 92 },
  { name: "YouTube Marketing", level: 88 },
  { name: "Digital Communication", level: 93 },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-8 py-20">
      <div className="max-w-4xl w-full">
        <div className="mb-12">
          <span className="inline-block px-4 py-2 rounded-full border border-primary/30 text-primary text-sm font-medium mb-6">
            SKILLS
          </span>
          <h2 className="text-5xl font-bold mb-6">
            My <span className="text-gradient">Advantages</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className="text-primary font-semibold">{skill.level}%</span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-primary to-emerald-400 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all">
            <div className="text-3xl font-bold text-gradient mb-2">150+</div>
            <div className="text-muted-foreground">Campaigns Managed</div>
          </div>
          <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all">
            <div className="text-3xl font-bold text-gradient mb-2">50+</div>
            <div className="text-muted-foreground">Happy Clients</div>
          </div>
          <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all">
            <div className="text-3xl font-bold text-gradient mb-2">10+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};
