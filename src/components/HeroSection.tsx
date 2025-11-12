import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-8 animate-fade-in"
    >
      <div
        className="max-w-4xl w-full bg-card border border-primary/30 rounded-xl p-12 
      transition-all duration-300 hover:border-primary hover:shadow-[0_0_25px_rgba(0,255,150,0.15)] hover:-translate-y-1"
      >
        {/* ✅ Intro Tag */}
        <div className="mb-6">
          <span className="inline-block px-4 py-2 rounded-full border border-primary/30 text-primary text-sm font-medium">
            INTRODUCE
          </span>
        </div>

        {/* ✅ Heading */}
        <h1 className="text-5xl font-bold leading-tight mb-6">
          Hi This is <span className="text-gradient">SAFIQUL ISLAM</span>,<br />
          Digital Marketing and Social Media Specialist.
        </h1>

        {/* ✅ Description */}
        <p className="text-lg text-muted-foreground mb-10 max-w-2xl">
          I specialize in social media marketing, content strategy, and helping
          businesses grow their online presence. Passionate about creating
          engaging digital experiences that drive results.
        </p>

        {/* ✅ Two Separate Boxes for Stats */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-10">
          {/* Box 1 */}
          <div
            className="flex flex-col items-center justify-center bg-card border border-primary/30 rounded-xl px-10 py-6 
          transition-all duration-300 hover:border-primary hover:shadow-[0_0_25px_rgba(0,255,150,0.25)] hover:-translate-y-1"
          >
            <div className="text-5xl font-semibold text-primary mb-1">10+</div>
            <div className="text-xs text-muted-foreground uppercase tracking-wide text-center">
              Years of Experience in different field
            </div>
          </div>

          {/* Box 2 */}
          <div
            className="flex flex-col items-center justify-center bg-card border border-primary/30 rounded-xl px-10 py-6 
          transition-all duration-300 hover:border-primary hover:shadow-[0_0_25px_rgba(0,255,150,0.25)] hover:-translate-y-1"
          >
            <div className="text-5xl font-semibold text-primary mb-1">50+</div>
            <div className="text-xs text-muted-foreground uppercase tracking-wide text-center">
              Projects Completed Worldwide
            </div>
          </div>
        </div>

        {/* ✅ Scroll Button */}
        <div className="flex justify-center mt-10">
          <button
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group flex items-center justify-center w-14 h-14 rounded-full border border-primary/30 hover:border-primary transition cursor-pointer"
          >
            <ArrowDown className="w-6 h-6 text-primary group-hover:text-primary transition-colors" />
          </button>
        </div>
      </div>
    </section>
  );
};
