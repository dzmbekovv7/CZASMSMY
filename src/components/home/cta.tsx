export function CallToActionSection() {
	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
			{/* Optimized animated background elements */}
			<div className="absolute inset-0 overflow-hidden" aria-hidden="true">
				<div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-pink-200/20 to-pink-300/20 rounded-full blur-3xl animate-pulse will-change-transform"></div>
				<div className="absolute -bottom-40 -left-32 w-96 h-96 bg-gradient-to-tr from-pink-200/20 to-pink-300/20 rounded-full blur-3xl animate-pulse will-change-transform" style={{animationDelay: '1000ms'}}></div>
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-pink-200/10 to-pink-300/10 rounded-full blur-2xl animate-bounce will-change-transform"></div>
			</div>

			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
					{/* Content Section */}
					<div className="lg:col-span-7 text-center lg:text-left">
						<div className="space-y-8">
							{/* Badge */}
							<div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-100 to-pink-200 rounded-full border border-pink-200/50 shadow-sm">
								<span className="text-sm font-semibold text-pink-700 tracking-wide uppercase">
									🌸 Join Our Community
								</span>
							</div>
							
							{/* Main Heading */}
							<div className="space-y-6">
								<h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-800 via-pink-900 to-pink-800 leading-tight">
									Ready to Transform
									<br />
									<span className="relative">
										Your Journey?
										<div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full transform -rotate-1"></div>
									</span>
								</h2>
								
								<p className="text-xl sm:text-2xl text-pink-800 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
									Stay up to date with the latest proven methods and wisdom from 
									<span className="font-semibold text-pink-900"> CZASMSMY</span>. 
									Join thousands of resourceful mothers on their empowering journey.
								</p>
							</div>

							{/* Benefits Grid */}
							<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
								<div className="group p-4 bg-white/70 backdrop-blur-sm rounded-2xl border border-pink-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 will-change-transform">
									<div className="w-10 h-10 bg-pink-500 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 will-change-transform">
										<span className="text-white text-lg" aria-hidden="true">📧</span>
									</div>
									<h3 className="font-bold text-pink-900 text-sm mb-1">Weekly Insights</h3>
									<p className="text-pink-700 text-xs">Expert tips delivered weekly</p>
								</div>
								
								<div className="group p-4 bg-white/70 backdrop-blur-sm rounded-2xl border border-pink-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 will-change-transform">
									<div className="w-10 h-10 bg-pink-500 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 will-change-transform">
										<span className="text-white text-lg" aria-hidden="true">🎁</span>
									</div>
									<h3 className="font-bold text-pink-900 text-sm mb-1">Exclusive Content</h3>
									<p className="text-pink-700 text-xs">Members-only resources</p>
								</div>
								
								<div className="group p-4 bg-white/70 backdrop-blur-sm rounded-2xl border border-pink-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 will-change-transform">
									<div className="w-10 h-10 bg-pink-500 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 will-change-transform">
										<span className="text-white text-lg" aria-hidden="true">💝</span>
									</div>
									<h3 className="font-bold text-pink-900 text-sm mb-1">Community Support</h3>
									<p className="text-pink-700 text-xs">Connect with like-minded moms</p>
								</div>
							</div>

							{/* CTA Buttons */}
							<div className="flex flex-col sm:flex-row gap-4 pt-8 justify-center lg:justify-start">
								<a
									href="/contacts"
									className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-pink-600 rounded-2xl shadow-lg hover:shadow-pink-500/25 transition-all duration-300 hover:scale-105 hover:-translate-y-1 overflow-hidden focus:outline-none focus:ring-4 focus:ring-pink-500/50 will-change-transform"
									aria-label="Subscribe to CZASMSMY newsletter"
								>
									<span className="absolute inset-0 bg-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
									<span className="relative flex items-center gap-3">
										Subscribe Now
										<svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
										</svg>
									</span>
								</a>
								
								<a
									href="/blog"
									className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-pink-600 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl border border-pink-200/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1 overflow-hidden focus:outline-none focus:ring-4 focus:ring-pink-500/50 will-change-transform"
									aria-label="Browse all articles"
								>
									<span className="absolute inset-0 bg-pink-50 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></span>
									<span className="relative flex items-center gap-3">
										Browse Articles
										<svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
										</svg>
									</span>
								</a>
							</div>
						</div>
					</div>

					{/* Visual Section */}
					<div className="lg:col-span-5 relative">
						<div className="relative group">
							{/* Decorative elements */}
							<div className="absolute -inset-4 bg-gradient-to-r from-pink-400 to-pink-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
							<div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full opacity-80 animate-bounce will-change-transform" style={{animationDelay: '500ms'}}></div>
							<div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full opacity-60 animate-pulse will-change-transform" style={{animationDelay: '1000ms'}}></div>
							
							{/* Main content container */}
							<div className="relative bg-white p-8 rounded-3xl shadow-2xl group-hover:shadow-pink-500/25 transition-all duration-500 group-hover:-translate-y-2 will-change-transform">
								{/* Newsletter preview */}
								<div className="space-y-6">
									<div className="flex items-center gap-4">
										<div className="w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center">
											<span className="text-white text-xl" aria-hidden="true">📧</span>
										</div>
										<div>
											<h3 className="font-bold text-pink-900 text-lg">CZASMSMY Newsletter</h3>
											<p className="text-pink-700 text-sm">Weekly wisdom & tips</p>
										</div>
									</div>
									
									<div className="bg-pink-50 p-4 rounded-2xl">
										<h4 className="font-semibold text-pink-900 text-sm mb-2">"This Week's Mom Wisdom"</h4>
										<p className="text-pink-700 text-xs leading-relaxed">
											Discover 5 proven time-saving strategies that successful moms use to balance work and family life...
										</p>
									</div>
									
									<div className="flex justify-between items-center text-xs text-pink-600">
										<span>📅 Every Monday</span>
										<span>⏱️ 3 min read</span>
										<span>💌 Free forever</span>
									</div>
								</div>
								
								{/* Success indicators */}
								<div className="absolute -right-4 top-8 bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-xl border border-pink-200/50 animate-float">
									<div className="text-center">
										<div className="text-lg font-black text-pink-600">15K+</div>
										<div className="text-xs text-pink-700 font-medium">Subscribers</div>
									</div>
								</div>
								
								<div className="absolute -left-4 bottom-8 bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-xl border border-pink-200/50 animate-float" style={{animationDelay: '700ms'}}>
									<div className="text-center">
										<div className="text-lg font-black text-pink-600">98%</div>
										<div className="text-xs text-pink-700 font-medium">Satisfaction</div>
									</div>
								</div>
							</div>
						</div>
					</div>
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
					.group-hover\\:scale-110,
					.group-hover\\:translate-x-1,
					.group-hover\\:-translate-y-2 {
						transform: none;
					}
					
					.transition-all,
					.transition-transform,
					.transition-opacity {
						transition: none;
					}
				}
				
				/* Focus styles for better accessibility */
				a:focus-visible {
					outline: 2px solid #ec4899;
					outline-offset: 2px;
				}
			`}</style>
		</section>
	)
}