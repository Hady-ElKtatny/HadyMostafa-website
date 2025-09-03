import { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Send, Clock, MessageCircle, Calendar } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    setIsSubmitting(false);
    alert('Thank you for your message! I\'ll get back to you soon.');
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "hady.elktatny@gmail.com",
      description: "Send me an email anytime",
      href: "mailto:hady.elktatny@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+201142924668",
      description: "Call me during business hours",
      href: "tel:+201142924668"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Cairo, Egypt",
      description: "Available for local meetings",
      href: "#"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Response Time",
      value: "Within 24 hours",
      description: "I typically respond quickly",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-6 h-6" />,
      href: "https://www.linkedin.com/in/hady-mostafa-74h101156/",
      color: "bg-blue-600 hover:bg-blue-700"
    },
    {
      name: "GitHub",
      icon: <Github className="w-6 h-6" />,
      href: "https://github.com/",
      color: "bg-gray-800 hover:bg-gray-900"
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-6 h-6" />,
      href: "https://twitter.com/",
      color: "bg-blue-500 hover:bg-blue-600"
    }
  ];

  const quickMessages = [
    "I'd like to discuss a project opportunity",
    "I'm interested in collaboration",
    "I have a question about your work",
    "I'd like to schedule a meeting"
  ];

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you. 
            Let's create something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Get In Touch</h3>
              </div>

              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{info.title}</h4>
                      {info.href !== "#" ? (
                        <a href={info.href} className="text-blue-600 hover:text-blue-700 transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-700">{info.value}</p>
                      )}
                      <p className="text-sm text-gray-500">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="border-t border-gray-200 pt-6">
                <h4 className="font-semibold text-gray-900 mb-4">Follow Me</h4>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-lg flex items-center justify-center text-white transition-colors ${social.color}`}
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Message Templates */}
              <div className="mt-8 border-t border-gray-200 pt-6">
                <h4 className="font-semibold text-gray-900 mb-4">Quick Messages</h4>
                <div className="space-y-2">
                  {quickMessages.map((message, index) => (
                    <button
                      key={index}
                      onClick={() => setFormData(prev => ({ ...prev, subject: message }))}
                      className="w-full text-left text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 p-2 rounded transition-colors"
                    >
                      "{message}"
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    required
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project, idea, or just say hello..."
                    required
                    rows={6}
                    className="w-full resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      Send Message
                    </div>
                  )}
                </Button>
              </form>

              {/* Contact Form Footer */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  * Required fields. I respect your privacy and will never share your information.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Contact Options */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Prefer Other Ways to Connect?</h3>
            <p className="text-gray-600 mb-6">
              I'm active on various platforms and always open to new connections and opportunities.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Schedule a Call</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Book a 30-minute discovery call to discuss your project
                </p>
                <Button variant="outline" size="sm">
                  Book Meeting
                </Button>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <MessageCircle className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">WhatsApp</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Send me a quick message on WhatsApp
                </p>
                <Button variant="outline" size="sm">
                  Chat Now
                </Button>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <Linkedin className="w-8 h-8 text-blue-700 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">LinkedIn</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Connect with me professionally on LinkedIn
                </p>
                <Button variant="outline" size="sm">
                  Connect
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}