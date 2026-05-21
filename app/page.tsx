import { features } from './data/features';

export default function Home() {
  return (
    <main className="relative overflow-hidden min-h-screen bg-[#0B0B0B] text-white">

      {/* Ambient Glow Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500/20 blur-3xl rounded-full" />

      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full" />

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          <div className="lg:col-span-5 flex flex-col justify-center">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-4">
              Premium Mechanical Keyboard
            </p>

            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-tight">
              Elevate Your
              <span className="block text-yellow-400">
                Typing Experience
              </span>
            </h1>

            <p className="text-gray-400 mt-6 text-lg leading-relaxed max-w-lg">
              Crafted for creators, developers, and enthusiasts who demand precision and elegance.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10">

              <button className="px-8 py-4 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-300 hover:scale-105 active:scale-95 transition-all duration-300">
                Shop Now
              </button>

              <button className="px-8 py-4 border border-white rounded-full hover:bg-white/10 hover:scale-105 active:scale-95 transition-all duration-300">
                Explore Collection
              </button>
            </div>
          </div>
          <div className="relative lg:col-span-7 rounded-[32px] overflow-hidden bg-white/5 border border-white/10 min-h-[500px] group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />
            <img
              src="https://images.unsplash.com/photo-1511467687858-23d96c32e4ae"
              alt="Keyboard"
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute bottom-8 left-8 z-20">
              <p className="text-sm uppercase tracking-[0.2em] text-gray-300">
                Precision Engineered
              </p>
              <h3 className="text-3xl lg:text-4xl font-bold mt-2">
                Aurora X1
              </h3>
              <p className="text-gray-300 mt-3 max-w-sm">
                Crafted with premium materials and tactile switches for an immersive typing experience.
              </p>
            </div>
          </div>

        </div>

        <div className="mt-16 mb-6">

          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            Engineered Features
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-3xl bg-white/5 border border-white/10 shadow-2xl backdrop-blur-xl hover:-translate-y-1 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >

              <p className="text-sm uppercase tracking-[0.2em] text-yellow-400 mb-4">
                {feature.label}
              </p>

              <h3 className="text-2xl font-semibold mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>

            </div>
          ))}

        </div>

      </section>
    </main>
  );
}