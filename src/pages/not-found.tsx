import { Container } from '../components/shared/container'

export function NotFoundPage() {
	return (
		<main>
			<section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
				{/* Декоративные элементы */}
				<div className="absolute inset-0 overflow-hidden" aria-hidden="true">
					<div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-pink-200/20 to-pink-300/20 rounded-full blur-3xl animate-pulse will-change-transform"></div>
					<div className="absolute -bottom-40 -left-32 w-96 h-96 bg-gradient-to-tr from-pink-200/20 to-pink-300/20 rounded-full blur-3xl animate-pulse will-change-transform" style={{animationDelay: '1000ms'}}></div>
					<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-pink-200/10 to-pink-300/10 rounded-full blur-2xl animate-bounce will-change-transform"></div>
				</div>
				<Container className="relative z-10 py-20">
					<div className="text-center max-w-xl mx-auto space-y-8">
						<h1 className="text-8xl sm:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-800 via-pink-900 to-pink-800 leading-tight select-none">
							404
						</h1>
						<h2 className="text-3xl sm:text-4xl font-bold text-pink-900">Page Not Found</h2>
						<p className="text-lg text-pink-700 mb-8">The page you're looking for doesn't exist or has been moved.</p>
						<a href="/" className="inline-block">
							<button className="px-8 py-4 text-lg font-bold text-white bg-pink-600 rounded-2xl shadow-lg hover:shadow-pink-500/25 transition-all duration-300 hover:scale-105 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-pink-500/50">
								Return to Home
							</button>
						</a>
					</div>
				</Container>
			</section>
		</main>
	)
}
