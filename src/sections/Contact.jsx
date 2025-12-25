import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };

  const contactMethods = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email",
      value: "prateekdoomroli@gmail.com",
      link: "mailto:prateekdoomroli@gmail.com",
      color: "from-cyan-500 to-blue-600"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
      title: "LinkedIn",
      value: "Connect with me",
      link: "https://www.linkedin.com/in/prateek-yadav-webdeveloper/",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      title: "GitHub",
      value: "View my code",
      link: "https://github.com/Prateek-yadav1",
      color: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section id="contact" className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl top-20 left-10 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl bottom-20 right-10 animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16" style={{animation: 'fadeInUp 0.6s ease-out'}}>
          <h2 className="text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I'm currently open for internships, freelance projects, and full-time opportunities. 
            Let's create something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact Form */}
          <div 
            className="space-y-6"
            style={{animation: 'fadeInUp 0.6s ease-out 0.2s both'}}
          >
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              
              <div className="space-y-5" onSubmit={handleSubmit}>
                {/* Name */}
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                    placeholder="xyz@example.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                    placeholder="Project Inquiry"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </button>

                {/* Success Message */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-500/10 border border-green-500/50 rounded-xl text-green-400 text-center animate-fadeIn">
                    ✓ Message sent successfully! I'll get back to you soon.
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right: Contact Info */}
          <div 
            className="space-y-6"
            style={{animation: 'fadeInUp 0.6s ease-out 0.4s both'}}
          >
            {/* Quick Contact Methods */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white">
                        {method.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="text-gray-400 text-sm mb-1">{method.title}</div>
                      <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                        {method.value}
                      </div>
                    </div>
                    <svg className="w-5 h-5 text-gray-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>

            {/* Availability Card */}
            <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-green-500/20 border-2 border-green-500 flex items-center justify-center flex-shrink-0">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Currently Available</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    I'm actively seeking opportunities for internships and full-time roles. 
                    Open to remote work and relocation.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-6">
                <div className="text-center p-3 bg-white/5 rounded-lg">
                  <div className="text-cyan-400 font-bold text-lg">2-3 days</div>
                  <div className="text-gray-500 text-xs">Response Time</div>
                </div>
                <div className="text-center p-3 bg-white/5 rounded-lg">
                  <div className="text-purple-400 font-bold text-lg">Remote</div>
                  <div className="text-gray-500 text-xs">Work Preference</div>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h4 className="text-lg font-semibold text-white">Based in</h4>
              </div>
              <p className="text-gray-400">Behror,Rajasthan,India</p>
              <p className="text-gray-500 text-sm mt-1">Available for remote work worldwide</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}