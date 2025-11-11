export const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-8 py-20">
      <div className="max-w-4xl">
        <div className="mb-12">
          <span className="inline-block px-4 py-2 rounded-full border border-primary/30 text-primary text-sm font-medium mb-6">
            ABOUT
          </span>
          <h2 className="text-5xl font-bold mb-6">
            Every great design begin with<br />
            an even <span className="text-gradient">better story</span>
          </h2>
        </div>

        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            I am a motivated and adaptable professional from Bangladesh with diverse experience in customer service, 
            administration, education, and digital marketing. Over the years, I have successfully worked in various 
            roles including Receptionist, Booking Assistant, Social Media Specialist, Computer Instructor, and Guest Teacher.
          </p>
          
          <p>
            My strong communication skills, organizational abilities, and dedication to quality service allow me to 
            perform efficiently in both office and client-facing environments. With a Bachelor's degree in Social Sciences 
            and advanced digital and administrative skills, I am proficient in MS Office, online communication tools, and 
            marketing platforms such as Facebook Ads and Google Analytics.
          </p>

          <p>
            I am passionate about continuous learning and self-development, particularly in the areas of technology, 
            communication, and customer engagement. My goal is to contribute to a dynamic organization where I can 
            utilize my skills, gain new experience, and deliver excellent service to clients and colleagues alike.
          </p>
        </div>
      </div>
    </section>
  );
};