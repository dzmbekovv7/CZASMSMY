import { useState } from 'react';

// Contact Form Component
function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(''), 3000);
    }, 1000);
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {submitStatus === 'success' && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-xl" role="alert">
          <div className="flex items-center">
            <span className="text-green-500 mr-2" aria-hidden="true">✓</span>
            <p className="text-green-800 font-medium">Message sent successfully! We'll get back to you soon.</p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-pink-900 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-white border border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 text-pink-900 placeholder-pink-400"
            placeholder="Enter your full name"
            aria-describedby="name-error"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-pink-900 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-white border border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 text-pink-900 placeholder-pink-400"
            placeholder="Enter your email address"
            aria-describedby="email-error"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-semibold text-pink-900 mb-2">
          Subject *
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-white border border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 text-pink-900 placeholder-pink-400"
          placeholder="What's this about?"
          aria-describedby="subject-error"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-pink-900 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-3 bg-white border border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 text-pink-900 placeholder-pink-400 resize-none"
          placeholder="Share your thoughts, questions, or feedback..."
          aria-describedby="message-error"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="group relative w-full inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-pink-600 rounded-2xl shadow-lg hover:shadow-pink-500/25 transition-all duration-300 hover:scale-105 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:translate-y-0 overflow-hidden focus:outline-none focus:ring-4 focus:ring-pink-500/50"
        aria-describedby="submit-help"
      >
        <span className="absolute inset-0 bg-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
        <span className="relative flex items-center gap-3">
          {isSubmitting ? (
            <>
              <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending Message...
            </>
          ) : (
            <>
              Send Message
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </>
          )}
        </span>
      </button>
      <p id="submit-help" className="text-sm text-pink-600 text-center">
        We typically respond within 24 hours
      </p>
    </form>
  );
}

