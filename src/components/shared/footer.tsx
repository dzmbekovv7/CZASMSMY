
import type { ReactNode } from 'react';

// Logo Component
function Logo({ variant = 'dark' }) {
  const isLight = variant === 'light';
  
  return (
    <div className="flex items-center gap-3">
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isLight ? 'bg-white' : 'bg-pink-500'} shadow-lg`}>
        <span className={`text-lg font-bold ${isLight ? 'text-pink-600' : 'text-white'}`} aria-hidden="true">
          🌸
        </span>
      </div>
      <div className="flex flex-col">
        <span className={`text-lg font-black ${isLight ? 'text-white' : 'text-pink-900'} leading-tight`}>
          CZASMSMY
        </span>
        <span className={`text-xs font-medium ${isLight ? 'text-pink-100' : 'text-pink-600'} leading-tight`}>
          Mom Time Wisdom
        </span>
      </div>
    </div>
  );
}

// Container Component
function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Footer() {
  const navigation = {
    main: [
      { name: 'Home', href: '/' },
      { name: 'About', href: '/about' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contacts', href: '/contacts' },
      { name: 'Privacy Policy', href: '/privacy-policy' },
    ],
   
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="relative bg-gradient-to-br from-pink-900 via-pink-800 to-pink-900 text-white overflow-hidden"
      role="contentinfo"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-pink-700/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-pink-700/20 rounded-full blur-3xl"></div>
      </div>

      <Container>
        {/* Main footer content */}
        <div className="relative z-10 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Brand section */}
            <div className="space-y-6">
              <Logo variant="light" />
              <p className="text-pink-100 text-sm leading-relaxed max-w-md">
                Empowering mothers with proven methods and wisdom from a resourceful woman. 
                <span className="font-semibold text-white">CZASMSMY</span> is your trusted companion 
                in the journey of modern motherhood.
              </p>
              
           
              
            </div>

            {/* Navigation */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white">Quick Links</h3>
              <nav aria-label="Footer navigation">
                <ul className="space-y-3">
                  {navigation.main.map((item) => (
                    <li key={item.name}>
                      <a 
                        href={item.href} 
                        className="text-pink-100 hover:text-white transition-colors duration-300 focus:outline-none focus:text-white focus:underline"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Newsletter signup */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white">Stay Connected</h3>
              <p className="text-pink-100 text-sm leading-relaxed">
                Get weekly wisdom and proven motherhood strategies delivered to your inbox.
              </p>
              
              <div className="space-y-3">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="w-full px-4 py-3 bg-pink-800/50 backdrop-blur-sm border border-pink-700/50 rounded-xl text-white placeholder-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => {
                    const email = (document.getElementById('email-address') as HTMLInputElement)?.value;
                    if (email) {
                      window.location.href = `/contacts?email=${encodeURIComponent(email)}`;
                    }
                  }}
                  className="w-full px-4 py-3 bg-pink-600 hover:bg-pink-500 text-white font-semibold rounded-xl transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-pink-900"
                >
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="relative z-10 border-t border-pink-700/50 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-pink-200 text-sm text-center sm:text-left">
              © {currentYear} CZASMSMY - Mom Time Has Arrived. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a 
                href="/privacy-policy" 
                className="text-pink-200 hover:text-white transition-colors duration-300 focus:outline-none focus:text-white focus:underline"
              >
                Privacy Policy
              </a>
              <a 
                href="/terms" 
                className="text-pink-200 hover:text-white transition-colors duration-300 focus:outline-none focus:text-white focus:underline"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </Container>

      {/* Performance and accessibility optimizations */}
      <style>{`
        /* Reduce motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          .hover\\:scale-110:hover,
          .group-hover\\:scale-110,
          .transition-all,
          .transition-colors,
          .transition-transform {
            transform: none;
            transition: none;
          }
        }
        
        /* High contrast mode support */
        @media (prefers-contrast: high) {
          .bg-pink-700\\/50 {
            background-color: rgba(190, 24, 93, 0.8);
          }
          
          .border-pink-700\\/50 {
            border-color: rgba(190, 24, 93, 0.8);
          }
        }
        
        /* Focus styles for better accessibility */
        input:focus-visible,
        button:focus-visible,
        a:focus-visible {
          outline: 2px solid #f472b6;
          outline-offset: 2px;
        }
        
        /* Optimize background blur for performance */
        .backdrop-blur-sm {
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
        }
      `}</style>
    </footer>
  );
}