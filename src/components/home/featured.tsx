import { useGetArticles } from '@/hooks/useArticles'
import { getArticleLink } from '@/lib/utils'

export function FeaturedArticlesSection() {
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
							🌸 Mom Time Featured
						</span>
					</div>
					
					<h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-800 via-pink-900 to-pink-800 leading-tight mb-6">
						Essential
						<br />
						<span className="relative">
							Articles
							<div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full transform -rotate-1"></div>
						</span>
					</h2>
					
					<p className="text-xl sm:text-2xl text-pink-800 font-light leading-relaxed max-w-3xl mx-auto">
						Hand-picked wisdom and proven methods from a resourceful woman. 
						<span className="font-semibold text-pink-900"> CZASMSMY</span> brings you 
						essential insights to transform your motherhood journey.
					</p>
				</div>

				{/* Articles Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
					{isLoading ? (
						<>
							{Array.from({ length: 3 }).map((_, index) => (
								<div
									key={index}
									className="group bg-white/70 backdrop-blur-sm rounded-3xl border border-pink-200/50 shadow-lg animate-pulse p-6"
									aria-label={`Loading featured article ${index + 1}`}
								>
									<div className="aspect-video bg-pink-200 rounded-2xl mb-6"></div>
									<div className="space-y-3">
										<div className="h-4 bg-pink-200 rounded-lg w-20"></div>
										<div className="h-6 bg-pink-200 rounded-lg"></div>
										<div className="h-4 bg-pink-100 rounded-lg w-3/4"></div>
										<div className="h-4 bg-pink-100 rounded-lg w-1/2"></div>
									</div>
								</div>
							))}
						</>
					) : (
						articles?.slice(0, 3).map((article, index) => (
							<article
								key={article.id}
								className="group bg-white/70 backdrop-blur-sm rounded-3xl border border-pink-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 will-change-transform"
							>
								<a 
									href={getArticleLink(article)}
									className="block p-6 focus:outline-none focus:ring-4 focus:ring-pink-500/50 rounded-3xl"
									aria-label={`Read article: ${article.title}`}
								>
									{/* Article Image */}
									<div className="relative mb-6 overflow-hidden rounded-2xl">
										<div className="aspect-video bg-gradient-to-br from-pink-100 to-pink-200 group-hover:scale-110 transition-transform duration-500 will-change-transform">
											{article.image ? (
												<img
													src={article.image}
													alt={article.title}
													className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
													loading={index === 0 ? "eager" : "lazy"}
													decoding="async"
												/>
											) : (
												<div className="w-full h-full flex items-center justify-center">
													<span className="text-4xl text-pink-500" aria-hidden="true">
														{getArticleIcon(article.type || '', index)}
													</span>
												</div>
											)}
										</div>
										
										{/* Category Badge */}
										<div className="absolute top-4 left-4 px-3 py-1 bg-pink-500 text-white text-xs font-semibold rounded-full">
											{article.type || 'Mom Tips'}
										</div>
									</div>
									
									{/* Article Content */}
									<div className="space-y-4">
										{/* Title */}
										<h3 className="font-black text-pink-900 text-xl leading-tight group-hover:text-pink-700 transition-colors duration-300 line-clamp-2">
											{article.title}
										</h3>
										
										{/* Excerpt */}
										<p className="text-pink-700 text-sm leading-relaxed line-clamp-3">
											{article.summary || 'Discover proven methods and practical wisdom to enhance your motherhood journey with time-tested strategies.'}
										</p>
										
										{/* Meta Info */}
										<div className="flex items-center justify-between text-xs text-pink-600">
											<div className="flex items-center gap-2">
												<span className="w-2 h-2 bg-pink-500 rounded-full"></span>
												<span>{article.reading_time || '5 min read'}</span>
											</div>
											<div className="flex items-center gap-1">
												<span>Read more</span>
												<svg 
													className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" 
													fill="none" 
													stroke="currentColor" 
													viewBox="0 0 24 24"
													aria-hidden="true"
												>
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
												</svg>
											</div>
										</div>
									</div>
								</a>
							</article>
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
							Explore All Articles
							<svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
							</svg>
						</span>
					</a>
				</div>
			</div>

			{/* Optimized CSS for performance and accessibility */}
			<style>{`
				/* Line clamp utilities */
				.line-clamp-2 {
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
					overflow: hidden;
				}
				
				.line-clamp-3 {
					display: -webkit-box;
					-webkit-line-clamp: 3;
					-webkit-box-orient: vertical;
					overflow: hidden;
				}
				
				/* Performance optimizations */
				.will-change-transform {
					will-change: transform;
				}
				
				/* Reduce motion for accessibility */
				@media (prefers-reduced-motion: reduce) {
					.animate-pulse,
					.animate-bounce {
						animation: none;
					}
					
					.hover\\:scale-105:hover,
					.hover\\:scale-110:hover,
					.hover\\:-translate-y-2:hover,
					.group-hover\\:scale-110,
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
				
				/* Ensure proper contrast ratios */
				.text-pink-700 {
					color: #be185d;
				}
				
				.text-pink-800 {
					color: #9f1239;
				}
				
				.text-pink-900 {
					color: #831843;
				}
			`}</style>
		</section>
	)
}

// Helper function to get article icons based on type
function getArticleIcon(type: string, index: number) {
	const icons = ['🌟', '💡', '🌸', '💖', '🎯', '✨', '🌺', '💪', '🎨', '📚']
	
	if (type) {
		const typeLower = type.toLowerCase()
		if (typeLower.includes('parenting')) return '👶'
		if (typeLower.includes('health')) return '🌱'
		if (typeLower.includes('lifestyle')) return '🏡'
		if (typeLower.includes('tip')) return '💡'
		if (typeLower.includes('family')) return '👨‍👩‍👧‍👦'
		if (typeLower.includes('wellness')) return '🧘‍♀️'
		if (typeLower.includes('food') || typeLower.includes('recipe')) return '🍽️'
		if (typeLower.includes('education')) return '📚'
	}
	
	return icons[index % icons.length]
}