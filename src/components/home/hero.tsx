import { Container } from '@/components/shared/container'
import { useState } from 'react'

export function Hero() {
	const [loaded, setLoaded] = useState(false)

	return (
		<section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
			{/* Dynamic gradient background */}
			<div className='absolute inset-0 bg-gradient-to-br from-pink-900 via-pink-800 to-rose-900'></div>
			
			{/* Animated mesh gradient overlay */}
			<div className='absolute inset-0 opacity-30'>
				<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-400/20 via-transparent to-rose-400/20 animate-pulse will-change-transform'></div>
				<div className='absolute inset-0 bg-gradient-to-t from-pink-600/10 via-transparent to-rose-600/10 animate-pulse will-change-transform' style={{animationDelay: '2000ms'}}></div>
			</div>

			{/* Floating geometric shapes */}
			<div className='absolute inset-0 overflow-hidden' aria-hidden="true">
				<div className='absolute top-20 left-10 w-4 h-4 bg-white/20 rounded-full animate-bounce will-change-transform' style={{animationDelay: '0ms'}}></div>
				<div className='absolute top-32 right-20 w-6 h-6 bg-pink-300/30 rounded-full animate-bounce will-change-transform' style={{animationDelay: '1000ms'}}></div>
				<div className='absolute bottom-40 left-20 w-3 h-3 bg-rose-300/40 rounded-full animate-bounce will-change-transform' style={{animationDelay: '2000ms'}}></div>
				<div className='absolute bottom-20 right-32 w-5 h-5 bg-white/15 rounded-full animate-bounce will-change-transform' style={{animationDelay: '1500ms'}}></div>
				
				{/* Large decorative circles */}
				<div className='absolute -top-32 -right-20 w-64 h-64 border border-white/10 rounded-full animate-spin will-change-transform' style={{animationDuration: '20s'}}></div>
				<div className='absolute -bottom-32 -left-20 w-48 h-48 border border-pink-300/20 rounded-full animate-spin will-change-transform' style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
			</div>

			<Container className='py-12 relative z-10'>
				<div className='text-center space-y-12'>
					{/* Hero badge */}
					<div className='animate-fade-in-up' style={{animationDelay: '200ms'}}>
						<div className='inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-2xl'>
							<span className='text-sm font-bold text-white tracking-wider uppercase'>
								✨ Welcome to CZASMSMY ✨
							</span>
						</div>
					</div>
					
					{/* Main headline - dramatically different layout */}
					<div className='space-y-8 animate-fade-in-up' style={{animationDelay: '400ms'}}>
						<h1 className='text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-tight'>
							<span className='block mb-4'>
								<span className='text-pink-200'>Mom Time</span>
								<br />
								<span className='relative'>
									Has Arrived
									<svg 
										className='absolute -bottom-4 left-0 w-full h-3 text-pink-400' 
										viewBox='0 0 100 3' 
										fill='none' 
										preserveAspectRatio='none'
										aria-hidden="true"
									>
										<path d='M0 2C20 0 40 0 60 2C80 4 90 2 100 1' stroke='currentColor' strokeWidth='2' />
									</svg>
								</span>
							</span>
						</h1>
						
						<div className='max-w-4xl mx-auto'>
							<p className='text-xl sm:text-2xl lg:text-3xl text-pink-100 font-light leading-relaxed'>
								Discover the <strong className='text-white font-semibold'>proven methods</strong> of a resourceful woman.
								<br className='hidden sm:block' />
								Transform your motherhood journey with time-tested wisdom and practical solutions.
							</p>
						</div>
					</div>

					{/* Stats showcase - unique design */}
					<div className='grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto animate-fade-in-up' style={{animationDelay: '600ms'}}>
						<div className='group p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 will-change-transform'>
							<div className='text-3xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-300 will-change-transform'>25K+</div>
							<div className='text-pink-200 text-sm font-medium'>Empowered Mothers</div>
						</div>
						
						<div className='group p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 will-change-transform'>
							<div className='text-3xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-300 will-change-transform'>500+</div>
							<div className='text-pink-200 text-sm font-medium'>Proven Methods</div>
						</div>
						
						<div className='group p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 will-change-transform'>
							<div className='text-3xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-300 will-change-transform'>98%</div>
							<div className='text-pink-200 text-sm font-medium'>Success Stories</div>
						</div>
						
						<div className='group p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 will-change-transform'>
							<div className='text-3xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-300 will-change-transform'>24/7</div>
							<div className='text-pink-200 text-sm font-medium'>Community Support</div>
						</div>
					</div>

					{/* Hero image - completely different approach */}
					<div className='relative max-w-2xl mx-auto animate-fade-in-up' style={{animationDelay: '800ms'}}>
						<div className='relative group'>
							{/* Glow effect */}
							<div className='absolute -inset-8 bg-gradient-to-r from-pink-400/20 via-white/10 to-rose-400/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700'></div>
							
							{/* Image container with unique styling */}
							<div className='relative bg-gradient-to-br from-white/20 to-white/5 p-1 rounded-3xl backdrop-blur-md border border-white/20 shadow-2xl group-hover:scale-105 transition-all duration-700 will-change-transform'>
								{/* Loading state */}
								<div
									className={`absolute inset-1 bg-gradient-to-br from-pink-400/20 to-rose-400/20 rounded-3xl transition-opacity duration-500 ${
										loaded ? 'opacity-0' : 'opacity-100'
									}`}
									style={{ zIndex: 1 }}
								/>
								
								<img
									className='w-full h-auto rounded-3xl object-cover shadow-2xl'
									src='https://images.unsplash.com/photo-1609220136736-443140cffec6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
									alt='Confident and empowered mother representing the CZASMSMY community of resourceful women'
									decoding='async'
									loading='eager'
									fetchPriority='high'
									srcSet='https://images.unsplash.com/photo-1609220136736-443140cffec6?q=80&w=500&auto=format&fit=crop 500w, https://images.unsplash.com/photo-1609220136736-443140cffec6?q=80&w=1000&auto=format&fit=crop 1000w'
									sizes='(max-width: 768px) 100vw, 50vw'
									onLoad={() => setLoaded(true)}
									style={{ zIndex: 2, position: 'relative' }}
								/>
								
								{/* Floating badge on image */}
								<div className='absolute -top-4 -right-4 bg-pink-500 text-white px-4 py-2 rounded-2xl shadow-xl font-bold text-sm animate-float'>
									#1 Mom Resource
								</div>
							</div>
						</div>
					</div>

					{/* CTA section - unique button design */}
					<div className='space-y-6 animate-fade-in-up' style={{animationDelay: '1000ms'}}>
						<div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
							<a
								href='/blog'
								className='group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-pink-900 bg-white rounded-2xl shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 hover:scale-110 hover:-translate-y-2 overflow-hidden focus:outline-none focus:ring-4 focus:ring-white/50 will-change-transform'
								aria-label='Start exploring proven motherhood methods and articles'
							>
								<span className='absolute inset-0 bg-gradient-to-r from-pink-50 to-rose-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></span>
								<span className='relative flex items-center gap-3'>
									<span className='text-2xl' aria-hidden="true">🚀</span>
									Start Your Journey
									<svg className='w-6 h-6 group-hover:translate-x-2 transition-transform duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24' aria-hidden="true">
										<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7l5 5m0 0l-5 5m5-5H6' />
									</svg>
								</span>
							</a>
							
							<a
								href='/about'
								className='group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:-translate-y-2 overflow-hidden focus:outline-none focus:ring-4 focus:ring-white/30 will-change-transform'
								aria-label='Learn more about CZASMSMY and our mission'
							>
								<span className='relative flex items-center gap-3'>
									<span className='text-2xl' aria-hidden="true">💎</span>
									Discover Our Story
								</span>
							</a>
						</div>
						
						<p className='text-pink-200 text-sm max-w-md mx-auto'>
							Join 25,000+ mothers who have transformed their lives with our proven methods
						</p>
					</div>
				</div>
			</Container>

			{/* Scroll indicator */}
			<div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce will-change-transform' aria-hidden="true">
				<div className='w-6 h-10 border-2 border-white/30 rounded-full flex justify-center'>
					<div className='w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse'></div>
				</div>
			</div>

			{/* Optimized CSS for maximum performance */}
			<style>{`
				@keyframes fade-in-up {
					from {
						opacity: 0;
						transform: translateY(30px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}
				
				@keyframes float {
					0%, 100% { transform: translateY(0px) rotate(0deg); }
					50% { transform: translateY(-10px) rotate(5deg); }
				}
				
				.animate-fade-in-up {
					animation: fade-in-up 0.8s ease-out forwards;
					opacity: 0;
				}
				
				.animate-float {
					animation: float 4s ease-in-out infinite;
					will-change: transform;
				}
				
				/* Performance optimizations */
				.will-change-transform {
					will-change: transform;
				}
				
				/* Accessibility improvements */
				@media (prefers-reduced-motion: reduce) {
					.animate-pulse,
					.animate-bounce,
					.animate-float,
					.animate-fade-in-up,
					.animate-spin {
						animation: none;
					}
					
					.hover\\:scale-105:hover,
					.hover\\:scale-110:hover,
					.hover\\:-translate-y-2:hover,
					.group-hover\\:scale-105,
					.group-hover\\:scale-110,
					.group-hover\\:translate-x-2 {
						transform: none;
					}
					
					.transition-all,
					.transition-transform,
					.transition-opacity {
						transition: none;
					}
					
					.animate-fade-in-up {
						opacity: 1;
						transform: translateY(0);
					}
				}
				
				/* Enhanced focus and contrast */
				a:focus-visible {
					outline: 3px solid #ffffff;
					outline-offset: 2px;
				}
				
				@media (prefers-contrast: high) {
					.text-pink-100 { color: #fce7f3; }
					.text-pink-200 { color: #fbcfe8; }
					.border-white\\/10 { border-color: rgba(255, 255, 255, 0.3); }
					.bg-white\\/5 { background-color: rgba(255, 255, 255, 0.15); }
				}
			`}</style>
		</section>
	)
}