import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="flex 0 items-center justify-center">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              Contact Information
            </h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />{" "}
                </div>
                <div className=" flex flex-col items-start">
                  <h4 className="font-medium "> Email</h4>
                  <p className="text-muted-foreground hover:text-primary transition-colors">
                    chauhanvaibhav13@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />{" "}
                </div>
                <div className="flex flex-col items-start">
                  <h4 className="font-medium"> Phone</h4>
                  <p className="text-muted-foreground hover:text-primary transition-colors">
                    +91 9760 558 652
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />{" "}
                </div>
                <div className="flex flex-col items-start">
                  <h4 className="font-medium"> Location</h4>
                  <p className="text-muted-foreground hover:text-primary transition-colors">
                    Noida, Uttarpradesh
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="www.linkedin.com/in/vaibhav-chauhan-23b998207"
                  target="_blank"
                >
                  <Linkedin />
                </a>
                <a href="https://github.com/vaibhavC1302/" target="_blank">
                  <Github />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
