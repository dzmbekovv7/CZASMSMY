import { useGetArticles } from '@/hooks/useArticles'
import { Link } from 'react-router'
import type { ReactNode } from 'react'

// Logo Component matching the footer design
function Logo({ variant = 'dark' }) {
  const isLight = variant === 'light'
  
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
  )
}

// Container Component
function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  )
}

const LINKS = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Blog',
    href: '/blog',
  },
  {
    label: 'Contacts',
    href: '/contacts',
  },
]

export function Header() {
  const { data: articles, isLoading } = useGetArticles()
  const types = [...new Set(articles?.map(article => article.type))]

  return (
    <header 
      className="relative bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 border-b border-pink-200/50 overflow-hidden"
      role="banner"
      aria-label="Main navigation"
    >
      {/* Subtle background decoration for performance */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-20 -right-20 w-32 h-32 bg-pink-200/10 rounded-full blur-2xl"></div>
        <div className="absolute -top-10 -left-20 w-24 h-24 bg-pink-200/10 rounded-full blur-2xl"></div>
      </div>
      
      <Container>
        <div className="relative z-10 py-6">
          <div className="flex flex-col items-center space-y-6">
            {/* Logo Section */}
            <Link 
              to="/" 
              className="focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-pink-50 rounded-xl"
              aria-label="CZASMSMY - Go to homepage"
            >
              <Logo />
            </Link>
            
            {/* Tagline */}
            <div className="text-center">
              <p className="text-sm font-medium text-pink-800 tracking-wide">
                Mom Time Has Arrived - Proven Methods of a Resourceful Woman
              </p>
            </div>

            {/* Main Navigation */}
            <nav role="navigation" aria-label="Main menu">
              <ul className="flex flex-wrap gap-8 justify-center font-semibold tracking-wide">
                {LINKS.map(item => (
                  <li key={item.label}>
                    <Link 
                      to={item.href}
                      className="text-pink-900 hover:text-pink-600 transition-colors duration-300 focus:outline-none focus:text-pink-600 focus:underline focus:underline-offset-4 px-2 py-1 rounded"
                      aria-label={`Navigate to ${item.label}`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Category Navigation */}
            <nav role="navigation" aria-label="Article categories">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-100 to-pink-200 rounded-full border border-pink-200/50 shadow-sm mb-2">
                <span className="text-xs font-semibold text-pink-700 tracking-wide uppercase">
                  Categories
                </span>
              </div>
              
              {isLoading ? (
                <ul className="flex flex-wrap gap-6 justify-center mt-2" aria-label="Loading categories">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <li
                      key={index}
                      className="h-4 w-16 bg-pink-200 rounded animate-pulse"
                      aria-label={`Loading category ${index + 1}`}
                    />
                  ))}
                </ul>
              ) : (
                <ul className="flex flex-wrap gap-6 justify-center font-medium tracking-wide text-sm mt-2">
                  {types.map(item => (
                    <li key={item}>
                      <Link
                        to={`/blog?type=${encodeURIComponent(item || '')}`}
                        className="text-pink-800 hover:text-pink-600 transition-colors duration-300 focus:outline-none focus:text-pink-600 focus:underline focus:underline-offset-4 px-2 py-1 rounded"
                        aria-label={`Browse ${item} articles`}
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </nav>
          </div>
        </div>
      </Container>

      {/* Performance and accessibility optimizations */}
      <style>{`
        /* Reduce motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          .transition-colors,
          .transition-all,
          .animate-pulse {
            transition: none;
            animation: none;
          }
        }
        
        /* High contrast mode support */
        @media (prefers-contrast: high) {
          .text-pink-900 {
            color: #000;
          }
          
          .text-pink-800 {
            color: #1a1a1a;
          }
          
          .border-pink-200\\/50 {
            border-color: #666;
          }
        }
        
        /* Focus styles for better accessibility */
        a:focus-visible {
          outline: 2px solid #ec4899;
          outline-offset: 2px;
          border-radius: 4px;
        }
        
        /* Optimize for better performance */
        .blur-2xl {
          will-change: auto;
        }
        
        /* Ensure sufficient color contrast */
        .text-pink-900 {
          color: #831843;
        }
        
        .text-pink-800 {
          color: #9f1239;
        }
        
        .text-pink-600 {
          color: #db2777;
        }
        
        /* Mobile optimization */
        @media (max-width: 640px) {
          .gap-8 {
            gap: 1.5rem;
          }
          
          .gap-6 {
            gap: 1rem;
          }
        }
      `}</style>
    </header>
  )
}