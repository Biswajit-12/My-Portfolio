import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import { cn } from "../lib/utils";
import { useToast } from "../hooks/use-toast";
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
    <section id="contact" className="py-30 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or collaborate? Feel free to reach out. I'm
          always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-15">
          <div className="space-y-15">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-10 pl-5 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Email</h4>
                  <a
                    href="mailto:biswajitmohapatra2002@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    biswajitmohapatra2002@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />{" "}
                </div>
                <div className="pl-6">
                  <h4 className="font-medium"> Phone</h4>
                  <a
                    href="tel:+917377993370"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 7377993370
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Bhubaneswar, Odisha, India
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4> Connect With Me</h4>
              <div className="flex space-x-4 justify-center p-3">
                <a
                  href="https://www.linkedin.com/in/biswajit12/"
                  target="_blank"
                >
                  <Linkedin />
                </a>
                <a href="" target="_blank">
                  <Facebook />
                </a>
                <a href="" target="_blank">
                  <Twitter />
                </a>
                <a href="" target="_blank">
                  <Instagram />
                </a>
              </div>
            </div>
          </div>

          <div
            className="bg-card p-6 rounded-lg shadow-xs"
            onSubmit={handleSubmit}
          >
            <h3 className="text-2xl mb-6 font-semibold">Send a Message</h3>
            <form action="" className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="font-medium mb-2 block text-sm"
                >
                  {" "}
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Biswajit Mohapatra..."
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="font-medium mb-2 block text-sm"
                >
                  {" "}
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="biswajit@gmail.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="font-medium mb-2 block text-sm"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
