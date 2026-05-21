export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white">
      <section className="max-w-7xl mx-auto px-6 py-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          <div className="lg:col-span-5 flex flex-col justify-center">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-4">
              Premium Mechanical Keyboard
            </p>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Elevate Your
              <span className="block text-yellow-400">
                Typing Experience
              </span>
            </h1>

            <p className="text-gray-400 mt-6 text-lg leading-relaxed">
              Crafted for creators, developers, and enthusiasts who demand precision and elegance.
            </p>

          </div>
          <div className="lg:col-span-7 rounded-[32px] overflow-hidden bg-white/5 border border-white/10 min-h-[500px] flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1511467687858-23d96c32e4ae"
              alt="Keyboard"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </section>
    </main>
  );
}