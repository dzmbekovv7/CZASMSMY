import { Container } from '../components/shared/container'

export function AboutPage() {
	return (
		<main className="relative overflow-hidden">
			{/* Hero Section */}
			<section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
				{/* Optimized background elements */}
				<div className="absolute inset-0 overflow-hidden" aria-hidden="true">
					<div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-pink-200/20 to-pink-300/20 rounded-full blur-3xl animate-pulse will-change-transform"></div>
					<div className="absolute -bottom-40 -left-32 w-96 h-96 bg-gradient-to-tr from-pink-200/20 to-pink-300/20 rounded-full blur-3xl animate-pulse will-change-transform" style={{animationDelay: '1000ms'}}></div>
					<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-pink-200/10 to-pink-300/10 rounded-full blur-2xl animate-bounce will-change-transform"></div>
				</div>

				<Container className="relative z-10 py-12">
					<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
						{/* Content Section */}
						<div className="lg:col-span-7 space-y-8">
							<div className="space-y-6">
								<div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-100 to-pink-200 rounded-full border border-pink-200/50 shadow-sm">
									<span className="text-sm font-semibold text-pink-700 tracking-wide uppercase">
										🌸 About CZASMSMY
									</span>
								</div>
								
								<h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-800 via-pink-900 to-pink-800 leading-tight">
									Mom Time Has
									<br />
									<span className="relative">
										Arrived
										<div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full transform -rotate-1"></div>
									</span>
								</h1>
								
								<p className="text-xl sm:text-2xl text-pink-800 font-light leading-relaxed">
									Welcome to <span className="font-semibold text-pink-900">CZASMSMY</span>, 
									your trusted companion for proven motherhood wisdom. We believe in empowering 
									mothers with time-tested strategies and practical solutions for modern parenting challenges.
								</p>
							</div>

							{/* Mission highlights */}
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
								<div className="group p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-pink-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
									<div className="w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
										<span className="text-white text-xl" aria-hidden="true">🌟</span>
									</div>
									<h3 className="font-bold text-pink-900 text-lg mb-2">Proven Methods</h3>
									<p className="text-pink-700 text-sm">Time-tested strategies from experienced mothers</p>
								</div>
								
								<div className="group p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-pink-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
									<div className="w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
										<span className="text-white text-xl" aria-hidden="true">💡</span>
									</div>
									<h3 className="font-bold text-pink-900 text-lg mb-2">Smart Solutions</h3>
									<p className="text-pink-700 text-sm">Innovative approaches for busy modern mothers</p>
								</div>
							</div>
						</div>

						{/* Image Section */}
						<div className="lg:col-span-5 relative">
							<div className="relative group">
								{/* Decorative elements */}
								<div className="absolute -inset-4 bg-gradient-to-r from-pink-400 to-pink-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
								<div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full opacity-80 animate-bounce delay-500"></div>
								<div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full opacity-60 animate-pulse delay-1000"></div>
								
								{/* Main image container */}
								<div className="relative bg-white p-2 rounded-3xl shadow-2xl group-hover:shadow-pink-500/25 transition-all duration-500 group-hover:-translate-y-2">
									<img
										className="w-full h-auto rounded-2xl object-cover transform group-hover:scale-105 transition-transform duration-700"
										src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA8TZTYv4F_tS8xIqkghJR1vy8soKlkcTqfQ&s"
										alt="Empowering motherhood journey with CZASMSMY wisdom"
										width="800"
										height="600"
										loading="eager"
									/>
								</div>
							</div>
						</div>
					</div>
				</Container>
			</section>

			{/* Our Mission Section */}
			<section className="relative py-20 bg-white">
				<Container>
					<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
						<div className="lg:col-span-5 relative">
							<div className="relative group">
								<div className="absolute -inset-4 bg-gradient-to-r from-pink-400 to-pink-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
								<div className="relative bg-white p-2 rounded-3xl shadow-2xl">
									<img
										className="w-full h-auto rounded-2xl object-cover"
										src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3"
										alt="Our mission to empower mothers with proven wisdom"
										width="800"
										height="600"
										loading="lazy"
									/>
								</div>
							</div>
						</div>

						<div className="lg:col-span-7 space-y-6">
							<div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-100 to-pink-200 rounded-full border border-pink-200/50 shadow-sm">
								<span className="text-sm font-semibold text-pink-700 tracking-wide uppercase">
									💖 Our Mission
								</span>
							</div>
							
							<h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-800 via-pink-900 to-pink-800 leading-tight">
								Empowering Modern
								<br />
								<span className="relative">
									Motherhood
									<div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full transform -rotate-1"></div>
								</span>
							</h2>
							
							<div className="space-y-4 text-lg text-pink-800 leading-relaxed">
								<p>
									At <span className="font-semibold text-pink-900">CZASMSMY</span>, we believe in the power of shared wisdom. 
									Our mission is to empower mothers by providing well-researched, practical, and proven strategies 
									that address the real challenges of modern parenting.
								</p>
								<p>
									We understand that every mother's journey is unique, yet we all share common experiences and challenges. 
									That's why we've created a trusted resource where proven methods meet innovative solutions, 
									ensuring there's valuable guidance for every stage of motherhood.
								</p>
							</div>

							{/* Mission stats */}
							<div className="grid grid-cols-2 gap-4 pt-6">
								<div className="text-center p-4 bg-pink-50 rounded-xl border border-pink-200/50">
									<div className="text-2xl font-black text-pink-600">10,000+</div>
									<div className="text-sm text-pink-700 font-medium">Mothers Helped</div>
								</div>
								<div className="text-center p-4 bg-pink-50 rounded-xl border border-pink-200/50">
									<div className="text-2xl font-black text-pink-600">5+ Years</div>
									<div className="text-sm text-pink-700 font-medium">Experience</div>
								</div>
							</div>
						</div>
					</div>
				</Container>
			</section>

			{/* Meet Our Team Section */}
			<section className="relative py-20 bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
				<Container>
					<div className="text-center mb-16">
						<div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-100 to-pink-200 rounded-full border border-pink-200/50 shadow-sm mb-8">
							<span className="text-sm font-semibold text-pink-700 tracking-wide uppercase">
								👥 Our Team
							</span>
						</div>
						
						<h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-800 via-pink-900 to-pink-800 leading-tight mb-6">
							Meet the
							<br />
							<span className="relative">
								CZASMSMY Team
								<div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full transform -rotate-1"></div>
							</span>
						</h2>
						
						<p className="text-xl sm:text-2xl text-pink-800 font-light leading-relaxed max-w-3xl mx-auto">
							Our dedicated team of experienced mothers and parenting experts brings diverse perspectives 
							and proven wisdom to help you navigate your motherhood journey.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{/* Team Member 1 */}
						<article className="group p-8 bg-white/70 backdrop-blur-sm rounded-3xl border border-pink-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
							<div className="relative mb-6">
								<div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-pink-200 group-hover:border-pink-300 transition-colors duration-300">
									<img
										src="https://pbs.twimg.com/profile_images/1271544502340198400/8Fq7zjbq_400x400.jpg"
										alt="Sarah Johnson - Parenting Expert"
										width="150"
										height="150"
										className="w-full h-full object-cover"
										loading="lazy"
									/>
								</div>
								<div className="absolute -bottom-2 -right-2 w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
									<span className="text-white text-sm" aria-hidden="true">✨</span>
								</div>
							</div>
							<h3 className="text-xl font-bold text-pink-900 mb-2 text-center">Sarah Johnson</h3>
							<p className="text-pink-700 font-semibold text-center mb-3">Parenting Expert</p>
							<p className="text-pink-700 text-sm text-center leading-relaxed">
								Sarah is a certified parenting coach with over 15 years of experience. 
								She specializes in positive discipline and child development strategies.
							</p>
						</article>

						{/* Team Member 2 */}
						<article className="group p-8 bg-white/70 backdrop-blur-sm rounded-3xl border border-pink-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
							<div className="relative mb-6">
								<div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-pink-200 group-hover:border-pink-300 transition-colors duration-300">
									<img
										src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop&ixlib=rb-4.0.3"
										alt="Michael Chen - Family Wellness Advisor"
										width="150"
										height="150"
										className="w-full h-full object-cover"
										loading="lazy"
									/>
								</div>
								<div className="absolute -bottom-2 -right-2 w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
									<span className="text-white text-sm" aria-hidden="true">🌱</span>
								</div>
							</div>
							<h3 className="text-xl font-bold text-pink-900 mb-2 text-center">Michael Chen</h3>
							<p className="text-pink-700 font-semibold text-center mb-3">Family Wellness Advisor</p>
							<p className="text-pink-700 text-sm text-center leading-relaxed">
								Michael focuses on family wellness and mental health, providing evidence-based 
								strategies for maintaining balance in busy family life.
							</p>
						</article>

						{/* Team Member 3 */}
						<article className="group p-8 bg-white/70 backdrop-blur-sm rounded-3xl border border-pink-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
							<div className="relative mb-6">
								<div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-pink-200 group-hover:border-pink-300 transition-colors duration-300">
									<img
										src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&h=150&auto=format&fit=crop&ixlib=rb-4.0.3"
										alt="Emma Rodriguez - Lifestyle & Nutrition Specialist"
										width="150"
										height="150"
										className="w-full h-full object-cover"
										loading="lazy"
									/>
								</div>
								<div className="absolute -bottom-2 -right-2 w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
									<span className="text-white text-sm" aria-hidden="true">🍎</span>
								</div>
							</div>
							<h3 className="text-xl font-bold text-pink-900 mb-2 text-center">Emma Rodriguez</h3>
							<p className="text-pink-700 font-semibold text-center mb-3">Lifestyle & Nutrition Specialist</p>
							<p className="text-pink-700 text-sm text-center leading-relaxed">
								Emma combines her expertise in nutrition and lifestyle coaching to help families 
								create healthy habits and sustainable routines.
							</p>
						</article>
					</div>
				</Container>
			</section>

			{/* Call to Action Section */}
			<section className="relative py-20 bg-white">
				<Container>
					<div className="text-center space-y-8">
						<div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-100 to-pink-200 rounded-full border border-pink-200/50 shadow-sm">
							<span className="text-sm font-semibold text-pink-700 tracking-wide uppercase">
								🚀 Join Our Community
							</span>
						</div>
						
						<h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-800 via-pink-900 to-pink-800 leading-tight">
							Ready to Transform Your
							<br />
							<span className="relative">
								Motherhood Journey?
								<div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full transform -rotate-1"></div>
							</span>
						</h2>
						
						<p className="text-xl text-pink-800 font-light leading-relaxed max-w-2xl mx-auto">
							Join thousands of mothers who have discovered the power of proven methods and community support.
						</p>

						<div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
							<a
								href="/blog"
								className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-pink-600 rounded-2xl shadow-lg hover:shadow-pink-500/25 transition-all duration-300 hover:scale-105 hover:-translate-y-1 overflow-hidden focus:outline-none focus:ring-4 focus:ring-pink-500/50"
								aria-label="Explore our articles and wisdom"
							>
								<span className="absolute inset-0 bg-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
								<span className="relative flex items-center gap-3">
									Explore Our Wisdom
									<svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
									</svg>
								</span>
							</a>
							
							<a
								href="/contacts"
								className="group inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-pink-600 bg-pink-50 border-2 border-pink-600 rounded-2xl hover:bg-pink-100 transition-all duration-300 hover:scale-105 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-pink-500/50"
								aria-label="Get in touch with our team"
							>
								<span className="flex items-center gap-3">
									Get In Touch
									<svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
									</svg>
								</span>
							</a>
						</div>
					</div>
				</Container>
			</section>

			{/* Optimized styles for performance and accessibility */}
			<style>{`
				/* Performance optimizations */
				.will-change-transform {
					will-change: transform;
				}
				
				.backdrop-blur-sm {
					backdrop-filter: blur(4px);
					-webkit-backdrop-filter: blur(4px);
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
					.group-hover\\:scale-110,
					.group-hover\\:translate-x-1,
					.group-hover\\:-translate-y-2 {
						transform: none;
					}
					
					.transition-all,
					.transition-colors,
					.transition-transform,
					.transition-opacity {
						transition: none;
					}
				}
				
				/* High contrast mode support */
				@media (prefers-contrast: high) {
					.bg-gradient-to-br,
					.bg-gradient-to-r,
					.bg-gradient-to-tr {
						background: #be185d;
						color: white;
					}
					
					.text-transparent {
						color: #be185d !important;
						background: none !important;
						-webkit-background-clip: initial !important;
						background-clip: initial !important;
					}
				}
				
				/* Focus styles for better accessibility */
				button:focus-visible,
				a:focus-visible {
					outline: 2px solid #f472b6;
					outline-offset: 2px;
				}
				
				/* Optimize images for better CLS */
				img {
					max-width: 100%;
					height: auto;
				}
				
				/* Optimize animations for better performance */
				@keyframes optimizedPulse {
					0%, 100% { opacity: 1; }
					50% { opacity: 0.7; }
				}
				
				@keyframes optimizedBounce {
					0%, 100% { transform: translateY(0); }
					50% { transform: translateY(-10px); }
				}
				
				.animate-pulse {
					animation: optimizedPulse 2s ease-in-out infinite;
				}
				
				.animate-bounce {
					animation: optimizedBounce 1s ease-in-out infinite;
				}
			`}</style>
		</main>
	)
}