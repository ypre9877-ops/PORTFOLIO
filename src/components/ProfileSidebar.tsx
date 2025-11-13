import { Button } from "@/components/ui/button";
import { Facebook, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import profileAvatar from "@/assets/profile-avatar.jpg";

export const ProfileSidebar = () => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-80 bg-card border-r border-border p-8 flex flex-col items-center justify-between overflow-y-auto">
      <div className="flex flex-col items-center w-full">
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-1">Safiqul Islam</h1>
          <p className="text-muted-foreground text-center">Digital Marketing Specialist</p>
        </div>

        <div className="w-48 h-48 rounded-2xl overflow-hidden mb-6 border-4 border-primary/20">
          <img 
            src={profileAvatar} 
            alt="Safiqul Islam" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full space-y-3 text-sm mb-6">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Mail className="w-4 h-4 text-primary" />
            <a href="mailto:mislammollah@gmail.com" className="hover:text-primary transition-colors">
              mislammollah@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Phone className="w-4 h-4 text-primary" />
            <a href="tel:+8801815436699" className="hover:text-primary transition-colors">
              (+880) 01815436699
            </a>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4 text-primary" />
            <span>Narsingdi, Bangladesh</span>
          </div>
        </div>

        <div className="flex gap-3 mb-8">
          <a 
            href="https://facebook.com/shafiqula40" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a 
            href="https://linkedin.com/in/shafiqula40" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a 
            href="https://instagram.com/shafiqula40" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>

        <Button 
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <Mail className="w-4 h-4 mr-2" />
          Hire Me!
        </Button>
      </div>

      <div className="text-xs text-muted-foreground text-center">
        © 2025 Safiqul Islam. All Rights Reserved
      </div>
    </aside>
  );
};
