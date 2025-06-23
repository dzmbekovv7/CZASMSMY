export function AboutSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-pink-200/30 to-pink-300/30 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-gradient-to-tr from-pink-200/30 to-pink-300/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-pink-200/20 to-pink-300/20 rounded-full blur-2xl animate-bounce"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                    {/* Content Section */}
                    <div className="lg:col-span-7 space-y-8">
                        <div className="space-y-6">
                            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-100 to-pink-200 rounded-full border border-pink-200/50 shadow-sm">
                                <span className="text-sm font-semibold text-pink-700 tracking-wide uppercase">
                                    🌸 Motherhood Wisdom
                                </span>
                            </div>
                            
                            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-800 via-pink-900 to-pink-800 leading-tight">
                                Mom Time Has
                                <br />
                                <span className="relative">
                                    Arrived
                                    <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full transform -rotate-1"></div>
                                </span>
                            </h2>
                            
                            <p className="text-xl sm:text-2xl text-pink-800 font-light leading-relaxed max-w-2xl">
                                Discover the proven methods of a resourceful woman. 
                                <span className="font-semibold text-pink-900"> CZASMSMY</span> brings you 
                                time-tested wisdom, practical solutions, and empowering strategies 
                                for modern motherhood.
                            </p>
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
                            <div className="group p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-pink-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                <div className="w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <span className="text-white text-xl">🌟</span>
                                </div>
                                <h3 className="font-bold text-pink-900 text-lg mb-2">Proven Methods</h3>
                                <p className="text-pink-700 text-sm">Time-tested strategies that actually work</p>
                            </div>
                            
                            <div className="group p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-pink-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                <div className="w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <span className="text-white text-xl">💡</span>
                                </div>
                                <h3 className="font-bold text-pink-900 text-lg mb-2">Smart Solutions</h3>
                                <p className="text-pink-700 text-sm">Innovative approaches for busy moms</p>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="pt-8">
                            <a
                                href="/about"
                                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-pink-600 rounded-2xl shadow-lg hover:shadow-pink-500/25 transition-all duration-300 hover:scale-105 hover:-translate-y-1 overflow-hidden"
                            >
                                <span className="absolute inset-0 bg-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                                <span className="relative flex items-center gap-3">
                                    Discover Our Story
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </span>
                            </a>
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
                                    src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Empowering Motherhood Journey - CZASMSMY"
                                />
                                
                                {/* Floating stats */}
                                <div className="absolute -right-4 top-8 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-pink-200/50 animate-float">
                                    <div className="text-center">
                                        <div className="text-2xl font-black text-pink-600">1000+</div>
                                        <div className="text-xs text-pink-700 font-medium">Happy Moms</div>
                                    </div>
                                </div>
                                
                                <div className="absolute -left-4 bottom-8 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-pink-200/50 animate-float delay-700">
                                    <div className="text-center">
                                        <div className="text-2xl font-black text-pink-600">24/7</div>
                                        <div className="text-xs text-pink-700 font-medium">Support</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom Animation */}
            <style >{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
            `}</style>
        </section>
    )
}