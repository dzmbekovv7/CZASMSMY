import { useGetArticles } from '@/hooks/useArticles'

export function CategoriesSection() {
	const { data: articles, isLoading } = useGetArticles()
	const categories = [...new Set(articles?.map(article => article.type))]

	return (
		<section className='relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100'>
			{/* Animated background elements - optimized for performance */}
			<div className='absolute inset-0 overflow-hidden' aria-hidden="true">
				<div className='absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-pink-200/20 to-pink-300/20 rounded-full blur-3xl animate-pulse will-change-transform'></div>
				<div className='absolute -bottom-40 -left-32 w-96 h-96 bg-gradient-to-tr from-pink-200/20 to-pink-300/20 rounded-full blur-3xl animate-pulse will-change-transform' style={{animationDelay: '1000ms'}}></div>
				<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-pink-200/10 to-pink-300/10 rounded-full blur-2xl animate-bounce will-change-transform'></div>
			</div>

			<div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
				{/* Header Section */}
				<div className='text-center mb-16'>
					<div className='inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-100 to-pink-200 rounded-full border border-pink-200/50 shadow-sm mb-8'>
						<span className='text-sm font-semibold text-pink-700 tracking-wide uppercase'>
							🌸 Mom Time Categories
						</span>
					</div>
					
					<h2 className='text-4xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-800 via-pink-900 to-pink-800 leading-tight mb-6'>
						Explore by
						<br />
						<span className='relative'>
							Category
							<div className='absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full transform -rotate-1'></div>
						</span>
					</h2>
					
					<p className='text-xl sm:text-2xl text-pink-800 font-light leading-relaxed max-w-3xl mx-auto'>
						Discover proven methods and wisdom from a resourceful woman. 
						<span className='font-semibold text-pink-900'> CZASMSMY</span> brings you 
						curated content organized by categories to help you navigate modern motherhood.
					</p>
				</div>

				{/* Categories Grid */}
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
					{isLoading
						? Array.from({ length: 6 }).map((_, index) => (
								<div
									key={index}
									className='group p-8 bg-white/70 backdrop-blur-sm rounded-3xl border border-pink-200/50 shadow-lg animate-pulse'
									aria-label={`Loading category ${index + 1}`}
								>
									<div className='w-16 h-16 bg-pink-200 rounded-2xl mb-6'></div>
									<div className='h-6 bg-pink-200 rounded-lg mb-3'></div>
									<div className='h-4 bg-pink-100 rounded-lg w-3/4'></div>
								</div>
						  ))
						: categories.map((category, index) => (
								<a
									key={category}
									href={`/blog?type=${encodeURIComponent(category || '')}`}
									className='group p-8 bg-white/70 backdrop-blur-sm rounded-3xl border border-pink-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 will-change-transform focus:outline-none focus:ring-4 focus:ring-pink-500/50'
									aria-label={`Browse ${category} articles`}
								>
									{/* Category Icon */}
									<div className='w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 will-change-transform'>
										<span className='text-white text-2xl font-bold'>
											{getCategoryIcon(category || '', index)}
										</span>
									</div>
									
									{/* Category Title */}
									<h3 className='font-black text-pink-900 text-xl mb-3 group-hover:text-pink-700 transition-colors duration-300'>
										{category}
									</h3>
									
									{/* Category Description */}
									<p className='text-pink-700 text-sm leading-relaxed mb-4'>
										{getCategoryDescription(category || '')}
									</p>
									
									{/* Arrow Icon */}
									<div className='flex items-center text-pink-600 group-hover:text-pink-700 transition-colors duration-300'>
										<span className='text-sm font-semibold mr-2'>Explore</span>
										<svg 
											className='w-4 h-4 group-hover:translate-x-1 transition-transform duration-300' 
											fill='none' 
											stroke='currentColor' 
											viewBox='0 0 24 24'
											aria-hidden="true"
										>
											<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7l5 5m0 0l-5 5m5-5H6' />
										</svg>
									</div>
								</a>
						  ))}
				</div>

				{/* Bottom CTA */}
				<div className='text-center mt-16'>
					<a
						href='/blog'
						className='group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-pink-600 rounded-2xl shadow-lg hover:shadow-pink-500/25 transition-all duration-300 hover:scale-105 hover:-translate-y-1 overflow-hidden focus:outline-none focus:ring-4 focus:ring-pink-500/50'
						aria-label="View all articles"
					>
						<span className='absolute inset-0 bg-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300'></span>
						<span className='relative flex items-center gap-3'>
							View All Articles
							<svg className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24' aria-hidden="true">
								<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7l5 5m0 0l-5 5m5-5H6' />
							</svg>
						</span>
					</a>
				</div>
			</div>

			{/* Custom Animation Styles - Optimized */}
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
					.hover\\:-translate-y-2:hover,
					.group-hover\\:scale-110,
					.group-hover\\:translate-x-1 {
						transform: none;
					}
				}
			`}</style>
		</section>
	)
}

// Helper function to get category icons
function getCategoryIcon(category: string, index: number) {
	const icons = ['🌟', '💡', '🌸', '💖', '🎯', '✨', '🌺', '💪', '🎨', '📚']
	
	// Generate icon based on category name or use index as fallback
	if (category) {
		const categoryLower = category.toLowerCase()
		if (categoryLower.includes('parenting')) return '👶'
		if (categoryLower.includes('health')) return '🌱'
		if (categoryLower.includes('lifestyle')) return '🏡'
		if (categoryLower.includes('tips')) return '💡'
		if (categoryLower.includes('family')) return '👨‍👩‍👧‍👦'
		if (categoryLower.includes('wellness')) return '🧘‍♀️'
		if (categoryLower.includes('food') || categoryLower.includes('recipe')) return '🍽️'
		if (categoryLower.includes('education')) return '📚'
	}
	
	return icons[index % icons.length]
}

// Helper function to get category descriptions
function getCategoryDescription(category: string) {
	const descriptions: { [key: string]: string } = {
		'Parenting': 'Expert advice and proven strategies for modern parenting challenges.',
		'Health & Wellness': 'Essential tips for maintaining physical and mental well-being.',
		'Lifestyle': 'Smart solutions for organizing and enhancing your daily life.',
		'Family Tips': 'Practical wisdom for creating stronger family bonds.',
		'Self Care': 'Nurturing yourself while caring for others.',
		'Home Management': 'Efficient strategies for managing your household.',
		'Education': 'Learning resources and educational guidance for families.',
		'Nutrition': 'Healthy eating tips and family-friendly recipes.'
	}
	return descriptions[category] || 'Discover valuable insights and practical wisdom for modern motherhood.'
}