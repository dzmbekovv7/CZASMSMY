import React from 'react'
import { Container } from '../components/shared/container'

export const PrivacyPolicyPage: React.FC = () => {
	return (
		<main>
			<section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 py-20">
				{/* Декоративные элементы */}
				<div className="absolute inset-0 overflow-hidden" aria-hidden="true">
					<div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-pink-200/20 to-pink-300/20 rounded-full blur-3xl animate-pulse will-change-transform"></div>
					<div className="absolute -bottom-40 -left-32 w-96 h-96 bg-gradient-to-tr from-pink-200/20 to-pink-300/20 rounded-full blur-3xl animate-pulse will-change-transform" style={{animationDelay: '1000ms'}}></div>
					<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-pink-200/10 to-pink-300/10 rounded-full blur-2xl animate-bounce will-change-transform"></div>
				</div>
				<Container className="relative z-10 max-w-3xl mx-auto py-12">
					<div className="text-center mb-12">
						<div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-100 to-pink-200 rounded-full border border-pink-200/50 shadow-sm mb-6">
							<span className="text-sm font-semibold text-pink-700 tracking-wide uppercase">Privacy Policy</span>
						</div>
						<h1 className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-800 via-pink-900 to-pink-800 leading-tight mb-4">Our Privacy Policy</h1>
						<p className="text-lg text-pink-700 max-w-2xl mx-auto">Your privacy is important to us. Please read how we handle your data below.</p>
					</div>
					<div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-pink-200/50 p-8 text-lg text-pink-900 space-y-6">
						<p>
							Your privacy is important to us. This Privacy Policy explains how we
							collect, use, disclose, and safeguard your information when you visit
							our website.
						</p>
						<p>
							We collect information about you in a variety of ways, including
							personal data you provide directly to us and data collected
							automatically through your use of our site.
						</p>
						<p>
							The information we collect may be used to personalize your experience,
							improve our website, and provide customer service. We do not sell or
							rent your personal information to third parties.
						</p>
						<p>
							We implement a variety of security measures to maintain the safety of
							your personal information. However, no method of transmission over the
							Internet or method of electronic storage is 100% secure.
						</p>
						<p>
							We may update this Privacy Policy from time to time in order to
							reflect changes to our practices or for other operational, legal, or
							regulatory reasons.
						</p>
						<p>
							By using our website, you hereby consent to our Privacy Policy and
							agree to its terms.
						</p>
						<p>
							We strive to keep your information accurate and up to date. If you
							notice any inaccuracies in your personal data, please let us know so
							we can make the necessary corrections.
						</p>
						<p>
							Our website may contain features or services provided by third
							parties. Any information you provide to these third-party services is
							subject to their privacy policies, not ours.
						</p>
						<p>
							We are committed to protecting the privacy of children. Our services
							are not intended for individuals under the age of 13, and we do not
							knowingly collect personal information from children under 13.
						</p>
					</div>
				</Container>
			</section>
		</main>
	)
}