export function ContactsPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
        {/* Animated background elements - optimized for performance */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-pink-200/20 to-pink-300/20 rounded-full blur-3xl animate-pulse will-change-transform"></div>
          <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-gradient-to-tr from-pink-200/20 to-pink-300/20 rounded-full blur-3xl animate-pulse will-change-transform" style={{animationDelay: '1000ms'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-pink-200/10 to-pink-300/10 rounded-full blur-2xl animate-bounce will-change-transform"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            {/* Content Section */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-100 to-pink-200 rounded-full border border-pink-200/50 shadow-sm">
                  <span className="text-sm font-semibold text-pink-700 tracking-wide uppercase">
                    💌 Get In Touch
                  </span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-800 via-pink-900 to-pink-800 leading-tight">
                  Connect with
                  <br />
                  <span className="relative">
                    CZASMSMY
                    <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full transform -rotate-1"></div>
                  </span>
                </h1>
                
                <p className="text-xl sm:text-2xl text-pink-800 font-light leading-relaxed max-w-2xl">
                  Mom Time Has Arrived. Share your thoughts, questions, or feedback with us. 
                  <span className="font-semibold text-pink-900"> We'd love to hear from you</span> and 
                  support your journey in modern motherhood.
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
                <div className="group p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-pink-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-xl" aria-hidden="true">📧</span>
                  </div>
                  <h3 className="font-bold text-pink-900 text-lg mb-2">Email Support</h3>
                  <p className="text-pink-700 text-sm">Get personalized responses within 24 hours</p>
                </div>
                
                <div className="group p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-pink-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-xl" aria-hidden="true">💬</span>
                  </div>
                  <h3 className="font-bold text-pink-900 text-lg mb-2">Community Support</h3>
                  <p className="text-pink-700 text-sm">Join our motherhood wisdom community</p>
                </div>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="lg:col-span-5 relative">
              <div className="relative group">
                {/* Decorative elements */}
                <div className="absolute -inset-4 bg-gradient-to-r from-pink-400 to-pink-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full opacity-80 animate-bounce delay-500"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full opacity-60 animate-pulse delay-1000"></div>
                
                {/* Form container */}
                <div className="relative bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-2xl group-hover:shadow-pink-500/25 transition-all duration-500 border border-pink-200/50">
                  <div className="mb-6">
                    <h2 className="text-2xl font-black text-pink-900 mb-2">Send Us a Message</h2>
                    <p className="text-pink-700 text-sm">We're here to help and support your motherhood journey</p>
                  </div>
                  
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Contact Methods Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-pink-900 mb-4">
              Other Ways to Connect
            </h2>
            <p className="text-lg text-pink-700 max-w-2xl mx-auto">
              Choose the method that works best for you to get in touch with our team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* FAQ */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-2xl" aria-hidden="true">❓</span>
              </div>
              <h3 className="text-xl font-bold text-pink-900 mb-3">FAQ</h3>
              <p className="text-pink-700 text-sm mb-4">
                Find quick answers to common questions about motherhood strategies
              </p>
              <a
                href="/faq"
                className="inline-flex items-center text-pink-600 hover:text-pink-700 font-semibold text-sm transition-colors duration-300 focus:outline-none focus:underline"
              >
                Browse FAQ
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Blog */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-2xl" aria-hidden="true">📚</span>
              </div>
              <h3 className="text-xl font-bold text-pink-900 mb-3">Blog</h3>
              <p className="text-pink-700 text-sm mb-4">
                Explore our collection of proven methods and motherhood wisdom
              </p>
              <a
                href="/blog"
                className="inline-flex items-center text-pink-600 hover:text-pink-700 font-semibold text-sm transition-colors duration-300 focus:outline-none focus:underline"
              >
                Read Articles
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* About */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-2xl" aria-hidden="true">🌸</span>
              </div>
              <h3 className="text-xl font-bold text-pink-900 mb-3">About CZASMSMY</h3>
              <p className="text-pink-700 text-sm mb-4">
                Learn more about our mission and the resourceful woman behind it all
              </p>
              <a
                href="/about"
                className="inline-flex items-center text-pink-600 hover:text-pink-700 font-semibold text-sm transition-colors duration-300 focus:outline-none focus:underline"
              >
                Our Story
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Performance and Accessibility Optimizations */}
      <style>{`
        /* Critical CSS for performance */
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
          will-change: transform;
        }
        
        /* Performance optimizations */
        .will-change-transform {
          will-change: transform;
        }
        
        /* Optimize background blur for performance */
        .backdrop-blur-sm {
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
        }
        
        /* Reduce motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          .animate-pulse,
          .animate-bounce,
          .animate-float,
          .animate-spin {
            animation: none;
          }
          
          .hover\\:scale-105:hover,
          .hover\\:-translate-y-1:hover,
          .group-hover\\:scale-110,
          .group-hover\\:translate-x-1,
          .transition-all,
          .transition-colors,
          .transition-transform {
            transform: none;
            transition: none;
          }
        }
        
        /* High contrast mode support */
        @media (prefers-contrast: high) {
          .bg-pink-200\\/20 {
            background-color: rgba(251, 207, 232, 0.4);
          }
          
          .border-pink-200\\/50 {
            border-color: rgba(251, 207, 232, 0.8);
          }
          
          .text-pink-700 {
            color: rgb(162, 28, 175);
          }
        }
        
        /* Focus styles for better accessibility */
        input:focus-visible,
        textarea:focus-visible,
        button:focus-visible,
        a:focus-visible {
          outline: 2px solid #f472b6;
          outline-offset: 2px;
        }
        
        /* Optimize rendering */
        .transform {
          transform: translateZ(0);
        }
        
        /* Preload critical animations */
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .animate-bounce {
          animation: bounce 1s infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: .5; }
        }
        
        @keyframes bounce {
          0%, 100% {
            transform: translateY(-25%);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
          50% {
            transform: none;
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
        }
        
        /* Optimize text rendering */
        .font-black {
          font-weight: 900;
          text-rendering: optimizeLegibility;
        }
        
        /* Optimize images and media */
        img {
          max-width: 100%;
          height: auto;
        }
        
        /* Ensure proper contrast ratios for accessibility */
        .text-pink-400::placeholder {
          color: rgb(244, 114, 182);
          opacity: 0.7;
        }
      `}</style>
    </main>
  );
}