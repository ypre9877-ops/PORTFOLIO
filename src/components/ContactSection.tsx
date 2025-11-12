import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formDataToSend = new FormData(form);

    try {
      // Send form data to Netlify
      await fetch("/", {
        method: "POST",
        body: formDataToSend,
      });

      toast.success("✅ Message sent! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-8 py-20"
    >
      <div className="max-w-4xl w-full">
        {/* Section Header */}
        <div className="mb-12">
          <span className="inline-block px-4 py-2 rounded-full border border-primary/30 text-primary text-sm font-medium mb-6">
            CONTACT
          </span>
          <h2 className="text-5xl font-bold mb-6">
            Let's work <span className="text-gradient">together!</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground mb-8">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>

            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-start gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-medium mb-1">Email</div>
                  <a
                    href="mailto:mislammollah@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    mislammollah@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-medium mb-1">Phone</div>
                  <a
                    href="tel:+8801815436699"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    (+880) 01815436699
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-medium mb-1">Location</div>
                  <div className="text-muted-foreground">
                    Narsingdi, Bangladesh
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* 🔒 Hidden field for Netlify */}
            <input type="hidden" name="form-name" value="contact" />

            <Input
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
              className="bg-card border-border focus:border-primary"
            />

            <Input
              type="email"
              placeholder="Your Email"
              name="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
              className="bg-card border-border focus:border-primary"
            />

            <Textarea
              placeholder="Your Message"
              name="message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
              rows={6}
              className="bg-card border-border focus:border-primary resize-none"
            />

            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
