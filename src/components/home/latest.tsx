import { useGetArticles } from '@/hooks/useArticles'
import ArticleCardMedium from '../shared/article-card/article-card-medium'
import ArticleCardMediumSkeleton from '../shared/article-card/article-card-medium-skeleton'

export function LatestArticlesSection() {
    const { data: articles, isLoading } = useGetArticles()

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
            {/* Optimized animated background elements */}
            <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
                <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-pink-200/20 to-pink-300/20 rounded-full blur-3xl animate-pulse will-change-transform"></div>
                <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-gradient-to-tr from-pink-200/20 to-pink-300/20 rounded-full blur-3xl animate-pulse will-change-transform" style={{animationDelay: '1000ms'}}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-pink-200/10 to-pink-300/10 rounded-full blur-2xl animate-bounce will-change-transform"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-100 to-pink-200 rounded-full border border-pink-200/50 shadow-sm mb-8">
                        <span className="text-sm font-semibold text-pink-700 tracking-wide uppercase">
                            🌸 Latest Wisdom
                        </span>
                    </div>
                    
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-800 via-pink-900 to-pink-800 leading-tight mb-6">
                        Fresh Insights for
                        <br />
                        <span className="relative">
                            Modern Moms
                            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full transform -rotate-1"></div>
                        </span>
                    </h2>
                    
                    <p className="text-xl sm:text-2xl text-pink-800 font-light leading-relaxed max-w-3xl mx-auto">
                        Stay up-to-date with proven methods and wisdom from a resourceful woman. 
                        <span className="font-semibold text-pink-900"> CZASMSMY</span> brings you 
                        the latest insights for empowering your motherhood journey.
                    </p>
                </div>

                {/* Articles Grid */}
                <div className="grid gap-8 lg:grid-cols-2 mb-16">
                    {isLoading ? (
                        <>
                            <ArticleCardMediumSkeleton />
                            <ArticleCardMediumSkeleton />
                            <ArticleCardMediumSkeleton />
                            <ArticleCardMediumSkeleton />
                        </>
                    ) : (
                        articles?.slice(3, 9).map(article => (
                            <ArticleCardMedium key={article.id} article={article} />
                        ))
                    )}
                </div>

                {/* Bottom CTA */}
                <div className="text-center">
                    <a
                        href="/blog"
                        className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-pink-600 rounded-2xl shadow-lg hover:shadow-pink-500/25 transition-all duration-300 hover:scale-105 hover:-translate-y-1 overflow-hidden focus:outline-none focus:ring-4 focus:ring-pink-500/50 will-change-transform"
                        aria-label="View all articles"
                    >
                        <span className="absolute inset-0 bg-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                        <span className="relative flex items-center gap-3">
                            View All Articles
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </span>
                    </a>
                </div>
            </div>

            {/* Optimized CSS for performance and accessibility */}
            <style>{`
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
                
                /* Reduce motion for accessibility */
                @media (prefers-reduced-motion: reduce) {
                    .animate-pulse,
                    .animate-bounce,
                    .animate-float {
                        animation: none;
                    }
                    
                    .hover\\:scale-105:hover,
                    .hover\\:-translate-y-1:hover,
                    .hover\\:-translate-y-2:hover,
                    .group-hover\\:scale-105,
                    .group-hover\\:translate-x-1 {
                        transform: none;
                    }
                    
                    .transition-all,
                    .transition-transform,
                    .transition-colors,
                    .transition-opacity {
                        transition: none;
                    }
                }
                
                /* Focus styles for better accessibility */
                a:focus-visible {
                    outline: 2px solid #ec4899;
                    outline-offset: 2px;
                }
                
                /* Preload critical animations */
                @media (prefers-reduced-motion: no-preference) {
                    .animate-pulse {
                        animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                    }
                    
                    .animate-bounce {
                        animation: bounce 1s infinite;
                    }
                }
            `}</style>
        </section>
    )
}