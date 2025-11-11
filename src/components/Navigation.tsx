import { Home, User, Briefcase, Award, Mail } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  { id: "home", icon: Home, label: "Home" },
  { id: "about", icon: User, label: "About" },
  { id: "resume", icon: Briefcase, label: "Resume" },
  { id: "skills", icon: Award, label: "Skills" },
  { id: "contact", icon: Mail, label: "Contact" },
];

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
      <div className="flex flex-col gap-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`group relative w-12 h-12 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                isActive 
                  ? "bg-primary border-primary" 
                  : "bg-background/50 backdrop-blur-sm border-border hover:border-primary"
              }`}
              aria-label={item.label}
            >
              <Icon className={`w-5 h-5 transition-colors ${isActive ? "text-primary-foreground" : "text-muted-foreground group-hover:text-primary"}`} />
              <span className="absolute right-16 whitespace-nowrap bg-card border border-border px-3 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};